import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ContactTypesRepository } from './db/contact-types.repository';

@Injectable()
export class ContactsService {
  constructor(
    @InjectRepository(ContactTypesRepository)
    private contactTypesRepository: ContactTypesRepository,
  ) {}

  async getContactTypes(): Promise<string[]> {
    const types = await this.contactTypesRepository.find({
      relations: ['name'],
    });
    return types.map((t) => t.type);
  }
}
