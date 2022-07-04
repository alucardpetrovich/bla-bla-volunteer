import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import { FC, useCallback, useEffect, useState } from 'react';
import TogglePasswordIcon from 'src/assets/icons/TogglePasswordIcon';
import useInputValidation from 'src/hooks/useInputValidation';

import InputWrapper, { InputWrapperProps } from '../InputWrapper/InputWrapper';

interface ITextBoxProps extends InputWrapperProps {
  showPassword?: boolean;
  handleClickShowPassword?: () => void;
  value: string;
  size?: 'small' | 'medium' | undefined;
  type?: 'text' | 'password' | 'email';
  showPasswordIcon?: boolean;
  onChange: (value: string) => void;
  id?: string;
  fullWidth?: boolean;
  autoComplete?: 'off' | 'on';
  required?: boolean;
  isIncorrectField?: (value: boolean) => void;
  placeholder?: string;
}

const TextBox: FC<ITextBoxProps> = ({
  showPassword = false,
  showPasswordIcon = false,
  value,
  handleClickShowPassword,
  size = 'small',
  type = 'text',
  name,
  label,
  onChange,
  id,
  fullWidth = false,
  autoComplete = 'off',
  horizontal = false,
  required,
  placeholder = '',
  isIncorrectField,
}): JSX.Element => {
  const [isDirty, setIsDirty] = useState<boolean>(false);
  const { error, isDisabled } = useInputValidation(value, name, isDirty);

  useEffect(() => {
    if (!isIncorrectField) return;
    isIncorrectField(isDisabled);
  }, [isDisabled, isIncorrectField]);

  const handleOnChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange(e.target.value);
    },
    [onChange],
  );

  const onBlur = useCallback(() => {
    setIsDirty(true);
  }, [setIsDirty]);

  return (
    <InputWrapper name={name} label={label} required={required} horizontal={horizontal}>
      <TextField
        error={error?.state ? error?.state : false}
        helperText={error?.state ? error.message : null}
        id={id}
        onBlur={onBlur}
        onChange={handleOnChange}
        type={type}
        size={size}
        fullWidth={fullWidth}
        value={value}
        autoComplete={autoComplete}
        placeholder={placeholder}
        InputProps={{
          endAdornment: showPasswordIcon ? (
            <InputAdornment position="end">
              <IconButton aria-label="toggle password visibility" onClick={handleClickShowPassword}>
                <TogglePasswordIcon showPassword={showPassword} />
              </IconButton>
            </InputAdornment>
          ) : null,
        }}
      />
    </InputWrapper>
  );
};

export default TextBox;
