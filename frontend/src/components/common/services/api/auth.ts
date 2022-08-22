import { Contact } from '../../../Account/Profile/ProfileInfo/api/contacts';
import axios from '../../utils/axios';

export enum Involvement {
  donor = 'donor',
  volunteer_hub = 'volunteer_hub',
  hub = 'hub',
  mobile_hub = 'mobile_hub',
  recipient = 'recipient',
}

export interface Involvements {
  type: Involvement;
  verified?: boolean;
}

export interface CurrentUserInfo {
  id: string;
  nickname: string;
  status: string;
  involvements: Involvements[];
  contacts: Contact[];
}

export const getCurrentUserInfo = async (signal: AbortSignal | undefined): Promise<CurrentUserInfo> => {
  const response = await axios.get('/v1/auth/current', { signal });
  return response.data;
};
