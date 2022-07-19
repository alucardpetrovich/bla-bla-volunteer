import { axiosPrivate } from '../../api/axios';

const getInvolvements = async () => {
  try {
    const response = await axiosPrivate.get('/v1/involvements/types');
    return response;
  } catch (error) {
    console.log('getInvolvementErr', error);
  }
};

const updateInvolvements = async (involvement: unknown) => {
  try {
    const response = await axiosPrivate.put('/v1/involvements', involvement);
    return response;
  } catch (error) {
    console.log('updateInvolvementsErr', error);
  }
};
export default { getInvolvements, updateInvolvements };
