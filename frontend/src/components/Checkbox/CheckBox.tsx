import { FC, SyntheticEvent } from 'react';
import CheckBoxCheckedIcon from 'src/assets/icons/CheckBoxCheckedIcon';

import { StyledCheckboxBoxChecked, StyledCheckboxInput, StyledOption } from './style';

interface CheckboxProps {
  label: string;
  checked: boolean;
  name: string;
  handleChange: (event: SyntheticEvent) => void;
}

const Checkbox: FC<CheckboxProps> = ({ label, checked, handleChange }): JSX.Element => {
  return (
    <div>
      <StyledOption>
        <StyledCheckboxInput type="checkbox" checked={checked} onChange={handleChange} />
        <StyledCheckboxBoxChecked checked={checked}>{checked && <CheckBoxCheckedIcon />}</StyledCheckboxBoxChecked>
        <span>{label}</span>
      </StyledOption>
    </div>
  );
};

export default Checkbox;
