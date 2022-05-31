import {
  Controller,
  Get,
  Query,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiHeader,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { Language } from 'src/shared/decorators/language.decorator';
import { UserId } from 'src/shared/decorators/user-id.decorators';
import { ResponseInterceptor } from 'src/shared/interceptors/response.interceptor';
import { JwtGuard } from '../auth/guards/jwt.guard';
import { GetHubsListDto } from './dto/get-hubs-list.dto';
import { OrganizationsService } from './organizations.service';
import { OrganizationsListSerializer } from './serializers/organizations-list.serializer';

@Controller('v1/hubs')
@UseGuards(JwtGuard)
@ApiTags('Hubs Controller')
@ApiBearerAuth()
export class HubsController {
  constructor(private service: OrganizationsService) {}

  @Get()
  @UseInterceptors(new ResponseInterceptor(OrganizationsListSerializer))
  @ApiOperation({ summary: 'Get list of hubs' })
  @ApiHeader({ name: 'Accept-Language' })
  @ApiUnauthorizedResponse({ description: 'User is not authorized' })
  @ApiOkResponse({
    description: 'Hubs returned',
    type: OrganizationsListSerializer,
  })
  async getHubsList(
    @Query() dto: GetHubsListDto,
    @UserId() userId: string,
    @Language() language: string,
  ) {
    const organizations = await this.service.getHubsList(dto, userId, language);
    return { organizations };
  }
}
