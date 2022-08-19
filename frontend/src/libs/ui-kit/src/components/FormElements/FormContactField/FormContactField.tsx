import { FormControlLabel, Switch } from '@mui/material';
import React, { PropsWithChildren, ReactElement } from 'react';
import { FieldPath, UseFormRegister } from 'react-hook-form';
import { FieldPathValue } from 'react-hook-form/dist/types';
import { useIntl } from 'react-intl';

import { SwitcherWrapper, TextField } from './FormContactField.styles';

interface ContactFieldProps<T> {
  label: string;
  register: UseFormRegister<T>;
  inputName: FieldPath<T>;
  checkboxName: FieldPath<T>;
  defaultValue?: FieldPathValue<T, FieldPath<T>>;
  defaultChecked?: boolean;
  error?: boolean;
  errorMsg?: string;
  placeholder?: string;
  disabled?: boolean;
}

export const FormContactField = <T,>({
  inputName,
  checkboxName,
  defaultChecked,
  defaultValue,
  label,
  register,
  errorMsg,
  error,
  placeholder,
  disabled,
}: PropsWithChildren<ContactFieldProps<T>>): ReactElement | null => {
  const { formatMessage } = useIntl();
  const { ref: inputRef, ...inputRest } = register(inputName);

  return (
    <div>
      <TextField
        {...inputRest}
        disabled={disabled}
        inputRef={inputRef}
        defaultValue={defaultValue}
        error={Boolean(error || errorMsg)}
        errorText={errorMsg}
        label={label}
        name={inputName}
        placeholder={placeholder}
      />
      <SwitcherWrapper>
        <FormControlLabel
          control={<Switch {...register(checkboxName)} disabled={disabled} defaultChecked={defaultChecked} />}
          label={formatMessage({
            defaultMessage: 'Доступний всім',
            description: 'Contact: accessMode label',
          })}
        />
      </SwitcherWrapper>
    </div>
  );
};
