import { useSelector } from 'react-redux';
import { generatePath, NavLink } from 'react-router-dom';
// import { Flex } from '../../../StyledComponents';
import { linksNav } from './constants/listNav';
import { getIsAuth } from 'redux/auth/authSelectors';
import { FlexDiv } from 'components/StyledComponents/Flex/style';

const Navigation = () => {
  const isAuth = useSelector(getIsAuth);
  const lang = useSelector(state => 'ua');

  return (
    <nav>
      <ul>
        <FlexDiv container justifyContent="flex-end">
          {linksNav.map(({ path, text, privateRoute, restricted }) => {
            if ((privateRoute && !isAuth) || (restricted && isAuth))
              return null;

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
        </FlexDiv>
      </ul>
    </nav>
  );
};

export default Navigation;
