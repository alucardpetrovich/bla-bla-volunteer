import { TextFieldProps } from '@mui/material';
import React from 'react';

import { TextField } from '../TextField/TextField';

export type FormFieldProps = TextFieldProps & {
  error?: boolean;
  errorMsg?: string;
  label?: string;
  defaultValue?: unknown;
};

export const FormField = React.forwardRef<HTMLInputElement, FormFieldProps>(function formField(
  { errorMsg, error = false, label, defaultValue = '', ...props },
  ref,
) {
  return (
    <TextField
      {...props}
      inputRef={ref}
      error={Boolean(error || errorMsg)}
      defaultValue={defaultValue}
      errorText={errorMsg}
      label={label}
    />
  );
});
