import { Involvements } from '../../../../common/services/api/auth';
import axios from '../../../../common/utils/axios';

export const getInvolvements = async (): Promise<Involvements[]> => {
  const response = await axios.get('/v1/involvements/types');
  return response.data;
};

export default { getInvolvements };
