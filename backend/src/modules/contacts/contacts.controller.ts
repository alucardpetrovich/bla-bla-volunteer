import { Controller, Get, UseGuards } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { JwtGuard } from '../auth/guards/jwt.guard';
import { ContactsService } from './contacts.service';
import { ContactTypesListSerializer } from './serializers/contact-types-list.serializer';

@Controller('contacts')
@UseGuards(JwtGuard)
@ApiTags('Contacts Controller')
@ApiBearerAuth()
export class ContactsController {
  constructor(private service: ContactsService) {}

  @Get('types')
  @ApiOperation({ summary: 'Get list of available contact types' })
  @ApiUnauthorizedResponse({ description: 'User is not authorized' })
  @ApiOkResponse({
    description: 'Organization types returned',
    type: ContactTypesListSerializer,
  })
  async getContactTypes() {
    const types = await this.service.getContactTypes();
    return { types };
  }
}
