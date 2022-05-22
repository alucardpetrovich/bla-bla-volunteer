import {
  ConflictException,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ContactsRepository } from '../contacts/db/contacts.repository';
import { OrganizationDto } from './dto/organization.dto';
import { OrganizationTypesRepository } from './db/organization-types.repository';
import { OrganizationsRepository } from './db/organizations.repository';

@Injectable()
export class OrganizationsService {
  constructor(
    @InjectRepository(OrganizationsRepository)
    private organizationsRepository: OrganizationsRepository,
    @InjectRepository(OrganizationTypesRepository)
    private organizationTypesRepository: OrganizationTypesRepository,
    @InjectRepository(ContactsRepository)
    private contactsRepository: ContactsRepository,
  ) {}

  async createOrganization(creatorId: string, dto: OrganizationDto) {
    const alreadyOwnedOrganization = await this.organizationsRepository.findOne(
      { createdBy: creatorId },
    );
    if (alreadyOwnedOrganization) {
      throw new ConflictException('You already own an organization');
    }

    return this.organizationsRepository.save({
      ...dto,
      createdBy: creatorId,
    });
  }

  async getOrganizationTypes(): Promise<string[]> {
    const types = await this.organizationTypesRepository.find();
    return types.map((t) => t.type);
  }

  async updateOrganization(id: string, userId: string, dto: OrganizationDto) {
    const organization = await this.organizationsRepository.findOne(id);
    if (!organization) {
      throw new NotFoundException(`Organization with id '${id}'  not found`);
    }
    if (organization.createdBy !== userId) {
      throw new ForbiddenException('Action is not allowed');
    }

    const organizationUpdated = await this.organizationsRepository.save({
      ...organization,
      ...dto,
    });
    await this.contactsRepository.removeMissingContacts(
      organizationUpdated,
      'organizationId',
    );

    return organizationUpdated;
  }
}
