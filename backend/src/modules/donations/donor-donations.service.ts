import {
  ConflictException,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  EntityLocksConfig,
  entityLocksConfig,
} from 'src/config/entity-locks.config';
import { OrganizationsRepository } from '../organizations/db/organizations.repository';
import { OrganizationTypes } from '../organizations/types/organization-types.enum';
import { DonationRequestsRepository } from './db/donation-requests.repository';
import { CreateDonationRequestDto } from './dto/create-donation-request.dto';
import { DonorUpdateDonationRequestDto } from './dto/donor-update-donation-request.dto';
import { GetDonationsListDto } from './dto/get-donations-list.dto';
import { DonationRequestStatuses } from './types/donation-request-statuses.enum';
import {
  DonationsFiniteStateMachine,
  DonationStatusChangeContext,
} from './types/donations-finite-state-machine.type';

@Injectable()
export class DonorDonationsService {
  private relationsToSend = ['donor', 'deliveryType', 'hubReceiver'];
  private stateMachine: DonationsFiniteStateMachine = {
    [DonationRequestStatuses.CREATED]: {
      [DonationRequestStatuses.CANCELLED]: async (
        ctx: DonationStatusChangeContext,
      ) => {
        ctx.request.status = DonationRequestStatuses.CANCELLED;
        ctx.request.statusText = ctx.statusText;
        await this.donationRequestsRepository.save(ctx.request);
      },
    },
    [DonationRequestStatuses.APPROVED]: {
      [DonationRequestStatuses.SHIPPING_IN_PROGRESS]: async (
        ctx: DonationStatusChangeContext,
      ) => {
        ctx.request.status = DonationRequestStatuses.SHIPPING_IN_PROGRESS;
        await this.donationRequestsRepository.save(ctx.request);
      },
    },
  };

  constructor(
    @InjectRepository(DonationRequestsRepository)
    private donationRequestsRepository: DonationRequestsRepository,
    @InjectRepository(OrganizationsRepository)
    private organizationsRepository: OrganizationsRepository,
    @Inject(entityLocksConfig.KEY)
    private entityLocksConfig: EntityLocksConfig,
  ) {}

  async createRequest(dto: CreateDonationRequestDto, userId: string) {
    const newRequests = await this.donationRequestsRepository.find({
      donorId: userId,
      status: DonationRequestStatuses.CREATED,
    });
    if (newRequests.length >= this.entityLocksConfig.maxNewDonationRequests) {
      throw new ConflictException(`Too many new donation requests`);
    }

    const hub = await this.organizationsRepository.findOne(dto.hubReceiverId);
    if (
      ![OrganizationTypes.HUB, OrganizationTypes.MOBILE_HUB].includes(hub?.type)
    ) {
      throw new NotFoundException(`Hub not found`);
    }

    const request = await this.donationRequestsRepository.save({
      ...dto,
      donorId: userId,
      status: DonationRequestStatuses.CREATED,
    });

    return this.donationRequestsRepository.findOne(request.id, {
      relations: this.relationsToSend,
    });
  }

  async getUserDonationsList(userId: string, dto: GetDonationsListDto) {
    const { pagination } = dto;

    return this.donationRequestsRepository.findUserDonationRequests(
      userId,
      pagination.getOffset(),
      pagination.getLimit(),
      this.relationsToSend,
    );
  }

  async updateDonationRequest(
    requestId: string,
    userId: string,
    dto: DonorUpdateDonationRequestDto,
  ) {
    const request = await this.donationRequestsRepository.findOne({
      id: requestId,
      donorId: userId,
    });
    if (!request) {
      throw new NotFoundException(`Request '${requestId}' not found`);
    }

    const applyChanges = this.stateMachine[request.status]?.[dto.status];
    if (!applyChanges) {
      throw new ConflictException(`Unexpected state change`);
    }

    await applyChanges({ request, statusText: dto.statusText });

    return this.donationRequestsRepository.findOne(requestId, {
      relations: this.relationsToSend,
    });
  }
}
