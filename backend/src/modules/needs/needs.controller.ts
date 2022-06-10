import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  ParseUUIDPipe,
  Post,
  Put,
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
import { GetRecipientNeedsListDto } from './dto/get-recipient-needs-list.dto';
import { RecipientNeedDto } from './dto/recipient-need.dto';
import { NeedsService } from './needs.service';
import { RecipientNeedSerializer } from './serializers/recipient-need.serializer';
import { RecipientNeedsListSerializer } from './serializers/recipient-needs-list.dto';

@Controller('/v1/recipients/:recipientId/needs')
@UseGuards(JwtGuard)
@ApiTags('Recipient Needs Controller')
@ApiBearerAuth()
export class NeedsController {
  constructor(private service: NeedsService) {}

  @Post()
  @UseInterceptors(new ResponseInterceptor(RecipientNeedSerializer))
  @ApiOperation({ summary: 'Create new recipient need' })
  @ApiHeader({ name: 'Accept-Language' })
  @ApiUnauthorizedResponse({ description: 'User is not authorized' })
  @ApiNotFoundResponse({ description: 'Recipient not found' })
  @ApiCreatedResponse({
    description: 'New recipient need created',
    type: RecipientNeedSerializer,
  })
  async createNeed(
    @Param('recipientId', ParseUUIDPipe) recipientId: string,
    @UserId() userId: string,
    @Body() dto: RecipientNeedDto,
    @Language() language: string,
  ) {
    return this.service.createNeed(recipientId, userId, dto, language);
  }

  @Get()
  @UseInterceptors(new ResponseInterceptor(RecipientNeedsListSerializer))
  @ApiOperation({ summary: 'Get recipient needs list' })
  @ApiHeader({ name: 'Accept-Language' })
  @ApiUnauthorizedResponse({ description: 'User is not authorized' })
  @ApiNotFoundResponse({ description: 'Recipient not found' })
  @ApiOkResponse({
    description: 'Recipient needs list returned',
    type: RecipientNeedsListSerializer,
  })
  async getNeedsList(
    @Param('recipientId', ParseUUIDPipe) recipientId: string,
    @UserId() userId: string,
    @Body() dto: GetRecipientNeedsListDto,
    @Language() language: string,
  ) {
    const needs = await this.service.getNeedsList(
      recipientId,
      userId,
      dto,
      language,
    );
    return { needs };
  }

  @Get(':needId')
  @UseInterceptors(new ResponseInterceptor(RecipientNeedSerializer))
  @ApiOperation({ summary: 'Get recipient need by id' })
  @ApiUnauthorizedResponse({ description: 'User is not authorized' })
  @ApiNotFoundResponse({ description: 'Recipient need not found' })
  @ApiOkResponse({
    description: 'Recipient need returned',
    type: RecipientNeedSerializer,
  })
  async getNeedById(
    @Param('recipientId', ParseUUIDPipe) recipientId: string,
    @Param('needId', ParseUUIDPipe) needId: string,
    @UserId() userId: string,
    @Language() language: string,
  ) {
    return this.service.getNeedById(needId, recipientId, userId, language);
  }

  @Put(':needId')
  @UseInterceptors(new ResponseInterceptor(RecipientNeedSerializer))
  @ApiOperation({ summary: 'Update recipient need' })
  @ApiUnauthorizedResponse({ description: 'User is not authorized' })
  @ApiNotFoundResponse({ description: 'Recipient need not found' })
  @ApiOkResponse({
    description: 'Recipient need updated',
    type: RecipientNeedSerializer,
  })
  async updateRecipientNeed(
    @Param('recipientId', ParseUUIDPipe) recipientId: string,
    @Param('needId', ParseUUIDPipe) needId: string,
    @Body() dto: RecipientNeedDto,
    @UserId() userId: string,
    @Language() language: string,
  ) {
    return this.service.updateNeedById(
      recipientId,
      needId,
      userId,
      dto,
      language,
    );
  }

  @Delete(':needId')
  @HttpCode(204)
  @ApiOperation({ summary: 'Delete recipient need' })
  @ApiUnauthorizedResponse({ description: 'User is not authorized' })
  @ApiNotFoundResponse({ description: 'Recipient need not found' })
  @ApiNoContentResponse({ description: 'Recipient need deleted' })
  async deleteNeed(
    @Param('needId', ParseUUIDPipe) needId: string,
    @Param('recipientId', ParseUUIDPipe) recipientId: string,
    @UserId() userId: string,
  ) {
    await this.service.deleteNeed(needId, recipientId, userId);
  }
}
