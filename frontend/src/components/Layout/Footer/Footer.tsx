import { Navigation } from '@ui-kit';
import React, { FC } from 'react';
import { defineMessage, useIntl } from 'react-intl';

import { PATHS } from '../../common/constants/PATH';
import { ReactComponent as Facebook } from './assets/facebook.svg';
import { ReactComponent as Instagram } from './assets/instagram.svg';
import { ReactComponent as Twitter } from './assets/twitter.svg';
import {
  CopyRight,
  Name,
  NavigationBox,
  SocialItem,
  SocialLink,
  SocialLinks,
  SocialLinksBox,
  Wrapper,
} from './Footer.styles';

const navs = [
  { to: PATHS.HOME, name: defineMessage({ defaultMessage: 'Про проект', description: 'Footer navigation' }) },
  { to: PATHS.HOME, name: defineMessage({ defaultMessage: 'Сервіси', description: 'Footer navigation' }) },
  { to: PATHS.HOME, name: defineMessage({ defaultMessage: 'Безпека', description: 'Footer navigation' }) },
];

const socialLinks = [
  {
    href: 'https://www.facebook.com/',
    img: <Facebook />,
  },
  {
    href: 'https://www.tweet.com/',
    img: <Twitter />,
  },
  {
    href: 'https://www.instagram.com/',
    img: <Instagram />,
  },
];

export const Footer: FC = () => {
  const { formatMessage } = useIntl();

  return (
    <Wrapper>
      <NavigationBox>
        <Name>Name</Name>
        <Navigation list={navs} />
      </NavigationBox>
      <SocialLinksBox>
        <CopyRight>
          {formatMessage({
            defaultMessage: 'Company, 2022. All rights reserved',
            description: 'Footer: copyright',
          })}
        </CopyRight>
        <SocialLinks>
          {socialLinks.map(link => (
            <SocialItem key={link.href}>
              <SocialLink href={link.href} target="_blank" rel="noopener noreferrer">
                {link.img}
              </SocialLink>
            </SocialItem>
          ))}
        </SocialLinks>
      </SocialLinksBox>
    </Wrapper>
  );
};
