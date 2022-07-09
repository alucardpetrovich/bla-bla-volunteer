import DefaultUserImg from 'src/assets/images/default-user.jpeg';

import * as S from './style';

const UserInfo = () => {
  return (
    <S.ContainerMain>
      <S.UserPhoto src={DefaultUserImg} alt="user photo" />

      <div>
        <S.UserName>Кшишек Дунін</S.UserName>
        <S.UserRole>Волонтерська служба в Польщі</S.UserRole>
      </div>
    </S.ContainerMain>
  );
};

export default UserInfo;
