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
import { OrganizationRelations } from './types/organization-relations.enum';
import { OrganizationStatuses } from './types/organization-statuses.enum';
import { ContactEntity } from '../contacts/db/contact.entity';
import { AccessModes } from '../contacts/types/access-modes.enum';
import { AccessTypes } from '../contacts/types/access-types.enum';

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
    private entityLocksConf: EntityLocksConfig,
  ) {}

  async createOrganization(
    creatorId: string,
    dto: OrganizationDto,
    language: string,
  ) {
    const alreadyOwnedOrganization = await this.organizationsRepository.findOne(
      { createdBy: creatorId, type: dto.type },
    );
    if (alreadyOwnedOrganization) {
      throw new ConflictException('You already own an organization');
    }

    const organizationCreated = await this.organizationsRepository.save({
      ...dto,
      status: OrganizationStatuses.CREATED,
      createdBy: creatorId,
    });

    return this.organizationsRepository.findOrganizationById(
      organizationCreated.id,
      language,
      creatorId,
      [OrganizationRelations.SETTLEMENT, OrganizationRelations.CONTACTS],
    );
  }

  async getOrganizationTypes(): Promise<string[]> {
    const types = await this.organizationTypesRepository.find();
    return types.map((t) => t.type);
  }

  async updateOrganization(
    id: string,
    userId: string,
    dto: OrganizationDto,
    language: string,
  ) {
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

    return this.organizationsRepository.findOrganizationById(
      organizationUpdated.id,
      language,
      userId,
      [OrganizationRelations.SETTLEMENT, OrganizationRelations.CONTACTS],
    );
  }

  async getHubsList(dto: GetHubsListDto, userId: string, language: string) {
    const organizations = await this.organizationsRepository.findHubsList({
      search: dto.search,
      point: dto.point,
      language,
      offset: dto.pagination.getOffset(),
      limit: dto.pagination.getLimit(),
      maxDistance: this.entityLocksConf.maxHubsSearchDistanceKilometers * 1000,
      userId,
      relations: [
        OrganizationRelations.CONTACTS,
        OrganizationRelations.CONTACT_ACCESS,
        OrganizationRelations.SETTLEMENT,
      ],
    });

    return organizations.map((o) => {
      o.contacts = this.prepareContacts(o.contacts, userId, o.createdBy);
      return o;
    });
  }

  prepareContacts(
    contacts: ContactEntity[],
    userId: string,
    createdBy: string,
  ) {
    if (userId === createdBy) {
      return contacts;
    }

    return contacts.filter((c) => {
      if (c.accessMode === AccessModes.PUBLIC) {
        return true;
      } else if (c.accessMode === AccessModes.READ_BY_REQUEST) {
        return c.accesses.some(
          (a) => a.userId === userId && a.type === AccessTypes.READ,
        );
      }

      return false;
    });
  }
}
