import { generatePath, NavLink } from 'react-router-dom';
import { Flex } from '../../../StyledComponents';
import { linksNav } from './constants/listNav';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <Flex className="flex" container flexWrap="wrap">
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
        </Flex>
      </ul>
    </nav>
  );
};

export default Navigation;
