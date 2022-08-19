import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { errors, FormatMessage, stringSchema } from '@ui-kit';
import { mapValues } from 'lodash';
import { useCallback } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { defineMessages, useIntl } from 'react-intl';
import { boolean, InferType, lazy, number, object, string } from 'yup';

import { useCurrentUser } from '../../../common/hooks/useCurrentUser';
import { AccessModes } from './api/contacts';
import { createOrganization, getMyOrganizations, OrganizationData, updateOrganization } from './api/organization';
import { useGetMyOrganizationsQuery } from './useGetMyOrganizationsQuery';

const messages = defineMessages({
  createSuccess: {
    defaultMessage: 'Організацію успішно створено',
    description: 'Create organization success toast',
  },
  createError: {
    defaultMessage: 'Помилка при створенні організації',
    description: 'Create organization error toast',
  },
  updateSuccess: {
    defaultMessage: 'Організацію успішно оновлено',
    description: 'Update organization success toast',
  },
  updateError: {
    defaultMessage: 'Помилка при оновленні організації',
    description: 'Update organization error toast',
  },
});

const schema = (t: FormatMessage) =>
  object({
    name: stringSchema(t),
    settlement: object({
      centerLocation: object({
        lon: number(),
        lat: number(),
      }),
      countryCode: string(),
      district: string(),
      id: stringSchema(t),
      name: string(),
      region: string(),
      type: string(),
    })
      .nullable()
      .required(t(errors.any.required)),
    address: stringSchema(t),
    contacts: lazy(obj =>
      object(
        mapValues(obj, () =>
          object({
            value: string(),
            accessMode: boolean(),
            type: string(),
            id: string(),
          }),
        ),
      ),
    ),
  });

export const useRoleInfo = () => {
  const { formatMessage } = useIntl();
  const queryClient = useQueryClient();
  const { data: organization, isLoading } = useGetMyOrganizationsQuery();
  const user = useCurrentUser();
  const {
    control,
    handleSubmit,
    setValue,
    reset: resetValidation,
    formState: { errors },
    register,
  } = useForm<InferType<ReturnType<typeof schema>>>({
    reValidateMode: 'onChange',
    resolver: yupResolver(schema(formatMessage)),
  });

  const isOrganizationCreated = Boolean(organization?.roleInfo?.name);

  const organizationEndpoint = isOrganizationCreated ? updateOrganization : createOrganization;

  const reset = useCallback(() => {
    const roleInfo = organization?.roleInfo;

    if (!roleInfo) {
      return;
    }

    resetValidation();

    setValue('name', roleInfo.name);
    setValue('address', roleInfo.address);

    if (roleInfo.settlement) {
      setValue('settlement', roleInfo.settlement);
    }

    roleInfo.contacts.forEach(contact => {
      setValue('contacts', {
        [contact.type]: {
          value: contact.value,
          accessMode: contact.accessMode === AccessModes.PUBLIC,
          type: contact.type,
          id: contact.id,
        },
      });
    });
  }, [organization?.roleInfo, resetValidation, setValue]);

  const { mutate: organizationMutate, isLoading: isLoadingSaveData } = useMutation(organizationEndpoint, {
    onSuccess: () => {
      toast.success(formatMessage(isOrganizationCreated ? messages.updateSuccess : messages.createSuccess));
      queryClient.invalidateQueries([getMyOrganizations.name]);
    },
    onError: () => {
      toast.success(formatMessage(isOrganizationCreated ? messages.updateError : messages.createError));
    },
  });

  const submit: SubmitHandler<InferType<ReturnType<typeof schema>>> = useCallback(
    data => {
      if (!user) {
        return;
      }

      const type = user.involvements[0].type;
      const contacts = Object.entries(data.contacts).map(([type, info]) => ({
        ...info,
        type,
        value: info.value ?? '',
        accessMode: info.accessMode ? AccessModes.PUBLIC : AccessModes.READ_ONLY_ME,
      }));

      const payload: OrganizationData = {
        type,
        name: data.name,
        address: data.address,
        settlementId: data.settlement.id,
        contacts,
      };

      if (isOrganizationCreated) {
        payload.id = organization?.roleInfo.id;
      }

      organizationMutate(payload);
    },
    [isOrganizationCreated, organization?.roleInfo.id, organizationMutate, user],
  );

  return {
    control,
    errors,
    submit,
    handleSubmit,
    reset,
    roleInfo: organization?.roleInfo,
    isLoading,
    isLoadingSaveData,
    register,
  };
};
