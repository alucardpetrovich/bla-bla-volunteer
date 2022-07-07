import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getIsAuth } from 'src/store';
import { useTheme } from 'styled-components';

import { userUpdate } from '../../../store/user/userOperations';
import { getUser } from '../../../store/user/userSelectors';
import { Heading, Text } from '../../StyledComponents';
import { CardStyled, IRoleCard, Separator } from './style';

const RoleCard: React.FC<IRoleCard> = ({ id, title, children, textAlign }) => {
  const user = useSelector(getUser);
  const isAuth = useSelector(getIsAuth);
  const involvements = user?.involvements;

  const dispatch = useDispatch();
  const theme = useTheme();
  const mainColor =
    involvements?.length && involvements[0].type === id ? theme.palette.common.black : theme.palette.primary.main;
  const hover = theme.palette.common.black;

  const setUserRole = (role: string) => {
    if (!isAuth) return;
    const cred = { involvements: [role] };

    // FIXME: пофіксить тайпінги
    // eslint-disable-next-line
    // @ts-ignore
    dispatch(userUpdate(cred));
  };

  //!!! make condition to make roleCard active if user already has this role

  return (
    <CardStyled hover={hover} color={mainColor} onClick={() => setUserRole(id)}>
      <Heading tag="h4" color={mainColor} style={{ marginBottom: '20px' }}>
        {title}
      </Heading>

      <Separator color={mainColor} hover={hover} />
      <Text tag="b5" color={mainColor} textAlign={textAlign}>
        {children}
      </Text>
    </CardStyled>
  );
};

export default RoleCard;
