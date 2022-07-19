import { axiosPrivate } from '../axios';

const getContactTypes = async (lang: string) => {
  try {
    const response = await axiosPrivate
      .get('/contacts/types', {
        headers: {
          'Accept-Language': lang,
        },
      })
      .then(res => res.data.types);

    return response;
  } catch (error) {
    console.log('getContactTypesError', error);
  }
};

export default { getContactTypes };
