import { RecipientNeedRelations } from './recipient-need-relations.enum';

export interface RecipientNeedsSearchParams {
  offset: number;
  limit: number;
  relations: RecipientNeedRelations[];
  language: string;
  recipientId: string;
}
