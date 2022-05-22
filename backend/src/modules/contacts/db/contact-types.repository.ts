import { EntityRepository, Repository } from 'typeorm';
import { ContactTypeEntity } from './contact-type.entity';

@EntityRepository(ContactTypeEntity)
export class ContactTypesRepository extends Repository<ContactTypeEntity> {}
