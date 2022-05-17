import { useState } from 'react';
import { useDispatch } from 'react-redux';
import authorizationAPI from '../../api/Auth/Auth';

import { IAuthCredentials } from '../../models/authModel/authModel';
import { userLogin, userLogOut } from '../../redux/auth/authOperations';

const Login = () => {
  const initialCredentialsState = {
    email: '',
    password: '',
  };
  const [credentials, setCredentials] = useState<IAuthCredentials>(
    initialCredentialsState,
  );

  const dispatch = useDispatch();

  const handleSetEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCredentials({ ...credentials, email: value });
  };

  const handleSetPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCredentials({ ...credentials, password: value });
  };

  const handleSubmitSignUp = (e: React.SyntheticEvent) => {
    e.preventDefault();
    dispatch(userLogin(credentials) as any);
    setCredentials(initialCredentialsState);
  };

  const handleLogOut = () => {
    const refreshToken = JSON.parse(localStorage.getItem('refreshToken'));
    dispatch(userLogOut({ refreshToken: refreshToken.token }) as any);
  };

  //! remove, just for test auth & headers with token
  const handExampleRequest = () => {
    authorizationAPI.exampleRequest();
  };

  return (
    <div>
      <h3>login</h3>
      <form onSubmit={e => handleSubmitSignUp(e)}>
        <input
          type="text"
          onChange={handleSetEmail}
          value={credentials.email}
        />
        <input
          type="password"
          onChange={handleSetPassword}
          value={credentials.password}
        />
        <input type="submit" value="submit"></input>
      </form>
      <button onClick={handleLogOut}>Sign Out</button>
      <button onClick={handExampleRequest}>example request</button>
    </div>
  );
};

export default Login;
