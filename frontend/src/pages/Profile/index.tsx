import { useSelector } from 'react-redux';
import { useTheme } from 'styled-components';

import RoleCard from '../../components/atoms/RoleCard';
import { Heading } from '../../components/StyledComponents';
import { roles } from '../../constants/roles';
import { getUser } from '../../store/user/userSelectors';
import { RoleListWrapper, RoleWrapper } from './style';

const Profile: React.FC = () => {
  const user = useSelector(getUser);
  const involvements = user?.involvements;

  const theme = useTheme();
  const mainColor = theme.palette.primary.main;
  const hoverColor = theme.palette.common.black;

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
