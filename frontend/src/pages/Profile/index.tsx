import RoleCard from 'components/atoms/RoleCard';
import { Heading } from 'components/StyledComponents';
import { roles } from 'constants/roles';
import { useSelector } from 'react-redux';
import { getUser } from 'redux/user/userSelectors';
import { useTheme } from 'styled-components';
import { RoleListWrapper, RoleWrapper } from './style';

const Profile: React.FC = () => {
  const user = useSelector(getUser);
  const { involvements } = user;

  const theme = useTheme();
  const mainColor = theme.palette.primary.main;
  const hoverColor = theme.palette.text.primary;

  return (
    <>
      {involvements && (
        <>
          <Heading tag="h3" style={{ marginBottom: '40px' }}>
            Ваша роль
          </Heading>
          <RoleListWrapper>
            {roles.map(role => (
              <RoleWrapper key={role.title} color={mainColor} hover={hoverColor}>
                <RoleCard id={role.id} title={role.title} textAlign="left">
                  {role.desc}
                </RoleCard>
              </RoleWrapper>
            ))}
          </RoleListWrapper>
        </>
      )}
    </>
  );
};

export default Profile;
