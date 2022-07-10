import React, { FC } from 'react';
import { generatePath, NavLink } from 'react-router-dom';
import { getIsAuth } from 'src/store';

import { useAppSelector } from '../../../../hooks';
import { linksNav } from './constants/listNav';

interface NavigationProps {
  style: React.CSSProperties;
}

const Navigation: FC<NavigationProps> = ({ style }) => {
  const isAuth = useAppSelector(getIsAuth);
  const lang = useAppSelector(() => 'ua');

  return (
    <nav style={style}>
      <ul>
        {linksNav.map(({ path, text, privateRoute, restricted }) => {
          if ((privateRoute && !isAuth) || (restricted && isAuth)) return null;

          return (
            <li key={text}>
              <NavLink
                to={`/${generatePath(path, { lang })}`}
                style={({ isActive }) => (isActive ? { color: 'orange' } : {})}
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
