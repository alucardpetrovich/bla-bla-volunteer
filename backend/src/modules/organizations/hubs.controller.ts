import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiHeader,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { Language } from 'src/shared/decorators/language.decorator';
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
  @ApiOperation({ summary: 'Get list of hubs' })
  @ApiHeader({ name: 'Accept-Language' })
  @ApiUnauthorizedResponse({ description: 'User is not authorized' })
  @ApiOkResponse({
    description: 'Hubs returned',
    type: OrganizationsListSerializer,
  })
  async getHubsList(
    @Query() dto: GetHubsListDto,
    @Language() language: string,
  ) {
    const organizations = await this.service.getHubsList(dto, language);
    return { organizations };
  }
}
