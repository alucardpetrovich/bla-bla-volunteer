import { axiosPrivate } from '../axios';

const settlementsSearch = async (search: string, page = 1, lang: string) => {
  try {
    const response = await axiosPrivate.get(`/settlements?search=${search}&page=${page}`, {
      headers: {
        'Accept-Language': lang,
      },
    });
    return response;
  } catch (error) {
    console.log('settlementsSearchError', error);
  }
};

export default { settlementsSearch };
