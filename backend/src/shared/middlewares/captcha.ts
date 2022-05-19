import {
  Inject,
  Injectable,
  NestMiddleware,
  UnprocessableEntityException,
} from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import axios, { AxiosInstance } from 'axios';
import * as qs from 'qs';
import { CaptchaConfig, captchaConfig } from 'src/config/captcha.config';

@Injectable()
export class CaptchaMiddleware implements NestMiddleware {
  private client: AxiosInstance;

  constructor(
    @Inject(captchaConfig.KEY)
    private catchaConfig: CaptchaConfig,
  ) {
    this.client = axios.create({
      baseURL: this.catchaConfig.baseUrl,
      timeout: 10000,
    });
  }

  async use(req: Request, res: Response, next: NextFunction) {
    if (!this.catchaConfig.enabled) {
      next();
      return;
    }

    const { data } = await this.client.post<CaptchaResponse>(
      '/siteverify',
      qs.stringify({
        secret: this.catchaConfig.apiSecret,
        response: req.body.recaptchaResponse,
      }),
    );

    if (
      !data.success ||
      data.score < this.catchaConfig.minScore ||
      data.action !== this.getAction(req)
    ) {
      throw new UnprocessableEntityException('Captcha validation failed');
    }

    next();
  }

  getAction(req: Request) {
    const url = req.url;
    const actionsMapper = {
      '/api/v1/auth/sign-in': CaptchaActions.SIGN_IN,
      '/api/v1/auth/sign-up': CaptchaActions.SIGN_UP,
    };

    return actionsMapper[url];
  }
}

export enum CaptchaActions {
  SIGN_IN = 'signin',
  SIGN_UP = 'signup',
}

interface CaptchaResponse {
  success: boolean;
  score: number;
  action: string;
  challenge_ts: string;
  hostname: string;
  'error-codes': string[];
}
