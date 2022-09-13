import React, { FC } from 'react';
import { useCurrentUser } from 'src/components/common/hooks/useCurrentUser';

import UserPhoto from '../assets/userPhoto.jpg';
import { useUserConfig } from '../useUserConfig';
import { UserInfoStyled, UserNameStyled, UserPhotoStyled, UserRoleStyled, Wrapper } from './UserInfo.styled';

const UserInfo: FC = () => {
  const currentUser = useCurrentUser();
  const userConfig = useUserConfig();

  return (
    <Wrapper>
      <UserPhotoStyled>
        <img src={UserPhoto} alt="User photo" />
      </UserPhotoStyled>
      <UserInfoStyled>
        <UserNameStyled>{currentUser?.nickname}</UserNameStyled>
        <UserRoleStyled>{userConfig?.role}</UserRoleStyled>
      </UserInfoStyled>
    </Wrapper>
  );
};

export default UserInfo;
