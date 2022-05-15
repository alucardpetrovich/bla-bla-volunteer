import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { IAuthCredentials } from '../../models/authModel/authModel';
import { userRegistration } from '../../redux/auth/authOperations';

const Registration = () => {
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
    dispatch(userRegistration(credentials) as any);
    setCredentials(initialCredentialsState);
  };

  return (
    <div>
      <form onSubmit={e => handleSubmitSignUp(e)}>
        <input type="text" onChange={handleSetEmail} />
        <input type="password" onChange={handleSetPassword} />
        <input type="submit" value="submit"></input>
      </form>
    </div>
  );
};

export default Registration;
