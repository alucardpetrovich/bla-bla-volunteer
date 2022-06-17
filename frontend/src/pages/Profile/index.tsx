import RoleCard from 'components/atoms/RoleCard';
import { Heading, Text } from 'components/StyledComponents';
import React from 'react';
import { useTheme } from 'styled-components';

const Profile = () => {
  const theme = useTheme();
  return (
    <>
      {/* <div>Profile</div> */}
      <Heading tag="h3" style={{ marginBottom: '40px' }}>
        Ваша роль
      </Heading>
      <RoleCard title="Донор">
        Особа або група осіб, організації, рухи тощо, які здійснюють передачу матеріальних засобів на безоплатній основі
      </RoleCard>
    </>
  );
};

export default Profile;
