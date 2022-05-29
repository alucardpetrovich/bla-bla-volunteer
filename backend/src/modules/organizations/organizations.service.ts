import {
  ConflictException,
  ForbiddenException,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ContactsRepository } from '../contacts/db/contacts.repository';
import { OrganizationDto } from './dto/organization.dto';
import { OrganizationTypesRepository } from './db/organization-types.repository';
import { OrganizationsRepository } from './db/organizations.repository';
import { GetHubsListDto } from './dto/get-hubs-list.dto';
import {
  EntityLocksConfig,
  entityLocksConfig,
} from 'src/config/entity-locks.config';

@Injectable()
export class OrganizationsService {
  constructor(
    @InjectRepository(OrganizationsRepository)
    private organizationsRepository: OrganizationsRepository,
    @InjectRepository(OrganizationTypesRepository)
    private organizationTypesRepository: OrganizationTypesRepository,
    @InjectRepository(ContactsRepository)
    private contactsRepository: ContactsRepository,
    @Inject(entityLocksConfig.KEY)
    private entityLocksConfig: EntityLocksConfig,
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

  async getHubsList(dto: GetHubsListDto, language: string) {
    return this.organizationsRepository.findHubsList({
      search: dto.search,
      point: dto.point,
      language,
      offset: dto.pagination.getOffset(),
      limit: dto.pagination.getLimit(),
      maxDistance:
        this.entityLocksConfig.maxHubsSearchDistanceKilometers * 1000,
    });
  }
}
