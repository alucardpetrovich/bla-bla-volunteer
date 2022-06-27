import { StyledButton } from './style';

export interface IButton {
  text: string;
  onClick?: () => void;
  buttonType?: 'primary' | 'secondary' | 'tertiary';
  isDisabled?: boolean;
}
const Button = ({ text, buttonType, onClick, isDisabled = false }: IButton): JSX.Element => {
  const handleClick = (): void => {
    if (!onClick) return;

    onClick();
  };

  return (
    <StyledButton disabled={isDisabled} buttonType={buttonType} onClick={handleClick}>
      {text}
    </StyledButton>
  );
};

export default Button;
