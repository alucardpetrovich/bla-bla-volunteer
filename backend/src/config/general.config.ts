import { registerAs } from '@nestjs/config';
import { IsBoolean, IsInt, IsString } from 'class-validator';
import { validateConfig } from './validate-config';

export class GeneralConfig {
  @IsInt()
  port: number;

  @IsBoolean()
  showDocs: boolean;

  @IsInt()
  bcryptSaltRounds: number;

  @IsString()
  serverUrl: string;
}

const configKey = 'general';

export const generalConfig = registerAs(configKey, () => {
  return validateConfig<GeneralConfig>(configKey, GeneralConfig, {
    port: parseInt(process.env.PORT),
    bcryptSaltRounds: parseInt(process.env.BCRYPT_SALT_ROUNDS),
    showDocs: process.env.SHOW_DOCS === 'true',
    serverUrl: process.env.SERVER_URL,
  });
});
