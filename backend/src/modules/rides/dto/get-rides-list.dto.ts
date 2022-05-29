import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { PaginationDto } from 'src/shared/dto/pagination.dto';

export class GetRidesListDto {
  @ApiProperty()
  @Type(() => PaginationDto)
  @ValidateNested()
  pagination: PaginationDto;
}
