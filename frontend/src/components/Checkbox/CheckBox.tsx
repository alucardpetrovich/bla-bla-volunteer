import InputWrapper from '../InputWrapper/InputWrapper';
import { StyledCheckbox, StyledCheckboxInput } from './style';

export interface ICheckboxProps {
  label?: string;
  onChange: (value: boolean) => void;
  isChecked: boolean;
  horizontal?: boolean;
}

const Checkbox = ({ label, onChange, isChecked, horizontal }: ICheckboxProps): JSX.Element => {
  const handleCheckBoxClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.checked;
    onChange(value);
  };

  return (
    <InputWrapper name={''} label={label} horizontal={horizontal}>
      <StyledCheckboxInput type="checkbox" onChange={handleCheckBoxClick} checked={isChecked} />
      <StyledCheckbox active={isChecked} aria-hidden="true" />
    </InputWrapper>
  );
};

export default Checkbox;
