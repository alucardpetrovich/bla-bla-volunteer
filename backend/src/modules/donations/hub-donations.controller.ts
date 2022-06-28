import {
  Body,
  Controller,
  Get,
  Param,
  ParseUUIDPipe,
  Put,
  Query,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiConflictResponse,
  ApiForbiddenResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { UserId } from 'src/shared/decorators/user-id.decorators';
import { ResponseInterceptor } from 'src/shared/interceptors/response.interceptor';
import { JwtGuard } from '../auth/guards/jwt.guard';
import { GetDonationsListDto } from './dto/get-donations-list.dto';
import { HubUpdateDonationRequestDto } from './dto/hub-update-donation-request.dto';
import { HubDonationsService } from './hub-donations.service';
import { DonationSerializer } from './serializers/donation.serializer';
import { DonationsListSerializer } from './serializers/donations-list.serializer';

@Controller('/v1/hubs/:hubId/donations')
@UseGuards(JwtGuard)
@ApiTags('Hub Donations Controller')
@ApiBearerAuth()
export class HubDonationsController {
  constructor(private service: HubDonationsService) {}

  @Get()
  @UseInterceptors(new ResponseInterceptor(DonationsListSerializer))
  @ApiOperation({ summary: 'Get list of hubs donations' })
  @ApiUnauthorizedResponse({ description: 'User is not authorized' })
  @ApiForbiddenResponse({
    description: 'fetching hub donations list is forbidden',
  })
  @ApiOkResponse({
    description: "Hub's donations list returned",
    type: DonationsListSerializer,
  })
  async getHubDonationsList(
    @Param('hubId', ParseUUIDPipe) hubId: string,
    @UserId() userId: string,
    @Query() dto: GetDonationsListDto,
  ) {
    const donations = await this.service.getHubDonationsList(
      hubId,
      userId,
      dto,
    );
    return { donations };
  }

  @Put(':requestId')
  @UseInterceptors(new ResponseInterceptor(DonationSerializer))
  @ApiOperation({ summary: 'Update hub donation request' })
  @ApiUnauthorizedResponse({ description: 'User is not authorized' })
  @ApiNotFoundResponse({ description: 'Request not found' })
  @ApiForbiddenResponse({
    description: 'Hub donation updates are forbidden',
  })
  @ApiConflictResponse({ description: 'Unexpected state change' })
  @ApiOkResponse({
    description: "Hub's donation updated",
    type: DonationSerializer,
  })
  async updateDonationRequest(
    @Param('requestId', ParseUUIDPipe) requestId: string,
    @UserId() userId: string,
    @Body() dto: HubUpdateDonationRequestDto,
  ) {
    return this.service.updateDonationRequest(requestId, userId, dto);
  }
}
