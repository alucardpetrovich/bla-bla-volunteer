import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { OrganizationsRepository } from '../organizations/db/organizations.repository';
import { RecipientNeedsRepository } from './db/recipient-needs.repository';
import { GetRecipientNeedsListDto } from './dto/get-recipient-needs-list.dto';
import { RecipientNeedDto } from './dto/recipient-need.dto';
import { RecipientNeedRelations } from './types/recipient-need-relations.enum';

@Injectable()
export class NeedsService {
  constructor(
    @InjectRepository(RecipientNeedsRepository)
    private recipientNeedsRepository: RecipientNeedsRepository,
    @InjectRepository(OrganizationsRepository)
    private organizationsRepository: OrganizationsRepository,
  ) {}

  async createNeed(
    recipientId: string,
    userId: string,
    dto: RecipientNeedDto,
    language: string,
  ) {
    await this.validateRecipient(recipientId, userId);
    const need = await this.recipientNeedsRepository.save({
      ...dto,
      recipientId,
    });

    return this.recipientNeedsRepository.findById(need.id, language, [
      RecipientNeedRelations.RECIPIENT,
      RecipientNeedRelations.PRODUCT,
    ]);
  }

  async getNeedsList(
    recipientId: string,
    userId: string,
    dto: GetRecipientNeedsListDto,
    language: string,
  ) {
    const { pagination } = dto;

    await this.validateRecipient(recipientId, userId);
    return this.recipientNeedsRepository.findNeeds({
      recipientId,
      offset: pagination.getOffset(),
      limit: pagination.getLimit(),
      language,
      relations: [
        RecipientNeedRelations.RECIPIENT,
        RecipientNeedRelations.PRODUCT,
      ],
    });
  }

  async getNeedById(
    needId: string,
    recipientId: string,
    userId: string,
    language: string,
  ) {
    await this.validateRecipient(recipientId, userId);

    const need = await this.recipientNeedsRepository.findById(
      needId,
      language,
      [RecipientNeedRelations.RECIPIENT, RecipientNeedRelations.PRODUCT],
    );
    if (!need || need.recipientId !== recipientId) {
      throw new NotFoundException(`Need ${needId} not found`);
    }

    return need;
  }

  async updateNeedById(
    needId: string,
    recipientId: string,
    userId: string,
    dto: RecipientNeedDto,
    language: string,
  ) {
    await this.validateRecipient(recipientId, userId);

    const res = await this.recipientNeedsRepository.update(
      { recipientId, id: needId },
      { ...dto },
    );
    if (res.affected < 1) {
      throw new NotFoundException(`Need ${needId} not found`);
    }

    return this.recipientNeedsRepository.findById(needId, language, [
      RecipientNeedRelations.RECIPIENT,
      RecipientNeedRelations.PRODUCT,
    ]);
  }

  async deleteNeed(needId: string, recipientId: string, userId: string) {
    await this.validateRecipient(recipientId, userId);

    const res = await this.recipientNeedsRepository.delete({
      recipientId,
      id: needId,
    });
    if (res.affected < 1) {
      throw new NotFoundException(`Need ${needId} not found`);
    }
  }

  async validateRecipient(recipientId: string, userId: string) {
    const hub = await this.organizationsRepository.findOne(recipientId);
    if (!hub || hub.createdBy !== userId) {
      throw new NotFoundException(`Recipient '${recipientId}' not found`);
    }

    return hub;
  }
}
