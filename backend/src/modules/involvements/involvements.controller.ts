import {
  Body,
  Controller,
  Get,
  Put,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOkResponse,
  ApiOperation,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { UserId } from 'src/shared/decorators/user-id.decorators';
import { ResponseInterceptor } from 'src/shared/interceptors/response.interceptor';
import { JwtGuard } from '../auth/guards/jwt.guard';
import { InvolvementsDto } from './dto/involvements.dto';
import { InvolvementsService } from './involvements.service';
import { UpdateInvolvementsSerializer } from './serializers/update-involvements.serializer';

@Controller('/v1/involvements')
@ApiBearerAuth()
@UseGuards(JwtGuard)
export class InvolvementsController {
  constructor(private service: InvolvementsService) {}

  @Get('types')
  @ApiOperation({ summary: 'Get involvement types' })
  @ApiUnauthorizedResponse({ description: 'User is not authorized' })
  @ApiOkResponse({
    description: 'Involvement types return',
    type: 'string',
    isArray: true,
  })
  async getInvolvementTypes() {
    return this.service.getInvolvementTypes();
  }

  @Put()
  @UseInterceptors(new ResponseInterceptor(UpdateInvolvementsSerializer))
  @ApiOperation({ summary: 'Update user involvements' })
  @ApiUnauthorizedResponse({ description: 'User is not authorized' })
  @ApiOkResponse({
    description: 'Involvements updated',
    type: UpdateInvolvementsSerializer,
  })
  async updateInvolvements(
    @UserId() userId: string,
    @Body() dto: InvolvementsDto,
  ) {
    return this.updateInvolvements(userId, dto);
  }
}
