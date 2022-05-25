import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiConflictResponse,
  ApiCreatedResponse,
  ApiOperation,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { UserId } from 'src/shared/decorators/user-id.decorators';
import { JwtGuard } from '../auth/guards/jwt.guard';
import { DonationsService } from './donations.service';
import { CreateDonationRequestDto } from './dto/create-donation-request.dto';
import { DonationSerializer } from './serializers/donation.serializer';

@Controller('/v1/donations')
@UseGuards(JwtGuard)
@ApiTags('Donations Controller')
@ApiBearerAuth()
export class DonationsController {
  // TODO: get list of your donation requests (ordered by created_at)
  // TODO: add donation request
  // TODO: add getting of hubs list (need to think about it, need to add list of required items later on)
  // TODO: change donation request status by hub or donor
  constructor(private service: DonationsService) {}

  @Post()
  @ApiOperation({ summary: 'Create new donation request' })
  @ApiUnauthorizedResponse({ description: 'User is not authorized' })
  @ApiConflictResponse({ description: 'Too many active requests' })
  @ApiCreatedResponse({
    description: 'Donation request created',
    type: DonationSerializer,
  })
  async createDonationRequest(
    @UserId() userId: string,
    @Body() dto: CreateDonationRequestDto,
  ) {
    return this.service.createRequest(dto, userId);
  }
}
