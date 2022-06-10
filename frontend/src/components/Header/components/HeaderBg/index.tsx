import { Bg, IBg } from './style';

const HeaderBg: React.FC<IBg> = ({ isAuth, children }) => <Bg isAuth={isAuth}>{children}</Bg>;

export default HeaderBg;
