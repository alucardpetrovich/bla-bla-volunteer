import { involvementsAPI } from 'api';
import { Heading, Text } from 'components/StyledComponents';
import { useTheme } from 'styled-components';
import { CardStyled, IRoleCard } from './style';

const RoleCard: React.FC<IRoleCard> = ({ id, title, children, textAlign }) => {
  const theme = useTheme();
  const mainColor = theme.palette.primary.main;
  const hoverColor = theme.palette.text.primary;

  const setUserRole = (role: string) => {
    const cred = { involvements: [role] };
    involvementsAPI.updateInvolvements(cred);
  };

  //!!! make condition to make roleCard active if user already has this role

  return (
    <CardStyled color={mainColor} hover={hoverColor} onClick={() => setUserRole(id)}>
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
