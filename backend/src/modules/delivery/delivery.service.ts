import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeliveryTypesRepository } from './db/delivery-types.repository';

@Injectable()
export class DeliveryService {
  constructor(
    @InjectRepository(DeliveryTypesRepository)
    private deliveryTypesRepository: DeliveryTypesRepository,
  ) {}

  async getDeliveryTypes(language: string) {
    return this.deliveryTypesRepository.findDeliveryTypes(language);
  }
}
