import { axiosPrivate } from '../axios';

const settlementsSearch = async (search: string, page = 1) => {
  try {
    const response = await axiosPrivate.get(`/settlements?search=${search}&page=${page}`, {
      headers: {
        'Accept-Language': 'uk',
      },
    });
    return response;
  } catch (error) {
    console.log('settlementsSearchError', error);
  }
};

export default { settlementsSearch };
