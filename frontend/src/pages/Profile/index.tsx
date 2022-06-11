import { Heading } from 'components/StyledComponents';
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
      <div style={{ border: `1px solid ${theme.palette.primary.main}` }}></div>
    </>
  );
};

export default Profile;
