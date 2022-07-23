import { Controller, Get, UseGuards } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { JwtGuard } from '../auth/guards/jwt.guard';
import { InvolvementsService } from './involvements.service';

@Controller('/v1/involvements')
@UseGuards(JwtGuard)
@ApiTags('User Involvements Controller')
@ApiBearerAuth()
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
}
