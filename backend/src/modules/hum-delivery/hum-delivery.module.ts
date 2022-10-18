import { Module } from '@nestjs/common';
import { RecipientHumDeliveriesModule } from './recipient-hum-delivery/recipient-hum-deliveries.module';

@Module({
  imports: [RecipientHumDeliveriesModule],
})
export class HumDeliveriesModule {}
