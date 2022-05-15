import {
  Controller,
  Get,
  Query,
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
import { ResponseInterceptor } from 'src/shared/interceptors/response.interceptor';
import { JwtGuard } from '../auth/guards/jwt.guard';
import { SearchSettlementsDto } from './dto/search-settlements.dto';
import { SettlementsListSerializer } from './serializers/settlements-list.serializer';
import { SettlementsService } from './settlements.service';

@Controller('settlements')
@UseGuards(JwtGuard)
@ApiTags('Settlements Controller')
@ApiBearerAuth()
export class SettlementsController {
  constructor(private service: SettlementsService) {}

  @Get()
  @UseInterceptors(new ResponseInterceptor(SettlementsListSerializer))
  @ApiOperation({ summary: 'Search settlements' })
  @ApiUnauthorizedResponse({ description: 'User is not authorized' })
  @ApiOkResponse({ description: 'Settlements search result returned' })
  async getSettlementsList(@Query() dto: SearchSettlementsDto) {
    const settlements = await this.service.searchSettlements(dto);
    return { settlements };
  }
}
