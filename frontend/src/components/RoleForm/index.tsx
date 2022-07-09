import { useState } from 'react';
import { useIntl } from 'react-intl';
import { useAppDispatch } from 'src/hooks';
import { createUserOrganization } from 'src/store/user/userOperations';

import Button from '../Buttons/Button';
import TextBox from '../TextBox/TextBox';
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

const RoleForm = () => {
  const { formatMessage } = useIntl();
  const dispatch = useAppDispatch();

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

  const { name, city, street, contacts, telegram } = organizationFormValues;

  const handleOrganizationValuesOnChange = (value: string, name: string): void => {
    if (name === 'contacts') {
      const newContact = {
        accessMode: '',
        type: '',
        value: value,
      };
      //!!! check adding second contact
      setOrganizationFormValues({ ...organizationFormValues, contacts: [newContact] });
    } else {
      setOrganizationFormValues({ ...organizationFormValues, [name]: value });
    }
  };

  const handleSubmit = (): void => {
    const credentials: OrganizationProps = {
      name,
      city,
      street,
      contacts,
      telegram,
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
      <TextBox
        label={formatMessage({
          defaultMessage: 'Назва населеного пункту',
          description: 'ProfileForm: city',
        })}
        name="city"
        value={city}
        onChange={handleOrganizationValuesOnChange}
      />
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
        name="contacts"
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
