import { useSelector, useDispatch } from 'react-redux';
import { Outlet, Link } from 'react-router-dom';

import { logoutSuccess } from '../../../redux/actions/authActions';

const Auth = () => {
  const dispatch = useDispatch();
  //@ts-ignore
  const auth = useSelector(state => state.auth.auth);

  const logoutHandler = () => {
    dispatch(logoutSuccess(false));
  };
  return (
    <>
      <div>auth</div>
      {!auth ? (
        <>
          <ul>
            <li>
              <Link to="/auth/login">Login</Link>
            </li>
            <li>
              <Link to="/auth/register">Register</Link>
            </li>
          </ul>
          <Outlet />
        </>
      ) : (
        <button onClick={logoutHandler}>Logout</button>
      )}
    </>
  );
};

export default Auth;
