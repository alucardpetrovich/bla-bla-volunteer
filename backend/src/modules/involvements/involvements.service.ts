import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { InvolvementTypesRepository } from './db/involvement-types.repository';

@Injectable()
export class InvolvementsService {
  constructor(
    @InjectRepository(InvolvementTypesRepository)
    private involvementTypesRepository: InvolvementTypesRepository,
  ) {}

  async getInvolvementTypes() {
    const types = await this.involvementTypesRepository.find();
    return types.map((t) => t.type);
  }
}
