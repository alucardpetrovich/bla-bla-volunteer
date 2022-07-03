import { FC, ReactNode, useCallback } from 'react';

import { StyledButton } from './style';

export interface IButton {
  text?: string;
  onClick?: () => void;
  buttonType?: 'primary' | 'secondary' | 'tertiary';
  isDisabled?: boolean;
  marginBottom?: string | number;
  children?: ReactNode;
}
const Button: FC<IButton> = ({
  text,
  buttonType,
  onClick,
  isDisabled = false,
  children,
  marginBottom,
}): JSX.Element => {
  const handleClick = useCallback(() => {
    if (!onClick) return;

    onClick();
  }, [onClick]);

  return (
    <StyledButton marginBottom={marginBottom} disabled={isDisabled} buttonType={buttonType} onClick={handleClick}>
      {children ? children : text}
    </StyledButton>
  );
};

export default Button;
