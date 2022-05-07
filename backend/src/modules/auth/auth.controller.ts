import { Body, Controller, Post, UseInterceptors } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { ResponseInterceptor } from 'src/shared/interceptors/response.interceptor';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/sign-up.dto';
import { SignUpSerializer } from './serializers/sign-up.serializer';

@Controller('auth')
@ApiTags('Auth Controller')
export class AuthController {
  constructor(private service: AuthService) {}

  @Post()
  @ApiOperation({ summary: 'Sign up' })
  @UseInterceptors(new ResponseInterceptor(SignUpSerializer))
  @ApiOkResponse({
    description: 'Registration succeeded',
    type: SignUpSerializer,
    isArray: true,
  })
  async signUp(@Body() authDto: AuthDto): Promise<SignUpSerializer> {
    const user = await this.service.signUp(authDto);
    return { user };
  }

  // TODO: sign-up
  // TODO: sign-in
  // TODO: verify
  // TODO: sign-out
}
