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
import { SearchProductsDto } from './dto/search-products.dto';
import { ProductsService } from './products.service';
import { ProductCategoriesListSerializer } from './serializers/product-categories-list.serializer';
import { ProductsListSerializer } from './serializers/products-list.serializer';

@Controller('v1/products')
@UseGuards(JwtGuard)
@ApiTags('Products Controller')
@ApiBearerAuth()
export class ProductsController {
  constructor(private service: ProductsService) {}

  @Get('categories')
  @UseInterceptors(new ResponseInterceptor(ProductCategoriesListSerializer))
  @ApiOperation({ summary: 'Get product categories list' })
  @LanguageHeader()
  @ApiUnauthorizedResponse({ description: 'User is not authorized' })
  @ApiOkResponse({
    description: 'Product categories list returned',
    type: ProductCategoriesListSerializer,
  })
  async getProductCategories(@Language() language: string) {
    const categories = await this.service.getProductCategories(language);
    return { categories };
  }

  @Get('search')
  @UseInterceptors(new ResponseInterceptor(ProductsListSerializer))
  @ApiOperation({ summary: 'Search products' })
  @LanguageHeader()
  @ApiUnauthorizedResponse({ description: 'User is not authorized' })
  @ApiOkResponse({
    description: 'Products returned',
    type: ProductsListSerializer,
  })
  async searchProducts(
    @Language() language: string,
    @Query() dto: SearchProductsDto,
  ) {
    const products = await this.service.searchProducts(dto, language);
    return { products };
  }
}
