import { ErrorText, RequiredLabel } from './Components';
import { InputWrapperContainer, InputWrapperLabel } from './style';

export interface InputWrapperProps {
  label?: string;
  name: string;
  className?: string;
  hideLabel?: boolean;
  required?: string | boolean;
  error?: string;
  horizontal?: boolean;
  width?: number;
}

const InputWrapper = ({
  label = '',
  name,
  required = false,
  error,
  children,
  horizontal,
  width,
}: React.PropsWithChildren<InputWrapperProps>): JSX.Element => {
  return (
    <InputWrapperContainer horizontal={horizontal} width={width}>
      {label && (
        <InputWrapperLabel htmlFor={name}>
          {label}
          <RequiredLabel required={!!required} />
        </InputWrapperLabel>
      )}
      {children}
      {error ? <ErrorText text={error} /> : null}
    </InputWrapperContainer>
  );
};

export default InputWrapper;
