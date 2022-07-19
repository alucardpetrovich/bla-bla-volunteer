import { useEffect, useState } from 'react';
import { useIntl } from 'react-intl';
// import { contactsAPI } from 'src/api';
import { useAppDispatch, useAppSelector } from 'src/hooks';
import { getLang } from 'src/store/lang/langSelectors';
import { createUserOrganization } from 'src/store/user/userOperations';
// import { getLang } from 'src/store/lang/langSelectors';
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
  // telegram: string;
}

interface OrganizationReqProps {
  name: string;
  type: string | undefined;
  address: string;
  settlementId: string;
  contacts: IContact[];
}

// interface IContactType {
//   type: string;
//   name: string;
// }

const RoleForm = () => {
  const initialOrganizationState = {
    name: '',
    city: '',
    street: '',
    contacts: [],
  };
  const { formatMessage } = useIntl();
  const dispatch = useAppDispatch();

  const [organizationFormValues, setOrganizationFormValues] = useState<OrganizationProps>(initialOrganizationState);
  const [settlementId, setSettlementId] = useState('');
  const [isFormFilled, setIsFormFilled] = useState(false);
  // const [contactsTypes, setContactsTypes] = useState<IContactType[]>([]);
  // const [loading, setLoading] = useState(false);

  const { name, street, contacts, city } = organizationFormValues;
  const userType = useAppSelector(getUserInvolvement);
  const lang = useAppSelector(getLang);

  // useEffect(() => {
  //   (async () => {
  //     const result = await contactsAPI.getContactTypes(lang);
  //     setContactsTypes(result);
  //     setLoading(true);
  //     return result;
  //   })();
  // }, [loading]);

  useEffect(() => {
    if (name.length > 0 && street.length > 0 && contacts.length > 0) {
      setIsFormFilled(true);
    }
  }, [name, street, contacts, city, isFormFilled]);

  const handleOrganizationValuesOnChange = (value: string, name: string): void => {
    if (name === ('phone' || 'telegram')) {
      const newContact = {
        accessMode: 'public',
        type: name,
        value: value,
      };
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

    dispatch(createUserOrganization(credentials, lang));
  };

  const handleCancel = (): void => {
    setOrganizationFormValues(initialOrganizationState);
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
        required
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
        required
        label={formatMessage({
          defaultMessage: 'Адреса',
          description: 'ProfileForm: address',
        })}
        name="street"
        value={street}
        onChange={handleOrganizationValuesOnChange}
      />
      <TextBox
        required
        placeholder="+38(099)999-99-99"
        label={formatMessage({
          defaultMessage: 'Контакти хабу',
          description: 'ProfileForm: hubContacts',
        })}
        name="phone"
        value={(contacts && contacts[0]?.value) || ''}
        onChange={handleOrganizationValuesOnChange}
      />
      {/* !!! add another contact !!!*/}

      {/* <TextBox label="Telegram" name="telegram" value="test telegram" onChange={handleOrganizationValuesOnChange} /> */}
      <Button
        text={formatMessage({ defaultMessage: 'Додати інформацію', description: 'ProfileForm: addInfo' })}
        onClick={handleSubmit}
      />
      <Button
        isDisabled={!isFormFilled}
        text={formatMessage({ defaultMessage: 'Скасувати', description: 'ProfileForm: cancel' })}
        onClick={handleCancel}
      />
    </InfoWrapper>
  );
};

export default RoleForm;
