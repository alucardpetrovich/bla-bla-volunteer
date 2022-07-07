import { FC } from 'react';

import { RequiredLabelElement } from '../style';

export interface RequiredLabelProps {
  required?: boolean;
}
const RequiredLabel: FC<RequiredLabelProps> = ({ required = false }): JSX.Element | null => {
  return required ? <RequiredLabelElement>*</RequiredLabelElement> : null;
};

export default RequiredLabel;
