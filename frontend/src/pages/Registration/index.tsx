import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { IAuthCredentials } from '../../models/authModel/authModel';
import { userRegistration } from '../../redux/auth/authOperations';

const Registration = () => {
  const initialCredentialsState = {
    email: '',
    password: '',
  };
  const [credentials, setCredentials] = useState<IAuthCredentials>(initialCredentialsState);

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
    // FIXME: пофіксить і більше так не робить
    // eslint-disable-next-line
    dispatch(userRegistration(credentials) as any);
    setCredentials(initialCredentialsState);
  };

  return (
    <div>
      <h3>Registration</h3>
      <form onSubmit={e => handleSubmitSignUp(e)}>
        <input type="text" onChange={handleSetEmail} value={credentials.email} />
        <input type="password" onChange={handleSetPassword} value={credentials.password} />
        <input type="submit" value="submit"></input>
      </form>
    </div>
  );
};

export default Registration;
