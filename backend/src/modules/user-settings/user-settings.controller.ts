import {
  Body,
  Controller,
  Put,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { LanguageHeader } from 'src/shared/decorators/language-header.decorator';
import { UserId } from 'src/shared/decorators/user-id.decorators';
import { ResponseInterceptor } from 'src/shared/interceptors/response.interceptor';
import { JwtGuard } from '../auth/guards/jwt.guard';
import { UserResponseSerializer } from '../users/serializers/user.response.serializer';
import { SetCurrentUserSettingsDto } from './dto/set-current-user-settings.dto';
import { UserSettingsService } from './user-settings.service';

@Controller('v1/users/settings')
@UseGuards(JwtGuard)
@ApiTags('User settings Controller')
@ApiBearerAuth()
export class UserSettingsController {
  constructor(private service: UserSettingsService) {}

  @Put()
  @UseInterceptors(new ResponseInterceptor(UserResponseSerializer))
  @ApiOperation({ summary: 'Change current user settings' })
  @LanguageHeader()
  @ApiUnauthorizedResponse({ description: 'User is not authorized' })
  @ApiOkResponse({
    description: 'Current user settings changed',
    type: UserResponseSerializer,
  })
  async setCurrentUserSettings(
    @Body() dto: SetCurrentUserSettingsDto,
    @UserId() userId: string,
  ) {
    const user = await this.service.setCurrentUserSettings(dto, userId);
    return { user };
  }
}
