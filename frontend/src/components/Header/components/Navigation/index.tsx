import { generatePath, NavLink } from 'react-router-dom';
import { linksNav } from './constants/listNav';

const Navigation = () => {
  return (
    <nav>
      <ul>
        {linksNav.map(({ path, text }) => (
          <li key={text}>
            <NavLink to={`/${generatePath(path, { lang: 'ua' })}`}>
              {text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
