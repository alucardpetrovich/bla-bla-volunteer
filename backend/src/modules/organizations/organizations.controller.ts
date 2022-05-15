import {
  Body,
  Controller,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiConflictResponse,
  ApiCreatedResponse,
  ApiForbiddenResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { UserId } from 'src/shared/decorators/user-id.decorators';
import { JwtGuard } from '../auth/guards/jwt.guard';
import { OrganizationDto } from './dto/organization.dto';
import { OrganizationsService } from './organizations.service';
import { OrganizationTypesSerializer as TypesSerializer } from './serializers/organization-types.serializer';
import { OrganizationSerializer } from './serializers/organization.serializer';

@Controller('organizations')
@UseGuards(JwtGuard)
@ApiTags('Organizations Controller')
@ApiBearerAuth()
export class OrganizationsController {
  constructor(private service: OrganizationsService) {}

  @Post()
  @ApiOperation({ summary: 'Create organization' })
  @ApiUnauthorizedResponse({ description: 'User is not authorized' })
  @ApiConflictResponse({ description: 'User already owns an organization' })
  @ApiCreatedResponse({
    description: 'Organization created',
    type: OrganizationSerializer,
  })
  async createOrganization(
    @UserId() userId: string,
    @Body() dto: OrganizationDto,
  ) {
    return this.service.createOrganization(userId, dto);
  }

  @Get('types')
  @ApiOperation({ summary: 'Get list of available organization types' })
  @ApiUnauthorizedResponse({ description: 'User is not authorized' })
  @ApiOkResponse({
    description: 'Organization types returned',
    type: TypesSerializer,
  })
  async getOrganizationTypes() {
    const types = await this.service.getOrganizationTypes();
    return { types };
  }

  @Get('contacts/types')
  @ApiOperation({ summary: 'Get list of available contact types' })
  @ApiUnauthorizedResponse({ description: 'User is not authorized' })
  @ApiOkResponse({
    description: 'Organization types returned',
    type: TypesSerializer,
  })
  async getContactTypes() {
    const types = await this.service.getContactTypes();
    return { types };
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update organization' })
  @ApiUnauthorizedResponse({ description: 'User is not authorized' })
  @ApiForbiddenResponse({ description: 'Action is not allowed' })
  @ApiNotFoundResponse({ description: 'Organization not found' })
  @ApiOkResponse({
    description: 'Organization updated',
    type: OrganizationSerializer,
  })
  async updateOrganization(
    @Param('id', ParseUUIDPipe) id: string,
    @UserId() userId: string,
    @Body() dto: OrganizationDto,
  ) {
    return this.service.updateOrganization(id, userId, dto);
  }
}
