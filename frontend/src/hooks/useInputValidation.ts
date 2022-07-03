import { useEffect, useState } from 'react';
import { useIntl } from 'react-intl';
import { emailValidateRegExp } from 'src/constants/validate';

export interface IInputErrorValidation {
  state: boolean;
  message: string;
}

enum MinValueLength {
  DefaultValue = 1,
  Email = 4,
  Password = 6,
  NickName = 3,
}

const minValueMessage = (fieldName: string) => {
  const fields: { [key: string]: number } = {
    email: MinValueLength.Email,
    password: MinValueLength.Password,
    nickName: MinValueLength.NickName,
  };

  return fields[fieldName] ?? MinValueLength.DefaultValue;
};

const useInputValidation = (value = '', fieldName = '', isDirty = false) => {
  const { formatMessage } = useIntl();

  const [error, setError] = useState({ state: false, message: '' });
  const [isDisabled, setIsDisabled] = useState<boolean>(true);

  const [isEmpty, setIsEmpty] = useState<IInputErrorValidation>({
    state: false,
    message: formatMessage({
      defaultMessage: 'Поле не повинно бути пустим',
      description: 'inputsValidation: isEmpty',
    }),
  });
  const [minLengthError, setMinLengthError] = useState<IInputErrorValidation>({
    state: false,
    message: formatMessage(
      {
        defaultMessage: 'Мінімільна довжина має бути не менше {minValue} символів',
        description: 'inputsValidation: minLengthError',
      },
      { minValue: minValueMessage(fieldName) },
    ),
  });
  const [emailError, setEmailError] = useState<IInputErrorValidation>({
    state: false,
    message: formatMessage({
      defaultMessage: 'Поле повинно бути email',
      description: 'inputsValidation: emailError',
    }),
  });

  const validateFunc = () => {
    if (isDirty && isEmpty.state) {
      return setError({ state: true, message: isEmpty.message });
    }

    if (isDirty && minLengthError.state) {
      return setError({ state: true, message: minLengthError.message });
    }

    if (isDirty && emailError.state) {
      return setError({ state: true, message: emailError.message });
    }

    return setError({ state: false, message: '' });
  };

  const forDisabledButton = () => {
    if (isEmpty.state) {
      return setIsDisabled(true);
    }

    if (minLengthError.state) {
      return setIsDisabled(true);
    }

    if (emailError.state) {
      return setIsDisabled(true);
    }

    return setIsDisabled(false);
  };

  const isEmailValidate = () => {
    emailValidateRegExp.test(String(value).toLowerCase())
      ? setEmailError({ ...emailError, state: false })
      : setEmailError({ ...emailError, state: true });
  };

  const isMinLengthValidate = (minLength: number) => {
    value.length < minLength
      ? setMinLengthError({ ...minLengthError, state: true })
      : setMinLengthError({ ...minLengthError, state: false });
  };

  const isEmptyValidate = () => {
    value.length === 0 ? setIsEmpty({ ...isEmpty, state: true }) : setIsEmpty({ ...isEmpty, state: false });
  };

  useEffect(() => {
    switch (fieldName) {
      case 'email':
        isEmailValidate();
        isMinLengthValidate(MinValueLength.Email);
        isEmptyValidate();
        validateFunc();
        forDisabledButton();
        break;

      case 'password':
        isMinLengthValidate(MinValueLength.Password);
        isEmptyValidate();
        validateFunc();
        forDisabledButton();
        break;

      case 'nickName':
        isMinLengthValidate(MinValueLength.NickName);
        isEmptyValidate();
        validateFunc();
        forDisabledButton();
        break;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDirty, value, fieldName, isEmpty.state, minLengthError.state, emailError.state]);

  return { error, isDisabled };
};

export default useInputValidation;
