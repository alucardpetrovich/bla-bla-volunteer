import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { IAuthCredentials } from '../../models/authModel/authModel';
import { userLogin } from '../../redux/auth/authOperations';

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
    </div>
  );
};

export default Login;
