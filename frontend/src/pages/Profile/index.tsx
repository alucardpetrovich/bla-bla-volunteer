import RoleCard from 'components/atoms/RoleCard';
import { Heading } from 'components/StyledComponents';
import { roles } from 'constants/roles';
import { RoleListWrapper, RoleWrapper } from './style';

const Profile = () => {
  return (
    <>
      <Heading tag="h3" style={{ marginBottom: '40px' }}>
        Ваша роль
      </Heading>
      <RoleListWrapper>
        {roles.map(role => (
          <RoleWrapper key={role.title}>
            <RoleCard title={role.title} textAlign="left">
              {role.desc}
            </RoleCard>
          </RoleWrapper>
        ))}
      </RoleListWrapper>
    </>
  );
};

export default Profile;
