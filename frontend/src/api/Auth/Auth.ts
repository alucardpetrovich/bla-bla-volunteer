import axiosInstance from '../axiosInstance';

class AuthorizationAPI {
  signUp = async credentials => {
    const response = await axiosInstance.post(
      `/api/v1/auth/sign-up`,
      credentials,
    );
    return response;
  };

  signIn = async credentials => {
    const response = await axiosInstance.post(
      `/api/v1/auth/sign-in`,
      credentials,
    );
    return response;
  };

  signOut = async refreshToken => {
    await axiosInstance.delete(`/api/v1/auth/sign-out`, { data: refreshToken });
  };
}

const authorizationAPI = new AuthorizationAPI();
export default authorizationAPI;
