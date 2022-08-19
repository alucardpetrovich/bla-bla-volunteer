import { Button } from '@mui/material';
import { AutoComplete, FormContactField, FormField, TextField } from '@ui-kit';
import React, { FC } from 'react';
import { Controller } from 'react-hook-form';
import { defineMessages, useIntl } from 'react-intl';

import { Spinner } from '../../../Layout/Layout';
import { AccessModes } from './api/contacts';
import { Footer, Title, Wrapper } from './RoleInfo.styles';
import { useRoleInfo } from './useRoleInfo';
import { useSettlementsSearch } from './useSettlementsSearch';

const messages = defineMessages({
  title: { defaultMessage: 'Додати інформацію про Хаб', description: 'Profile/Roles: title' },
  name: { defaultMessage: 'Назва хабу', description: 'Profile/Roles: Hub name' },
  address: { defaultMessage: 'Адреса', description: 'Profile/Roles: Hub adress' },
  contacts: { defaultMessage: 'Контакти хабу', description: 'Profile/Roles: Hub contacts' },
  settlement: { defaultMessage: 'Назва населеного пункту', description: 'Profile/Roles: Hub city name' },
  selectPlaceholder: { defaultMessage: 'Введіть місто', description: 'Profile/Roles: Hub city placeholder' },
  emptySelectOptions: { defaultMessage: 'Не знайдено', description: 'Profile/Roles: Empty hub city name' },
  submit: { defaultMessage: 'Додати інформацію', description: 'Profile/Roles: submit button' },
  update: { defaultMessage: 'Оновити інформацію', description: 'Profile/Roles: update info button' },
  reset: { defaultMessage: 'Скасувати', description: 'Profile/Roles: reset button' },
});

export const RoleInfo: FC = () => {
  const { formatMessage } = useIntl();

  const {
    submit,
    control,
    errors,
    handleSubmit,
    reset,
    roleInfo,
    isLoading: isLoadingOrganization,
    isLoadingSaveData,
    register,
  } = useRoleInfo();
  const { search, options, isLoading } = useSettlementsSearch();

  if (isLoadingOrganization) {
    return <Spinner />;
  }

  return (
    <Wrapper>
      <Title>{formatMessage(messages.title)}</Title>

      <form onSubmit={handleSubmit(submit)}>
        <FormField
          {...register('name')}
          defaultValue={roleInfo?.name}
          errorMsg={errors?.name?.message}
          label={formatMessage(messages.name)}
        />

        <Controller
          name="settlement"
          control={control}
          defaultValue={roleInfo?.settlement}
          render={({ field: { onChange, ...props } }) => (
            <AutoComplete
              options={options}
              loading={isLoading}
              renderInput={params => {
                return (
                  <TextField
                    {...params}
                    placeholder={formatMessage(messages.selectPlaceholder)}
                    error={Boolean(errors.settlement)}
                  />
                );
              }}
              label={formatMessage(messages.settlement)}
              error={Boolean(errors.settlement)}
              noOptionsText={formatMessage(messages.emptySelectOptions)}
              errorText={errors.settlement?.message}
              onInputChange={search}
              getOptionLabel={option => {
                return `${option.name}, ${option.district}, ${option.region}`;
              }}
              renderOption={(props, option) => {
                return (
                  <li {...props} key={props.id}>
                    {`${option.name}, ${option.district}, ${option.region}`}
                  </li>
                );
              }}
              onChange={(_, data) => onChange(data)}
              {...props}
            />
          )}
        />
        <FormField
          {...register('address')}
          defaultValue={roleInfo?.address}
          errorMsg={errors?.address?.message}
          label={formatMessage(messages.address)}
        />
        {roleInfo?.contacts.map(contact => (
          <FormContactField
            key={contact.type}
            register={register}
            checkboxName={`contacts.${contact.type}.accessMode`}
            inputName={`contacts.${contact.type}.value`}
            label={contact.name}
            defaultValue={contact.value}
            defaultChecked={contact.accessMode === AccessModes.PUBLIC}
            errorMsg={errors?.contacts?.[contact.type]?.value?.message}
          />
        ))}
        <Footer>
          <Button variant="contained" color="info" type="submit" disabled={isLoadingSaveData}>
            {formatMessage(roleInfo?.name ? messages.update : messages.submit)}
          </Button>
          <Button onClick={reset} variant="text" color="secondary" type="button" disabled={isLoadingSaveData}>
            {formatMessage(messages.reset)}
          </Button>
        </Footer>
      </form>
    </Wrapper>
  );
};
