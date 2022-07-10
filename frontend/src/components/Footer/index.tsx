import { FC } from 'react';

import { LogoName } from '../../assets/logo';
import { Divider } from '../Divider';
import { Networks } from '../Networks';
import { FooterNavigation } from './assets/data';
import { NavigationFooter } from './components/NavigationFooter/index';
import * as S from './style';

const Footer: FC = () => {
  const navFooter = FooterNavigation();

  return (
    <S.FooterWrapper>
      <S.FooterSection>
        <S.FooterLogo src={LogoName} alt="logo" />
        <NavigationFooter data={navFooter.footerNavigation} />
      </S.FooterSection>
      <Divider />
      <S.FooterSection>
        <S.FooterSubscription>{navFooter.subscription}</S.FooterSubscription>
        <Networks />
      </S.FooterSection>
    </S.FooterWrapper>
  );
};

export default Footer;
