import { Button } from '@mui/material';
import { FormContactField, FormField } from '@ui-kit';
import React, { FC } from 'react';
import { defineMessages, useIntl } from 'react-intl';

import { AccessModes } from '../ProfileInfo/api/contacts';
import { Container, Footer, Label, Text, Wrapper } from './UserInfo.styles';
import { useUserInfo } from './useUserInfo';

const messages = defineMessages({
  nickname: { defaultMessage: 'Нікнейм', description: 'Profile/UserInfo: nickname' },
  update: { defaultMessage: 'Редагувати', description: 'Profile/UserInfo: update info button' },
  submit: { defaultMessage: 'Оновити інформацію', description: 'Profile/UserInfo: update info button' },
  reset: { defaultMessage: 'Скасувати', description: 'Profile/UserInfo: reset button' },
});

const Field: FC<{ isEditable: boolean; value?: string; label: string; children: React.ReactNode }> = ({
  isEditable,
  label,
  value = '',
  children,
}) => {
  if (!isEditable) {
    return (
      <div>
        <Label>{label}</Label>
        <Text>{value}</Text>
      </div>
    );
  }

  return <>{children}</>;
};

export const UserInfo: FC = () => {
  const { formatMessage } = useIntl();
  const {
    nickname,
    contacts,
    isLoading,
    handleSubmit,
    register,
    errors,
    reset,
    isEditable,
    setIsEditable,
    handleUpdateUserSettings,
  } = useUserInfo();

  return (
    <Wrapper onSubmit={handleSubmit(handleUpdateUserSettings)}>
      <Container>
        <Field isEditable={isEditable} value={nickname} label={formatMessage(messages.nickname)}>
          <FormField
            disabled={!isEditable}
            {...register('nickname')}
            defaultValue={nickname}
            errorMsg={errors?.nickname?.message}
            label={formatMessage(messages.nickname)}
          />
        </Field>
        {contacts.map(contact => (
          <Field key={contact.type} isEditable={isEditable} value={contact.value} label={contact.name}>
            <FormContactField
              disabled={!isEditable}
              register={register}
              checkboxName={`contacts.${contact.type}.accessMode`}
              inputName={`contacts.${contact.type}.value`}
              label={contact.name}
              defaultValue={contact.value}
              defaultChecked={contact.accessMode === AccessModes.PUBLIC}
              errorMsg={errors?.contacts?.[contact.type]?.value?.message}
            />
          </Field>
        ))}
      </Container>
      <Footer>
        {isEditable && (
          <>
            <Button variant="contained" color="info" type="submit" disabled={isLoading}>
              {formatMessage(messages.submit)}
            </Button>
            <Button variant="text" color="secondary" type="reset" onClick={reset} disabled={isLoading}>
              {formatMessage(messages.reset)}
            </Button>
          </>
        )}
      </Footer>
      {!isEditable && (
        <Button variant="contained" color="info" type="button" onClick={setIsEditable}>
          {formatMessage(messages.update)}
        </Button>
      )}
    </Wrapper>
  );
};
