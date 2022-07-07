import { FC } from 'react';
import { useSelector } from 'react-redux';
import { generatePath, NavLink } from 'react-router-dom';
import { getIsAuth } from 'src/store';

import { FlexDiv } from '../../../StyledComponents/Flex/style';
import { linksNav } from './constants/listNav';

interface INavigation {
  style?: React.CSSProperties;
}

const Navigation: FC<INavigation> = ({ style }) => {
  const isAuth = useSelector(getIsAuth);
  const lang = useSelector(() => 'ua');

  return (
    <nav style={style}>
      <ul>
        <FlexDiv container justifyContent="flex-end">
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
        </FlexDiv>
      </ul>
    </nav>
  );
};

export default Navigation;
