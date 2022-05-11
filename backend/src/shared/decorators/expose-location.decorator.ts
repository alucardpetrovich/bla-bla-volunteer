import { applyDecorators } from '@nestjs/common';
import { Expose, Transform, Type } from 'class-transformer';
import { Point } from 'geojson';
import { LocationSerializer } from '../serializers/location.serializer';

export function ExposeLocation() {
  return applyDecorators(
    Expose(),
    Type(() => LocationSerializer),
    Transform(({ value }: { value: Point }): LocationSerializer => {
      const [lon, lat] = value.coordinates;
      return { lon, lat };
    }),
  );
}
