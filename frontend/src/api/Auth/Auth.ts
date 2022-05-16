import axios from 'axios';
import { IAuthCredentials } from '../../models/authModel/authModel';

axios.defaults.baseURL = 'http://68.183.216.91';

class AuthorizationAPI {
  signUp = async (payload: IAuthCredentials) => {
    const response = await axios.post('/api/v1/auth/sign-up', payload);
    return response;
  };
}

const authorizationAPI = new AuthorizationAPI();
export default authorizationAPI;
