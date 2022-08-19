import { Divider } from '@mui/material';
import React, { FC, ReactNode } from 'react';
import { MessageDescriptor, useIntl } from 'react-intl';
import { NavLink, useParams } from 'react-router-dom';

import { makeUrl } from '../../utils/url';
import { Container, Item, Wrapper } from './Navigation.styles';

const isDefaultNavigationItem = (value: unknown): value is DefaultNavigationItem => {
  return typeof value === 'object' && value !== null && 'to' in value && 'name' in value;
};

interface DefaultNavigationItem {
  to: string;
  name: MessageDescriptor;
}
export type NavigationType = 'primary' | 'secondary';

interface NavigationProps {
  type?: NavigationType;
  list: (DefaultNavigationItem | { name: MessageDescriptor; component: ReactNode })[];
}

export const Navigation: FC<NavigationProps> = ({ list, type = 'secondary' }) => {
  const params = useParams();
  const { formatMessage } = useIntl();

  return (
    <Wrapper type={type}>
      {list.map((item, index) => {
        const isLastItem = list.length - 1 === index;

        const divider = isLastItem ? null : <Divider orientation="vertical" flexItem variant="middle" />;
        const name = formatMessage(item.name);

        if (isDefaultNavigationItem(item)) {
          return (
            <Container key={name}>
              <NavLink to={makeUrl(item.to, { locale: params.locale })}>
                <Item>{name}</Item>
              </NavLink>
              {divider}
            </Container>
          );
        }
        return (
          <Container key={name}>
            <Item as="div">{item.component}</Item>
            {divider}
          </Container>
        );
      })}
    </Wrapper>
  );
};
