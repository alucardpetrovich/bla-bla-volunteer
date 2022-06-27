export interface ErrorTextProps {
  text?: string;
}
const ErrorText = ({ text }: ErrorTextProps): JSX.Element | null => {
  return text ? <div className="errorText">{text}</div> : null;
};

export default ErrorText;
