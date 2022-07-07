import React from 'react';

import { LogoName } from '../../assets/logo';
import { Divider } from '../Divider';
import { Networks } from '../Networks';
import { footerNavigation } from './assets/data';
import { NavigationFooter } from './components/NavigationFooter/index';
import * as S from './style';

const Footer: React.FC = () => {
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
