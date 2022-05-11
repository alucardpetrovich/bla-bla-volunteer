import {
  ConflictException,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { OrganizationDto } from './dto/organization.dto';
import { ContactTypesRepository } from './repositories/contact-types.repository';
import { OrganizationContactsRepository } from './repositories/organization-contacts.repository';
import { OrganizationTypesRepository } from './repositories/organization-types.repository';
import { OrganizationsRepository } from './repositories/organizations.repository';

@Injectable()
export class OrganizationsService {
  constructor(
    @InjectRepository(OrganizationsRepository)
    private organizationsRepository: OrganizationsRepository,
    @InjectRepository(OrganizationTypesRepository)
    private organizationTypesRepository: OrganizationTypesRepository,
    @InjectRepository(ContactTypesRepository)
    private contactTypesRepository: ContactTypesRepository,
    @InjectRepository(OrganizationContactsRepository)
    private organizationContactsRepository: OrganizationContactsRepository,
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

  async getContactTypes(): Promise<string[]> {
    const types = await this.contactTypesRepository.find();
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
    await this.organizationContactsRepository.removeMissingContacts(
      organizationUpdated,
    );

    return organizationUpdated;
  }
}
