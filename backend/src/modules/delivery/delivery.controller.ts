import { Controller, Get, UseGuards, UseInterceptors } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { LanguageHeader } from 'src/shared/decorators/language-header.decorator';
import { Language } from 'src/shared/decorators/language.decorator';
import { ResponseInterceptor } from 'src/shared/interceptors/response.interceptor';
import { JwtGuard } from '../auth/guards/jwt.guard';
import { DeliveryService } from './delivery.service';
import { DeliveryTypesListSerializer } from './serializers/delivery-types-list.serializer';

@Controller('v1/delivery')
@UseGuards(JwtGuard)
@ApiTags('Delivery Controller')
@ApiBearerAuth()
export class DeliveryController {
  constructor(private service: DeliveryService) {}

  @Get('types')
  @UseInterceptors(new ResponseInterceptor(DeliveryTypesListSerializer))
  @ApiOperation({ summary: 'Get list of available delivery types' })
  @LanguageHeader()
  @ApiUnauthorizedResponse({ description: 'User is not authorized' })
  @ApiOkResponse({
    description: 'Delivery types returned',
    type: DeliveryTypesListSerializer,
  })
  async getContactTypes(@Language() language: string) {
    const types = await this.service.getDeliveryTypes(language);
    return { types };
  }
}
