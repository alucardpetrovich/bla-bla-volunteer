import {
  ConflictException,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { OrganizationsRepository } from '../organizations/db/organizations.repository';
import { OrganizationTypes } from '../organizations/types/organization-types.enum';
import { DonationRequestsRepository } from './db/donation-requests.repository';
import { HubUpdateDonationRequestDto } from './dto/hub-update-donation-request.dto';
import { DonationRequestStatuses } from './types/donation-request-statuses.enum';
import {
  DonationsFiniteStateMachine,
  DonationStatusChangeContext,
} from './types/donations-finite-state-machine.type';

@Injectable()
export class HubDonationsService {
  private relationsToSend = ['donor', 'deliveryType', 'hubReceiver'];
  private stateMachine: DonationsFiniteStateMachine = {
    [DonationRequestStatuses.CREATED]: {
      [DonationRequestStatuses.APPROVED]: async (
        ctx: DonationStatusChangeContext,
      ) => {
        ctx.request.status = DonationRequestStatuses.APPROVED;
        ctx.request.receiverDeliveryInfo = ctx.deliveryInfo;
        await this.donationRequestsRepository.save(ctx.request);
      },
      [DonationRequestStatuses.REJECTED]: async (
        ctx: DonationStatusChangeContext,
      ) => {
        ctx.request.status = DonationRequestStatuses.REJECTED;
        ctx.statusText = ctx.statusText;
        await this.donationRequestsRepository.save(ctx.request);
      },
    },
    [DonationRequestStatuses.SHIPPING_IN_PROGRESS]: {
      [DonationRequestStatuses.RECEIVED]: async (
        ctx: DonationStatusChangeContext,
      ) => {
        ctx.request.status = DonationRequestStatuses.RECEIVED;
        await this.donationRequestsRepository.save(ctx.request);
      },
    },
  };

  constructor(
    @InjectRepository(DonationRequestsRepository)
    private donationRequestsRepository: DonationRequestsRepository,
    @InjectRepository(OrganizationsRepository)
    private organizationsRepository: OrganizationsRepository,
  ) {}

  async getHubDonationsList(hubId: string, userId: string, dto: PaginationDto) {
    const hub = await this.organizationsRepository.findOne({ id: hubId });
    if (
      ![OrganizationTypes.HUB, OrganizationTypes.MOBILE_HUB].includes(hub?.type)
    ) {
      throw new NotFoundException(`Hub not found`);
    }
    if (hub.createdBy !== userId) {
      throw new ForbiddenException(`Action is not allowed`);
    }

    return this.donationRequestsRepository.findHubDonationRequests(
      hubId,
      dto.getOffset(),
      dto.getLimit(),
      this.relationsToSend,
    );
  }

  async updateDonationRequest(
    requestId: string,
    userId: string,
    dto: HubUpdateDonationRequestDto,
  ) {
    const request = await this.donationRequestsRepository.findOne(requestId, {
      relations: ['hubReceiver'],
    });
    if (!request) {
      throw new NotFoundException(`Request '${requestId}' not found`);
    }
    if (request.hubReceiver.createdBy !== userId) {
      throw new ForbiddenException(`Updating of hub data is not allowed`);
    }

    const applyChanges = this.stateMachine[request.status]?.[dto.status];
    if (!applyChanges) {
      throw new ConflictException(`Unexpected state change`);
    }

    await applyChanges({
      request,
      deliveryInfo: dto.deliveryInfo,
      statusText: dto.statusText,
    });

    return this.donationRequestsRepository.findOne(requestId, {
      relations: this.relationsToSend,
    });
  }
}
