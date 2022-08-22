import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import { TextField } from '@ui-kit';
import React, { forwardRef, useCallback, useState } from 'react';

import { FormFieldProps } from '../FormField/FormField';
import TogglePasswordIcon from './PasswordIcon';

export const PasswordField = forwardRef<HTMLInputElement, FormFieldProps>(
  ({ errorMsg, error = false, label, defaultValue = '', ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false);

    const toggleShowPassword = useCallback(() => {
      setShowPassword(s => !s);
    }, []);

    return (
      <TextField
        {...props}
        inputRef={ref}
        type={showPassword ? 'text' : 'password'}
        error={Boolean(error || errorMsg)}
        defaultValue={defaultValue}
        errorText={errorMsg}
        label={label}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton aria-label="toggle password visibility" onClick={toggleShowPassword}>
                <TogglePasswordIcon showPassword={showPassword} />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    );
  },
);

PasswordField.displayName = 'PasswordField';
