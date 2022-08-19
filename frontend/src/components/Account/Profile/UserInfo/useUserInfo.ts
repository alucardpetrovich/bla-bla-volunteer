import { yupResolver } from '@hookform/resolvers/yup';
import { FormatMessage, stringSchema } from '@ui-kit';
import { mapValues } from 'lodash';
import { useCallback, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useIntl } from 'react-intl';
import { useToggle } from 'react-use';
import { boolean, InferType, lazy, object, string } from 'yup';

import { useCurrentUser } from '../../../common/hooks/useCurrentUser';
import { UserSettingsData, useUserSettings } from '../../../common/hooks/useUserSettings';
import { AccessModes } from '../ProfileInfo/api/contacts';

const schema = (t: FormatMessage) =>
  object({
    nickname: stringSchema(t),
    contacts: lazy(obj =>
      object(
        mapValues(obj, () =>
          object({
            value: stringSchema(t),
            accessMode: boolean(),
            type: string(),
            id: string(),
          }),
        ),
      ),
    ),
  });

export const useUserInfo = () => {
  const { formatMessage } = useIntl();
  const [isEditable, setIsEditable] = useToggle(false);
  const userInfo = useCurrentUser();
  const { isLoading, updateUserSettings } = useUserSettings();

  const contacts = useMemo(() => {
    return userInfo?.contacts.map(contact => ({ ...contact, name: contact.type })) ?? [];
  }, [userInfo?.contacts]);

  const {
    register,
    handleSubmit,
    setValue,
    reset: resetValidation,
    formState: { errors },
  } = useForm<InferType<ReturnType<typeof schema>>>({
    reValidateMode: 'onChange',
    shouldUnregister: true,
    resolver: yupResolver(schema(formatMessage)),
  });

  const handleUpdateUserSettings = useCallback(
    (data: InferType<ReturnType<typeof schema>>) => {
      if (!isEditable) {
        return;
      }
      const contacts = Object.entries(data.contacts).map(([type, info]) => ({
        ...info,
        type,
        value: info.value ?? '',
        accessMode: info.accessMode ? AccessModes.PUBLIC : AccessModes.READ_ONLY_ME,
      }));

      const d: UserSettingsData = {
        nickname: data.nickname,
        contacts,
      };

      updateUserSettings(d).then(() => {
        toast.success(
          formatMessage({
            defaultMessage: 'Успішно оновлено особисті дані',
            description: 'UserIfo: update user' + ' settings',
          }),
        );
      });
    },
    [formatMessage, isEditable, updateUserSettings],
  );

  const reset = useCallback(() => {
    if (!userInfo) {
      return;
    }

    setIsEditable(false);
    resetValidation();

    setValue('nickname', userInfo.nickname);

    userInfo.contacts.forEach(contact => {
      setValue('contacts', {
        [contact.type]: {
          value: contact.value,
          accessMode: contact.accessMode === AccessModes.PUBLIC,
          type: contact.type,
          id: contact.id,
        },
      });
    });
  }, [resetValidation, setIsEditable, setValue, userInfo]);

  return {
    register,
    handleSubmit,
    errors,
    isLoading,
    contacts,
    nickname: userInfo?.nickname,
    reset,
    isEditable,
    setIsEditable,
    handleUpdateUserSettings,
  };
};
