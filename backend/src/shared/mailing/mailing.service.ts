import { Inject, Injectable } from '@nestjs/common';
import { MailingConfig, mailingConfig } from 'src/config/mailing.config';
import nodemailer from 'nodemailer';

@Injectable()
export class MailingService {
  private transport: nodemailer.Transporter<nodemailer.SentMessageInfo>;

  constructor(@Inject(mailingConfig.KEY) private mailingConfig: MailingConfig) {
    this.transport = nodemailer.createTransport(mailingConfig);
  }

  async sendVerificationEmail(
    to: string,
    verificationLink: string,
  ): Promise<void> {
    await this.sendEmail(
      to,
      'Email verification needed',
      `<a href="${verificationLink}">Click to verify</a>`,
    );
  }

  private async sendEmail(
    to: string,
    subject: string,
    body: string,
  ): Promise<void> {
    await this.transport.sendMail({
      from: this.mailingConfig.auth.user,
      to,
      subject,
      html: body,
    });
  }
}
