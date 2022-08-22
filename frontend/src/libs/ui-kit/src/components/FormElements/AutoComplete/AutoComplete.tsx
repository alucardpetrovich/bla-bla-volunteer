import { Autocomplete as MuiAutoComplete, AutocompleteProps } from '@mui/material';
import React from 'react';

import { Error, Label, Wrapper } from '../FormElements.styles';

type CustomTextFieldProps = {
  label?: string;
  className?: string;
  errorText?: unknown | string;
  error?: boolean;
};

type A = <
  T,
  Multiple extends boolean | undefined = undefined,
  DisableClearable extends boolean | undefined = undefined,
  FreeSolo extends boolean | undefined = undefined,
>(
  props: AutocompleteProps<T, Multiple, DisableClearable, FreeSolo> & CustomTextFieldProps,
) => JSX.Element;

export const AutoComplete: A = ({ label, errorText, className, error, ...props }) => {
  const showErrorText = error && errorText && typeof errorText === 'string';

  return (
    <Wrapper className={className}>
      {label && <Label error={error}>{label}</Label>}
      <MuiAutoComplete {...props} />
      {showErrorText ? <Error>{errorText}</Error> : null}
    </Wrapper>
  );
};
