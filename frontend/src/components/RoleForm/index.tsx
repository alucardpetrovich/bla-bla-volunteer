import { useEffect, useState } from 'react';
import { useIntl } from 'react-intl';
import { contactsAPI } from 'src/api';
import { useAppDispatch, useAppSelector } from 'src/hooks';
import { getLang } from 'src/store/lang/langSelectors';
import { createUserOrganization } from 'src/store/user/userOperations';
import { getUserInvolvement } from 'src/store/user/userSelectors';

import Button from '../Buttons/Button';
import TextBox from '../TextBox/TextBox';
import Autocomplete from './components/Autocomplete';
import { CustomHeading, InfoWrapper } from './style';

interface IContact {
  accessMode: string;
  type: string;
  value: string;
}

interface OrganizationProps {
  name: string;
  city: string;
  street: string;
  contacts: IContact[];
  telegram: string;
}

interface OrganizationReqProps {
  name: string;
  type: string | undefined;
  address: string;
  settlementId: string;
  contacts: IContact[];
}

interface IContactType {
  type: string;
  name: string;
}

const RoleForm = () => {
  const { formatMessage } = useIntl();
  const dispatch = useAppDispatch();

  const [loading, setLoading] = useState(false);
  const [settlementId, setSettlementId] = useState('');
  const [contactsTypes, setContactsTypes] = useState<IContactType[]>([]);
  const [organizationFormValues, setOrganizationFormValues] = useState<OrganizationProps>({
    name: '',
    city: '',
    street: '',
    contacts: [
      {
        accessMode: '',
        type: '',
        value: '',
      },
    ],
    telegram: '',
  });

  const { name, street, contacts, telegram } = organizationFormValues;
  const userType = useAppSelector(getUserInvolvement);
  const lang = useAppSelector(getLang);

  useEffect(() => {
    (async () => {
      const result = await contactsAPI.getContactTypes(lang);
      setContactsTypes(result);
      console.log('contactsTypes', contactsTypes);
      setLoading(true);
      return result;
    })();
  }, [loading]);

  const handleOrganizationValuesOnChange = (value: string, name: string): void => {
    if (name === ('phone' || 'telegram')) {
      const newContact = {
        accessMode: 'public',
        type: name,
        value: value,
      };
      //!!! check adding second contact
      setOrganizationFormValues({ ...organizationFormValues, contacts: [newContact] });
    } else {
      setOrganizationFormValues({ ...organizationFormValues, [name]: value });
    }
  };

  const handleSubmit = (): void => {
    const credentials: OrganizationReqProps = {
      name,
      type: userType,
      address: street,
      contacts,
      settlementId,
    };

    try {
      console.log('credentials', credentials);
      dispatch(createUserOrganization(credentials));
    } catch (error) {
      console.log('error', error);
    }
  };

  return (
    <InfoWrapper>
      <CustomHeading tag="h3">
        {formatMessage({
          defaultMessage: 'Додати інформацію про Хаб',
          description: 'ProfileForm: addInfo',
        })}
      </CustomHeading>
      <TextBox
        label={formatMessage({
          defaultMessage: 'Назва хабу',
          description: 'ProfileForm: hubName',
        })}
        name="name"
        value={name}
        onChange={handleOrganizationValuesOnChange}
      />
      {/* <TextBox
        label={formatMessage({
          defaultMessage: 'Назва населеного пункту',
          description: 'ProfileForm: city',
        })}
        autoComplete="on"
        name="city"
        value={city}
        onChange={handleOrganizationValuesOnChange}
      /> */}

      <Autocomplete setData={setSettlementId} />
      <TextBox
        label={formatMessage({
          defaultMessage: 'Адреса',
          description: 'ProfileForm: address',
        })}
        name="street"
        value={street}
        onChange={handleOrganizationValuesOnChange}
      />
      <TextBox
        label={formatMessage({
          defaultMessage: 'Контакти хабу',
          description: 'ProfileForm: hubContacts',
        })}
        name="phone"
        value={contacts[0].value}
        onChange={handleOrganizationValuesOnChange}
      />
      <TextBox label="Telegram" name="telegram" value={telegram} onChange={handleOrganizationValuesOnChange} />
      <Button
        text={formatMessage({ defaultMessage: 'Додати інформацію', description: 'ProfileForm: addInfo' })}
        onClick={handleSubmit}
      />
      <Button
        isDisabled={true}
        text={formatMessage({ defaultMessage: 'Скасувати', description: 'ProfileForm: cancel' })}
        onClick={handleSubmit}
      />
    </InfoWrapper>
  );
};

export default RoleForm;
