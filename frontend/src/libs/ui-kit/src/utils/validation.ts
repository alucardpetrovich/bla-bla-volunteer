import { IntlFormatters } from '@formatjs/intl/src/types';
import { defineMessage } from 'react-intl';
import { string } from 'yup';

const defaultErrors = {
  empty: defineMessage({
    defaultMessage: 'Поле не повинно бути пустим',
    description: 'Validation error text',
  }),
  min: defineMessage({
    defaultMessage: 'Мінімільна довжина має бути не менше {min} символів',
    description: 'Validation error text',
  }),
  max: defineMessage({
    defaultMessage: 'Мінімільна довжина має бути не більше {msx} символів',
    description: 'Validation error text',
  }),
};

export const errors = {
  any: {
    empty: defaultErrors.empty,
    min: defaultErrors.min,
    max: defaultErrors.max,
    required: defaultErrors.empty,
  },
  email: {
    invalid: defineMessage({
      defaultMessage: 'Невалідний email',
      description: 'Validation error text',
    }),
  },
  phone: {
    invalid: defineMessage({
      defaultMessage: 'Невалідний телефон',
      description: 'Validation error text',
    }),
  },
  password: {
    repeat: defineMessage({
      defaultMessage: 'Паролі не співпадають',
      description: 'Validation error text',
    }),
  },
};

export type FormatMessage = IntlFormatters['formatMessage'];

export const stringSchema = (t: FormatMessage) => {
  return string().required(t(errors.any.empty));
};

export const emailSchema = (t: FormatMessage) => {
  return string().required(t(errors.any.empty)).email(t(errors.email.invalid));
};

export const passwordSchema = (t: FormatMessage, min = 8) => {
  return string().required(t(errors.any.empty)).min(min, t(errors.any.min, { min }));
};

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const phoneSchema = (t: FormatMessage) => {
  return string().required(t(errors.any.empty)).matches(phoneRegExp, t(errors.phone.invalid));
};
