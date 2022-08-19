import { TextField as MuiTextField, TextFieldProps } from '@mui/material';
import React, { FC } from 'react';

import { Error, Label, Wrapper } from './TextField.styles';

type CustomTextFieldProps = TextFieldProps & {
  label?: string;
  className?: string;
  errorText?: string | unknown;
};

export const TextField: FC<CustomTextFieldProps> = ({ label, errorText, className, ...props }) => {
  const showErrorText = props.error && errorText && typeof errorText === 'string';

  return (
    <Wrapper className={className}>
      {label && <Label error={props.error}>{label}</Label>}
      <MuiTextField {...props} />
      {showErrorText ? <Error>{errorText}</Error> : null}
    </Wrapper>
  );
};
