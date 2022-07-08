import { Dispatch } from 'redux';

import { involvementsAPI, organizationsAPI } from '../../api';
import userActions from './userActions';

interface ICredentials {
  involvements: string[];
}

interface IContact {
  accessMode: string;
  type: string;
  value: string;
}

interface IOrganization {
  name: string;
  type?: string;
  address?: string;
  settlementId?: string;
  contacts: IContact[];
}

export const userUpdate = (credentials: ICredentials) => async (dispatch: Dispatch) => {
  dispatch(userActions.userUpdateRequest());

  try {
    const response = await involvementsAPI.updateInvolvements(credentials);
    response && dispatch(userActions.userUpdateSuccess(response.data.user));
  } catch (error) {
    if (error instanceof Error) {
      console.log('Error message', error.message);
      dispatch(userActions.userUpdateError(error.message));
    } else {
      console.log('Unexpected error', error);
    }
  }
};

export const createUserOrganization = (organization: IOrganization) => async () => {
  console.log('organization', organization);
  try {
    const response = await organizationsAPI.createOrganization(organization);
    console.log('responseOperation', response);
  } catch (error) {
    if (error instanceof Error) {
      console.log('Error message', error.message);
    } else {
      console.log('Unexpected error', error);
    }
  }
};
