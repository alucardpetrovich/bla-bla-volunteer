import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useTheme } from 'styled-components';

import { userUpdate } from '../../../store/user/userOperations';
import { getUser } from '../../../store/user/userSelectors';
import { Heading, Text } from '../../StyledComponents';
import { CardStyled, IRoleCard } from './style';

const RoleCard: React.FC<IRoleCard> = ({ id, title, children, textAlign }) => {
  const user = useSelector(getUser);
  const { involvements } = user;

  const dispatch = useDispatch();
  const theme = useTheme();
  const mainColor = involvements[0].type === id ? theme.palette.text.primary : theme.palette.primary.main;

  const setUserRole = (role: string) => {
    const cred = { involvements: [role] };
    // involvementsAPI.updateInvolvements(cred);

    // FIXME: пофіксить тайпінги
    // eslint-disable-next-line
    // @ts-ignore
    dispatch(userUpdate(cred));
    console.log('click', role, cred);
  };

  //!!! make condition to make roleCard active if user already has this role

  return (
    <CardStyled onClick={() => setUserRole(id)}>
      <Heading tag="h4" color={mainColor} style={{ marginBottom: '20px' }}>
        {title}
      </Heading>

      {/* make element and hover for separator */}
      <div style={{ borderBottom: `1px solid ${mainColor}`, marginBottom: '20px' }}></div>
      <Text tag="b5" color={mainColor} textAlign={textAlign}>
        {children}
      </Text>
    </CardStyled>
  );
};

export default RoleCard;
