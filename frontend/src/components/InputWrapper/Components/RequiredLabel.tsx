import { RequiredLabelElement } from '../style';

export interface RequiredLabelProps {
  required?: boolean;
}
const RequiredLabel = ({ required = false }: RequiredLabelProps): JSX.Element | null => {
  return required ? <RequiredLabelElement>*</RequiredLabelElement> : null;
};

export default RequiredLabel;
