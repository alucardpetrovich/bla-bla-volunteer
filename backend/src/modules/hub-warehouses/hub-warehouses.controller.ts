import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  ParseUUIDPipe,
  Post,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiHeader,
  ApiNoContentResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { Language } from 'src/shared/decorators/language.decorator';
import { UserId } from 'src/shared/decorators/user-id.decorators';
import { ResponseInterceptor } from 'src/shared/interceptors/response.interceptor';
import { JwtGuard } from '../auth/guards/jwt.guard';
import { GetHubWarehouseItemsListDto } from './dto/get-hub-warehouse-items-list.dto';
import { HubWarehouseItemDto } from './dto/hub-warehouse-item.dto';
import { HubWarehousesService } from './hub-warehouses.service';
import { HubWarehouseItemSerializer } from './serializers/hub-warehouse-item.serializer';
import { HubWarehouseItemsListSerializer } from './serializers/hub-warehouse-items-list.serializer';

@Controller('/v1/hubs/:hubId/warehouses/items')
@UseGuards(JwtGuard)
@ApiTags('Hub Warehouses Controller')
@ApiBearerAuth()
export class HubWarehousesController {
  constructor(private service: HubWarehousesService) {}

  // TODO: get warehouse items list
  // TODO: create warehouse item
  // TODO: update warehouse item
  // TODO: delete warehouse item
  @Post()
  @UseInterceptors(new ResponseInterceptor(HubWarehouseItemSerializer))
  @ApiOperation({ summary: 'Create new hub warehouse item' })
  @ApiHeader({ name: 'Accept-Language' })
  @ApiUnauthorizedResponse({ description: 'User is not authorized' })
  @ApiNotFoundResponse({ description: 'Hub not found' })
  @ApiCreatedResponse({
    description: 'New hub warehouse item created',
    type: HubWarehouseItemSerializer,
  })
  async createWarehouseItem(
    @Param('hubId', ParseUUIDPipe) hubId: string,
    @UserId() userId: string,
    @Body() dto: HubWarehouseItemDto,
    @Language() language: string,
  ) {
    return this.service.createWarehouseItem(hubId, userId, dto, language);
  }

  @Get()
  @UseInterceptors(new ResponseInterceptor(HubWarehouseItemsListSerializer))
  @ApiOperation({ summary: 'Get hub warehouse items list' })
  @ApiHeader({ name: 'Accept-Language' })
  @ApiUnauthorizedResponse({ description: 'User is not authorized' })
  @ApiNotFoundResponse({ description: 'Hub not found' })
  @ApiOkResponse({ description: 'New hub warehouse item created' })
  async getWarehouseItemsList(
    @Param('hubId', ParseUUIDPipe) hubId: string,
    @UserId() userId: string,
    @Body() dto: GetHubWarehouseItemsListDto,
    @Language() language: string,
  ) {
    const items = await this.service.getHubWarehouseItemsList(
      hubId,
      userId,
      dto,
      language,
    );
    return { items };
  }

  @Delete(':itemId')
  @HttpCode(204)
  @ApiOperation({ summary: 'Delete hub warehouse item' })
  @ApiUnauthorizedResponse({ description: 'User is not authorized' })
  @ApiNotFoundResponse({ description: 'Hub Warehouse Item not found' })
  @ApiNoContentResponse({ description: 'Hub warehouse item deleted' })
  async deleteWarehouseItem(
    @Param('itemId', ParseUUIDPipe) itemId: string,
    @Param('hubId', ParseUUIDPipe) hubId: string,
    @UserId() userId: string,
  ) {
    await this.service.deleteWarehouseItem(itemId, hubId, userId);
  }
}
