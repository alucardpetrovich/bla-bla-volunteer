import { EntityRepository, In, Not, Repository } from 'typeorm';
import { OrganizationContactEntity } from '../enitities/organization-contact.entity';
import { OrganizationEntity } from '../enitities/organization.entity';

@EntityRepository(OrganizationContactEntity)
export class OrganizationContactsRepository extends Repository<OrganizationContactEntity> {
  async removeMissingContacts(organization: OrganizationEntity) {
    if (!organization.contacts.length) {
      await this.delete({ organizationId: organization.id });
    }

    await this.delete({
      organizationId: organization.id,
      id: Not(In(organization.contacts.map((c) => c.id))),
    });
  }
}
