import { DynamicModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { databaseConfig } from './database.config';
import { generalConfig } from './general.config';
import { mailingConfig } from './mailing.config';

export const configModule: DynamicModule = ConfigModule.forRoot({
  isGlobal: true,
  load: [databaseConfig, generalConfig, mailingConfig],
});
