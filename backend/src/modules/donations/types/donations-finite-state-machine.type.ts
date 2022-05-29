import { DonationRequestEntity } from '../db/donation-request.entity';
import { DeliveryInfoBlockSerializer } from '../serializers/delivery-info-block.serializer';
import { DonationRequestStatuses } from './donation-request-statuses.enum';

export interface DonationStatusChangeContext {
  request: DonationRequestEntity;
  deliveryInfo?: DeliveryInfoBlockSerializer[];
  statusText?: string;
}

export type DonationStatusChangeHandler = (
  ctx: DonationStatusChangeContext,
) => Promise<void>;

export type DonationsFiniteStateMachine = {
  [currentState in DonationRequestStatuses]?: {
    [targetState in DonationRequestStatuses]?: DonationStatusChangeHandler;
  };
};
