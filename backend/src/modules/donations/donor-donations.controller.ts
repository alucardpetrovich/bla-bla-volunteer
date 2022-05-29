import {
  Body,
  Controller,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
  Put,
  Query,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiConflictResponse,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { UserId } from 'src/shared/decorators/user-id.decorators';
import { ResponseInterceptor } from 'src/shared/interceptors/response.interceptor';
import { JwtGuard } from '../auth/guards/jwt.guard';
import { CreateDonationRequestDto } from './dto/create-donation-request.dto';
import { DonationSerializer } from './serializers/donation.serializer';
import { DonationsListSerializer } from './serializers/donations-list.serializer';
import { DonorDonationsService } from './donor-donations.service';
import { DonorUpdateDonationRequestDto } from './dto/donor-update-donation-request.dto';
import { GetDonationsListDto } from './dto/get-donations-list.dto';

@Controller('/v1/donors/donations')
@UseGuards(JwtGuard)
@ApiTags('Donor Donations Controller')
@ApiBearerAuth()
export class DonorDonationsController {
  // TODO: add donation requests filters
  // TODO: add getting of hubs list (need to think about it, need to add list of required items later on)
  // TODO: think about fraud request status
  constructor(private service: DonorDonationsService) {}

  @Post()
  @UseInterceptors(new ResponseInterceptor(DonationSerializer))
  @ApiOperation({ summary: 'Create new donation request' })
  @ApiUnauthorizedResponse({ description: 'User is not authorized' })
  @ApiConflictResponse({ description: 'Too many new requests' })
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

  @Get()
  @UseInterceptors(new ResponseInterceptor(DonationsListSerializer))
  @ApiOperation({ summary: "Get list of users's donations" })
  @ApiUnauthorizedResponse({ description: 'User is not authorized' })
  @ApiOkResponse({
    description: "User's donations list returned",
    type: DonationsListSerializer,
  })
  async getUserDonationsList(
    @UserId() userId: string,
    @Query() dto: GetDonationsListDto,
  ) {
    const donations = await this.service.getUserDonationsList(userId, dto);
    return { donations };
  }

  @Put(':requestId')
  @UseInterceptors(new ResponseInterceptor(DonationSerializer))
  @ApiOperation({ summary: "Update users's donation" })
  @ApiOkResponse({
    description: "User's donation updated",
    type: DonationSerializer,
  })
  async updateDonationRequest(
    @Param('requestId', ParseUUIDPipe) requestId: string,
    @UserId() userId: string,
    @Body() dto: DonorUpdateDonationRequestDto,
  ) {
    return this.service.updateDonationRequest(requestId, userId, dto);
  }
}
