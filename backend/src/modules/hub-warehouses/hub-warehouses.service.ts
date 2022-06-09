import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { OrganizationsRepository } from '../organizations/db/organizations.repository';
import { HubWarehouseItemsRepository } from './db/hub-warehouse-items.repository';
import { GetHubWarehouseItemsListDto } from './dto/get-hub-warehouse-items-list.dto';
import { HubWarehouseItemDto } from './dto/hub-warehouse-item.dto';
import { HubWarehouseItemRelations } from './types/hub-warehouse-item-relations.enum';

@Injectable()
export class HubWarehousesService {
  constructor(
    @InjectRepository(HubWarehouseItemsRepository)
    private hubWarehouseItemsRepository: HubWarehouseItemsRepository,
    @InjectRepository(OrganizationsRepository)
    private organizationsRepository: OrganizationsRepository,
  ) {}

  async createWarehouseItem(
    hubId: string,
    userId: string,
    dto: HubWarehouseItemDto,
    language: string,
  ) {
    await this.validateHub(hubId, userId);
    const item = await this.hubWarehouseItemsRepository.save({
      ...dto,
      hubId,
    });

    return this.hubWarehouseItemsRepository.findById(item.id, language, [
      HubWarehouseItemRelations.HUB,
      HubWarehouseItemRelations.PRODUCT,
    ]);
  }

  async getHubWarehouseItemsList(
    hubId: string,
    userId: string,
    dto: GetHubWarehouseItemsListDto,
    language: string,
  ) {
    const { pagination } = dto;

    await this.validateHub(hubId, userId);
    return this.hubWarehouseItemsRepository.findItems({
      offset: pagination.getOffset(),
      limit: pagination.getLimit(),
      language,
      relations: [
        HubWarehouseItemRelations.HUB,
        HubWarehouseItemRelations.PRODUCT,
      ],
    });
  }

  async getWarehouseItemById(
    itemId: string,
    hubId: string,
    userId: string,
    language: string,
  ) {
    await this.validateHub(hubId, userId);

    const item = await this.hubWarehouseItemsRepository.findById(
      itemId,
      language,
      [HubWarehouseItemRelations.HUB, HubWarehouseItemRelations.PRODUCT],
    );
    if (!item || item.hubId !== hubId) {
      throw new NotFoundException(`Item '${itemId}' not found`);
    }

    return item;
  }

  async updateWarehouseItemById(
    itemId: string,
    hubId: string,
    userId: string,
    dto: HubWarehouseItemDto,
    language: string,
  ) {
    await this.validateHub(hubId, userId);

    const res = await this.hubWarehouseItemsRepository.update(
      { hubId, id: itemId },
      { ...dto },
    );
    if (res.affected < 1) {
      throw new NotFoundException('Hub warehouse item not found');
    }

    return this.hubWarehouseItemsRepository.findById(itemId, language, [
      HubWarehouseItemRelations.HUB,
      HubWarehouseItemRelations.PRODUCT,
    ]);
  }

  async deleteWarehouseItem(itemId: string, hubId: string, userId: string) {
    await this.validateHub(hubId, userId);

    const res = await this.hubWarehouseItemsRepository.delete({
      hubId,
      id: itemId,
    });
    if (res.affected < 1) {
      throw new NotFoundException('Hub warehouse item not found');
    }
  }

  async validateHub(hubId: string, userId: string) {
    const hub = await this.organizationsRepository.findOne(hubId);
    if (!hub || hub.createdBy !== userId) {
      throw new NotFoundException(`Hub '${hubId}' not found`);
    }

    return hub;
  }
}
