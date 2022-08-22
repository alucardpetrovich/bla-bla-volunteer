import React, { FC } from 'react';

import { CardButton, Divider, Title } from './Card.styles';

interface CardProps extends React.ComponentPropsWithoutRef<'button'> {
  title: string;
  selected?: boolean;
  content: string;
  className?: string;
}

export const Card: FC<CardProps> = ({ title, content, selected = false, ...props }) => {
  return (
    <CardButton selected={selected} {...props}>
      <Title>{title}</Title>
      <Divider />
      {content}
    </CardButton>
  );
};
