import React from 'react';
import { LogoName } from 'src/assets/logo';
import { Logo } from '../../atoms';
import { Divider } from '../../atoms/Divider';
import { Networks } from '../../modules/Networks';
import { footerNavigation } from './assets/data';
import { NavigationFooter } from './components/NavigationFooter';
import * as S from './style';

const Footer = () => {
  const navFooter = footerNavigation;

  return (
    <S.FooterWrapper>
      <div>
        <img src={LogoName} className="logo" />
        <NavigationFooter data={navFooter.footerNavigation} />
      </div>
      <Divider margin="40px 0px" color="#93A9D2" />
      <div>
        <p>{navFooter.subscription}</p>
        <Networks />
      </div>
    </S.FooterWrapper>
  );
};

export default Footer;
