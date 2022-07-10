import { default_user } from 'src/assets/images';

import * as S from './style';

const UserInfo = () => {
  return (
    <S.ContainerMain>
      <S.UserPhoto src={default_user} alt="" />

      <div>
        <S.UserName>Кшишек Дунін</S.UserName>
        <S.UserRole>Волонтерська служба в Польщі</S.UserRole>
      </div>
    </S.ContainerMain>
  );
};

export default UserInfo;
