import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { OrganizationsRepository } from 'src/modules/organizations/db/organizations.repository';
import { OrganizationTypes } from 'src/modules/organizations/types/organization-types.enum';
import { HumDeliveriesRepository } from '../db/hum-deliveries.repository';
import { HumDeliveryRelations } from '../types/hum-delivery-relations.enum';
import { CreateHumDeliveryRequestDto } from './dto/create-hum-delivery-request.dto';

@Injectable()
export class RecipientHumDeliveriesService {
  constructor(
    @InjectRepository(HumDeliveriesRepository)
    private humDeliveriesRepository: HumDeliveriesRepository,
    @InjectRepository(OrganizationsRepository)
    private organizationsRepository: OrganizationsRepository,
  ) {}

  async createHumDelivery(
    recipientId: string,
    userId: string,
    dto: CreateHumDeliveryRequestDto,
    language: string,
  ) {
    await this.validateRecipient(recipientId, userId);

    const delivery = await this.humDeliveriesRepository.save({
      ...dto,
      recipientId,
    });

    return this.humDeliveriesRepository.findById(delivery.id, language, [
      HumDeliveryRelations.PICKUPS,
      HumDeliveryRelations.PICKUP_ITEMS,
      HumDeliveryRelations.ITEMS_RECEIVED,
      HumDeliveryRelations.DRIVER,
    ]);
  }

  private async validateRecipient(recipientId: string, userId: string) {
    const recipient = await this.organizationsRepository.findOne(recipientId);
    if (
      !recipient ||
      recipient.type != OrganizationTypes.RECIPIENT ||
      recipient.createdBy != userId
    ) {
      throw new NotFoundException('Recipient not found');
    }

    return recipient;
  }
}
