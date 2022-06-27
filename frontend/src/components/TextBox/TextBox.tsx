import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import TogglePasswordIcon from 'src/assets/icons/TogglePasswordIcon';

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
}

const TextBox = ({
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
}: ITextBoxProps): JSX.Element => {
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    onChange(e.target.value);
  };

  return (
    <InputWrapper name={name} label={label} required horizontal={horizontal}>
      <TextField
        id={id}
        onChange={handleOnChange}
        type={type}
        size={size}
        fullWidth={fullWidth}
        value={value}
        autoComplete={autoComplete}
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
