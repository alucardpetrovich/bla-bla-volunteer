import { FC } from 'react';

export interface ErrorTextProps {
  text?: string;
}
const ErrorText: FC<ErrorTextProps> = ({ text }): JSX.Element | null => {
  return text ? <div className="errorText">{text}</div> : null;
};

export default ErrorText;
