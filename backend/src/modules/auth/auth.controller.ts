import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  UseInterceptors,
} from '@nestjs/common';
import {
  ApiConflictResponse,
  ApiCreatedResponse,
  ApiForbiddenResponse,
  ApiNoContentResponse,
  ApiNotFoundResponse,
  ApiOperation,
  ApiPreconditionFailedResponse,
  ApiTags,
} from '@nestjs/swagger';
import { ResponseInterceptor } from 'src/shared/interceptors/response.interceptor';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';
import { RefreshTokenDto } from './dto/refresh-tokens.dto';
import { RefreshTokensSerializer } from './serializers/refresh-tokens.serializer';
import { SignInSerializer } from './serializers/sign-in.serializer';
import { SignUpSerializer } from './serializers/sign-up.serializer';

@Controller('/v1/auth')
@ApiTags('Auth Controller')
export class AuthController {
  constructor(private service: AuthService) {}

  @Post('sign-up')
  @UseInterceptors(new ResponseInterceptor(SignUpSerializer))
  @ApiOperation({ summary: 'Sign up' })
  @ApiConflictResponse({ description: 'User with such email already exists' })
  @ApiCreatedResponse({
    description: 'Registration succeeded',
    type: SignUpSerializer,
  })
  async signUp(@Body() authDto: AuthDto): Promise<SignUpSerializer> {
    const user = await this.service.signUp(authDto);
    return { user };
  }

  @Get('/verify/:verificationToken')
  @HttpCode(204)
  @ApiOperation({ summary: 'Sign up' })
  @ApiNotFoundResponse({ description: 'verification info not found' })
  @ApiNoContentResponse({ description: 'Registration succeeded' })
  async verifyEmail(
    @Param('verificationToken') verificationToken: string,
  ): Promise<void> {
    return this.service.verifyEmail(verificationToken);
  }

  @Post('sign-in')
  @UseInterceptors(new ResponseInterceptor(SignInSerializer))
  @ApiOperation({ summary: 'Sign in' })
  @ApiNotFoundResponse({ description: 'User with such email not found' })
  @ApiForbiddenResponse({ description: 'Password is wrong' })
  @ApiPreconditionFailedResponse({ description: 'User is not verified' })
  @ApiCreatedResponse({
    description: 'Signing in succeeded',
    type: SignUpSerializer,
  })
  async signIn(@Body() dto: AuthDto): Promise<SignInSerializer> {
    return this.service.signIn(dto);
  }

  @Post('refresh')
  @UseInterceptors(new ResponseInterceptor(RefreshTokensSerializer))
  @ApiOperation({ summary: 'Refresh token pairs' })
  @ApiForbiddenResponse({
    description: ' Refresh token is revoked or not valid',
  })
  @ApiCreatedResponse({
    description: 'Tokens refresh succeeded',
    type: RefreshTokensSerializer,
  })
  async refreshTokens(
    @Body() dto: RefreshTokenDto,
  ): Promise<RefreshTokensSerializer> {
    const tokens = await this.service.refreshTokens(dto);
    return { tokens };
  }

  @Delete('sign-out')
  @HttpCode(204)
  @ApiOperation({ summary: 'Sign out' })
  @ApiForbiddenResponse({ description: 'Refresh token is not valid' })
  @ApiNoContentResponse({
    description: 'Sign out succeeded',
  })
  async signOut(@Body() dto: RefreshTokenDto) {
    return this.service.signOut(dto);
  }
}
