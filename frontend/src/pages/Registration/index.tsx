import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { userRegistration } from '../../redux/auth/authOperations';

const Registration = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });

  const dispatch = useDispatch();

  const handleSetEmail = e => {
    const value = e.target.value;
    setCredentials({ ...credentials, email: value });
  };

  const handleSetPassword = e => {
    const value = e.target.value;
    setCredentials({ ...credentials, password: value });
  };

  const handleSubmitSignUp = e => {
    console.log(credentials);
    e.preventDefault();
    //@ts-ignore
    dispatch(userRegistration(credentials));
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
