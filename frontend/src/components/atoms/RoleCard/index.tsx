import { useAppDispatch, useAppSelector } from 'src/hooks';
import { getIsAuth } from 'src/store';
import { useTheme } from 'styled-components';

import { userUpdate } from '../../../store/user/userOperations';
import { getUser } from '../../../store/user/userSelectors';
import { Heading, Text } from '../../StyledComponents';
import { CardStyled, CardWrapper, Separator } from './style';

interface IRoleCard {
  id: string;
  title: string;
  textAlign?: 'left' | 'center' | 'right' | 'end' | 'start' | 'justify';
  children?: string | React.ReactElement;
}

const RoleCard: React.FC<IRoleCard> = ({ id, title, children, textAlign }) => {
  const user = useAppSelector(getUser);
  const isAuth = useAppSelector(getIsAuth);
  const involvements = user?.involvements;

  const dispatch = useAppDispatch();
  const theme = useTheme();
  const mainColor =
    involvements?.length && involvements[0].type === id ? theme.palette.common.black : theme.palette.primary.main;
  const hover = theme.palette.common.black;

  const setUserRole = (role: string) => {
    if (!isAuth) return;
    const cred = { involvements: [role] };

    dispatch(userUpdate(cred));
  };

  //!!! make condition to make roleCard active if user already has this role

  return (
    <CardWrapper color={mainColor} hover={hover}>
      <CardStyled hover={hover} color={mainColor} onClick={() => setUserRole(id)}>
        <Heading tag="h4" color={mainColor} style={{ marginBottom: '20px' }}>
          {title}
        </Heading>

        <Separator color={mainColor} hover={hover} />
        <Text tag="b5" color={mainColor} textAlign={textAlign}>
          {children}
        </Text>
      </CardStyled>
    </CardWrapper>
  );
};

export default RoleCard;
