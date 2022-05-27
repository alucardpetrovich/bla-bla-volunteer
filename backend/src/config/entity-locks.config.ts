import { registerAs } from '@nestjs/config';
import { IsInt } from 'class-validator';
import { validateConfig } from './validate-config';

export class EntityLocksConfig {
  @IsInt()
  maxUnfinishedRides: number;

  @IsInt()
  maxNewDonationRequests: number;
}

const configKey = 'entity-locks';

export const entityLocksConfig = registerAs(configKey, () => {
  return validateConfig<EntityLocksConfig>(configKey, EntityLocksConfig, {
    maxUnfinishedRides: parseInt(process.env.MAX_UNFINISHED_RIDES) || 10,
  });
});
