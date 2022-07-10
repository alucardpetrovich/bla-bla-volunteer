import { axiosPrivate } from '../axios';

const createOrganization = async (organization: unknown) => {
  try {
    const response = await axiosPrivate.post('/v1/organizations', organization);
    console.log('response', response);
  } catch (error) {
    console.log('createOrganization', error);
  }
};

export default { createOrganization };
