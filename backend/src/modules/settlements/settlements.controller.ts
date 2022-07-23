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
import { LanguageHeader } from 'src/shared/decorators/language-header.decorator';
import { Language } from 'src/shared/decorators/language.decorator';
import { ResponseInterceptor } from 'src/shared/interceptors/response.interceptor';
import { JwtGuard } from '../auth/guards/jwt.guard';
import { SearchSettlementsDto } from './dto/search-settlements.dto';
import { SettlementsListSerializer } from './serializers/settlements-list.serializer';
import { SettlementsService } from './settlements.service';

@Controller('v1/settlements')
@UseGuards(JwtGuard)
@ApiTags('Settlements Controller')
@ApiBearerAuth()
export class SettlementsController {
  constructor(private service: SettlementsService) {}

  @Get()
  @UseInterceptors(new ResponseInterceptor(SettlementsListSerializer))
  @ApiOperation({ summary: 'Search settlements' })
  @LanguageHeader()
  @ApiUnauthorizedResponse({ description: 'User is not authorized' })
  @ApiOkResponse({
    description: 'Settlements search result returned',
    type: SettlementsListSerializer,
  })
  async searchSettlements(
    @Query() dto: SearchSettlementsDto,
    @Language() language: string,
  ) {
    const settlements = await this.service.searchSettlements(dto, language);
    return { settlements };
  }
}
