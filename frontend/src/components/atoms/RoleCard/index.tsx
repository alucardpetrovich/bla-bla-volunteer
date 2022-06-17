import { Heading, Text } from 'components/StyledComponents';
import { useTheme } from 'styled-components';
import { CardStyled } from './style';

const RoleCard = ({ title, children }) => {
  const theme = useTheme();
  const mainColor = theme.palette.primary.main;
  const hoverColor = theme.palette.text.primary;

  return (
    <CardStyled color={mainColor} hover={hoverColor}>
      <Heading tag="h4" color={mainColor} style={{ marginBottom: '20px' }}>
        {title}
      </Heading>
      <div style={{ borderBottom: `1px solid ${mainColor}`, marginBottom: '20px' }}></div>
      <Text tag="b5" color={mainColor}>
        {children}
      </Text>
    </CardStyled>
  );
};

export default RoleCard;
