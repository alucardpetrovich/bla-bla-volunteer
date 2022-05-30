import {
  Body,
  Controller,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
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
import { ChangeRideStatusDto } from './dto/change-ride-status.dto';
import { GetRidesListDto } from './dto/get-rides-list.dto';
import { RideDto } from './dto/ride.dto';
import { RidesService } from './rides.service';
import { RideSerializer } from './serializers/ride.serializer';
import { RidesListSerializer } from './serializers/rides-list.serializer';

@Controller('rides')
@UseGuards(JwtGuard)
@ApiTags('Rides Controller')
@ApiBearerAuth()
export class RidesController {
  constructor(private service: RidesService) {}

  @Post()
  @UseInterceptors(new ResponseInterceptor(RideSerializer))
  @ApiOperation({ summary: 'Create ride' })
  @ApiUnauthorizedResponse({ description: 'User is not authorized' })
  @ApiForbiddenResponse({ description: 'Too many unfinished rides' })
  @ApiConflictResponse({ description: 'Overlapping rides found' })
  @ApiCreatedResponse({
    description: 'Ride created',
    type: RideSerializer,
  })
  async createRide(@UserId() userId: string, @Body() dto: RideDto) {
    return this.service.createRide(userId, dto);
  }

  @Get()
  @UseInterceptors(new ResponseInterceptor(RidesListSerializer))
  @ApiOperation({ summary: 'Get rides list' })
  @ApiUnauthorizedResponse({ description: 'User is not authorized' })
  @ApiOkResponse({
    description: 'Rides page returned',
    type: RidesListSerializer,
  })
  async getRidesList(@Query() dto: GetRidesListDto) {
    const rides = await this.service.getRidesList(dto);
    return { rides };
  }

  @Get(':id')
  @UseInterceptors(new ResponseInterceptor(RideSerializer))
  @ApiOperation({ summary: 'Get ride info by id' })
  @ApiUnauthorizedResponse({ description: 'User is not authorized' })
  @ApiNotFoundResponse({ description: 'Ride not found' })
  @ApiOkResponse({
    description: 'Ride created',
    type: RideSerializer,
  })
  async getRideById(@Param(':id', ParseUUIDPipe) id: string) {
    return this.service.getRideById(id);
  }

  @Put(':id')
  @UseInterceptors(new ResponseInterceptor(RideSerializer))
  @ApiOperation({ summary: 'Update ride' })
  @ApiUnauthorizedResponse({ description: 'User is not authorized' })
  @ApiNotFoundResponse({ description: 'Ride not found' })
  @ApiForbiddenResponse({
    description: 'Ride is already in unchangeable state',
  })
  @ApiConflictResponse({ description: 'Overlapping rides found' })
  @ApiOkResponse({ description: 'Ride updated', type: RideSerializer })
  async updateRide(
    @Param('id', ParseUUIDPipe) id: string,
    @UserId() userId: string,
    @Body() dto: RideDto,
  ) {
    return this.service.updateRide(id, userId, dto);
  }

  @Patch(':id/status')
  @UseInterceptors(new ResponseInterceptor(RideSerializer))
  @ApiOperation({ summary: 'Update ride' })
  @ApiUnauthorizedResponse({ description: 'User is not authorized' })
  @ApiNotFoundResponse({ description: 'Ride not found' })
  @ApiForbiddenResponse({
    description: 'Such status transition is not allowed',
    type: RideSerializer,
  })
  @ApiOkResponse({ description: 'Ride status updated', type: RideSerializer })
  async changeRideStatus(
    @Param('id', ParseUUIDPipe) id: string,
    @UserId() userId: string,
    @Body() dto: ChangeRideStatusDto,
  ) {
    return this.service.changeRideStatus(id, userId, dto);
  }
}
