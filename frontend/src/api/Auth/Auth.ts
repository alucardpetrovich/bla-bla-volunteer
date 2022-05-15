import axios from 'axios';

// позже сделать какой то конфиг для этого
axios.defaults.baseURL = 'http://68.183.216.91';

interface IAuth {
  email: string;
  password: string;
}

class AuthorizationAPI {
  signUp = async (payload: IAuth) => {
    const response = await axios.post(`/api/v1/auth/sign-up`, payload);
    return response;
  };
}

let authorizationAPI = new AuthorizationAPI();
export default authorizationAPI;
