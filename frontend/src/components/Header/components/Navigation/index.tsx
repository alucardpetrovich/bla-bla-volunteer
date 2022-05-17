import { useSelector } from 'react-redux';
import { generatePath, NavLink } from 'react-router-dom';
import { linksNav } from './constants/listNav';
import { getIsAuth } from 'redux/auth/authSelectors';

const Navigation = () => {
  const isAuth = useSelector(getIsAuth);
  const lang = useSelector(state => 'ua');

  return (
    <nav>
      <ul>
        {linksNav.map(({ path, text, privateRoute, restricted }) => {
          if ((privateRoute && !isAuth) || (restricted && isAuth)) return null;

          return (
            <li key={text}>
              <NavLink
                to={`/${generatePath(path, { lang })}`}
                style={({ isActive }) =>
                  isActive ? { color: 'orange' } : undefined
                }
                end
              >
                {text}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
