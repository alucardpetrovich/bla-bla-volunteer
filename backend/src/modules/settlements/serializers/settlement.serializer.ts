import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { ExposeLocation } from 'src/shared/decorators/expose-location.decorator';
import { ExposeTranslation } from 'src/shared/decorators/transform-obj.decorator';
import { LocationSerializer } from 'src/shared/serializers/location.serializer';

export class SettlementSerializer {
  @ApiProperty()
  @Expose()
  id: string;

  @ApiProperty()
  @ExposeTranslation('name')
  name: string;

  @ApiProperty()
  @Expose()
  type: string;

  @ApiProperty()
  @Expose()
  countryCode: string;

  @ApiPropertyOptional()
  @ExposeTranslation('region.name')
  region: string | null;

  @ApiPropertyOptional()
  @ExposeTranslation('district.name')
  district: string | null;

  @ApiProperty()
  @ExposeLocation('centerLocation')
  centerLocation: LocationSerializer;
}
