import { StyledButton } from './style';

export interface IButton {
  text?: string;
  onClick?: () => void;
  buttonType?: 'primary' | 'secondary' | 'tertiary';
  isDisabled?: boolean;
  marginBottom?: string | number;
}
const Button = ({
  text,
  buttonType,
  onClick,
  isDisabled = false,
  children,
  marginBottom,
}: React.PropsWithChildren<IButton>): JSX.Element => {
  const handleClick = (): void => {
    if (!onClick) return;

    onClick();
  };

  return (
    <StyledButton marginBottom={marginBottom} disabled={isDisabled} buttonType={buttonType} onClick={handleClick}>
      {children ? children : text}
    </StyledButton>
  );
};

export default Button;
