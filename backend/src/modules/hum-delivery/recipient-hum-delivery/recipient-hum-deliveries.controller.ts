import {
  Body,
  Controller,
  Param,
  ParseUUIDPipe,
  Post,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOperation,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { JwtGuard } from 'src/modules/auth/guards/jwt.guard';
import { LanguageHeader } from 'src/shared/decorators/language-header.decorator';
import { Language } from 'src/shared/decorators/language.decorator';
import { UserId } from 'src/shared/decorators/user-id.decorators';
import { ResponseInterceptor } from 'src/shared/interceptors/response.interceptor';
import { HumDeliveryItemSerializer } from '../serializers/hum-delivery-item.serializer';
import { CreateHumDeliveryRequestDto } from './dto/create-hum-delivery-request.dto';
import { RecipientHumDeliveriesService } from './recipient-hum-deliveries.service';

@Controller('/v1/recipients/:recipientId/hum-deliveries')
@UseGuards(JwtGuard)
@ApiTags('Recipient Hum Deliveries Controller')
@ApiBearerAuth()
export class RecipientHumDeliveriesController {
  constructor(private service: RecipientHumDeliveriesService) {}

  @Post()
  @UseInterceptors(new ResponseInterceptor(HumDeliveryItemSerializer))
  @ApiOperation({ summary: 'Create new hum delivery' })
  @LanguageHeader()
  @ApiUnauthorizedResponse({ description: 'User is not authorized' })
  @ApiCreatedResponse({
    description: 'New hum delivery created',
    type: HumDeliveryItemSerializer,
  })
  async createHumDelivery(
    @Param('recipientId', ParseUUIDPipe) recipientId: string,
    @UserId() userId: string,
    @Body() dto: CreateHumDeliveryRequestDto,
    @Language() language: string,
  ) {
    return this.service.createHumDelivery(recipientId, userId, dto, language);
  }
}
