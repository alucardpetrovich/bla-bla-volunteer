import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginSuccess } from '../../../../../redux/actions/authActions';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const loginHandler = () => {
    dispatch(loginSuccess(true));
    navigate('/home', { replace: true });
  };

  return (
    <>
      <div>Login</div>
      <button onClick={loginHandler}>Enter to login</button>
    </>
  );
};

export default Login;
