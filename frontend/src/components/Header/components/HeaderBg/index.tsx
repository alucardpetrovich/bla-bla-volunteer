import { Bg, IBg } from './style';

const HeaderBg: React.FC<IBg> = ({ isAuth, isShowHeading, children }) => (
  <Bg isAuth={isAuth} isShowHeading={isShowHeading}>
    {children}
  </Bg>
);

export default HeaderBg;
