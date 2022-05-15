import { ApiProperty } from '@nestjs/swagger';
import { Expose, Type } from 'class-transformer';
import { CountrySerializer } from './country.serializer';

export class CountriesListSerializer {
  @ApiProperty()
  @Type(() => CountrySerializer)
  @Expose()
  countries: CountrySerializer[];
}
