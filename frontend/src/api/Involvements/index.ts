import { axiosPrivate } from 'api/axios';

const getInvolvements = async () => {
  try {
    const response = await axiosPrivate.get('/api/v1/involvements/types');
    return response;
  } catch (error) {
    console.log('getInvolvementErr', error);
  }
  //   const response = await axiosPrivate
  //     .get('/api/v1/involvements/types')
  //     .then(res => res.data)
  //     .catch(err => console.log('getInvolvementErr', err));
  //   return response;
};

const updateInvolvements = async (involvement: any) => {
  const response = await axiosPrivate.put('/api/v1/involvements', involvement);
  console.log(response);
};
export default { getInvolvements, updateInvolvements };
