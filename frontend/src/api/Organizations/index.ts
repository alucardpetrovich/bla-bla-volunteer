import { axiosPrivate } from '../axios';

const createOrganization = async (organization: unknown, lang: string) => {
  try {
    const response = await axiosPrivate.post('/v1/organizations', organization, {
      headers: {
        'Accept-Language': lang,
      },
    });
    console.log('response', response);
  } catch (error) {
    console.log('createOrganization', error);
  }
};

export default { createOrganization };
