import { registerAs } from '@nestjs/config';
import { Type } from 'class-transformer';
import { IsString, ValidateNested } from 'class-validator';
import { validateConfig } from './validate-config';

export class MailingConfig {
  @IsString()
  service: string;

  @ValidateNested()
  @Type(() => MailingAuthConfig)
  auth: MailingAuthConfig;
}

export class MailingAuthConfig {
  @IsString()
  user: string;

  @IsString()
  pass: string;
}

const configKey = 'mailing';

export const mailingConfig = registerAs(configKey, () => {
  return validateConfig<MailingConfig>(configKey, MailingConfig, {
    service: 'gmail',
    auth: {
      user: process.env.NODEMAILER_USER,
      pass: process.env.NODEMAILER_PASS,
    },
  });
});
