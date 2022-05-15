import { generatePath, NavLink } from 'react-router-dom';
import { linksNav } from './constants/listNav';
import * as S from './style';

const Navigation: React.FC = () => {
  return (
    <S.NavigationWrapper>
      <ul>
        {linksNav.map(({ path, text }) => (
          <li key={text}>
            <NavLink
              to={`/${generatePath(path, { lang: 'ua' })}`}
              style={({ isActive }) =>
                isActive ? { color: 'orange' } : undefined
              }
              end
            >
              {text}
            </NavLink>
          </li>
        ))}
      </ul>
    </S.NavigationWrapper>
  );
};

export default Navigation;
