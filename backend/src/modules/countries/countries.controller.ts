import { Controller, Get, UseGuards, UseInterceptors } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { ResponseInterceptor } from 'src/shared/interceptors/response.interceptor';
import { JwtGuard } from '../auth/guards/jwt.guard';
import { CountriesService } from './countries.service';
import { CountriesListSerializer } from './serializers/countries-list.serializer';

@Controller('v1/countries')
@UseGuards(JwtGuard)
@ApiTags('Countries Controller')
@ApiBearerAuth()
export class CountriesController {
  constructor(private service: CountriesService) {}

  @Get()
  @UseInterceptors(new ResponseInterceptor(CountriesListSerializer))
  @ApiOperation({ description: 'Get countries list' })
  @ApiUnauthorizedResponse({ description: 'User is not authorized' })
  @ApiOkResponse({
    description: 'Countries list returned',
    type: CountriesListSerializer,
  })
  async getCountriesList() {
    const countries = await this.service.getCountriesList();
    return { countries };
  }
}
