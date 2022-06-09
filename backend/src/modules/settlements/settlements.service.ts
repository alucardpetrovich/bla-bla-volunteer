import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SearchSettlementsDto } from './dto/search-settlements.dto';
import { SettlementsRepository } from './db/settlements.repository';

@Injectable()
export class SettlementsService {
  private PAGE_SIZE = 50;

  constructor(
    @InjectRepository(SettlementsRepository)
    private settlementsRepository: SettlementsRepository,
  ) {}

  async searchSettlements(dto: SearchSettlementsDto, language: string) {
    const offset = (dto.page - 1) * this.PAGE_SIZE;
    return this.settlementsRepository.searchSettlements({
      query: dto.search,
      offset,
      limit: this.PAGE_SIZE,
      language,
    });
  }
}
