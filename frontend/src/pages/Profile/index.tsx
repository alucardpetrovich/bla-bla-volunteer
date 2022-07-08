import { useState } from 'react';
import { useSelector } from 'react-redux';
import Button from 'src/components/Buttons/Button';
import TextBox from 'src/components/TextBox/TextBox';
import { useAppDispatch } from 'src/hooks';
import { createUserOrganization } from 'src/store/user/userOperations';
import { useTheme } from 'styled-components';

import RoleCard from '../../components/atoms/RoleCard';
import { Heading } from '../../components/StyledComponents';
import { roles } from '../../constants/roles';
import { getUser } from '../../store/user/userSelectors';
import { InfoWrapper, RoleListWrapper, RoleWrapper } from './style';

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

const Profile: React.FC = () => {
  const user = useSelector(getUser);
  const involvements = user?.involvements;

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

  const theme = useTheme();
  const mainColor = theme.palette.primary.main;
  const hoverColor = theme.palette.common.black;

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
    <>
      {involvements && (
        <>
          <Heading tag="h3" style={{ marginBottom: '40px' }}>
            Ваша роль
          </Heading>
          {involvements.length === 0 && (
            <RoleListWrapper>
              {roles.map(role => (
                <RoleWrapper key={role.title} color={mainColor} hover={hoverColor}>
                  <RoleCard id={role.id} title={role.title} textAlign="left">
                    {role.desc}
                  </RoleCard>
                </RoleWrapper>
              ))}
            </RoleListWrapper>
          )}
          <InfoWrapper>
            <TextBox label="Назва хабу" name="name" value={name} onChange={handleOrganizationValuesOnChange} />
            <TextBox
              label="Назва населеного пункту"
              name="city"
              value={city}
              onChange={handleOrganizationValuesOnChange}
            />
            <TextBox label="Адреса" name="street" value={street} onChange={handleOrganizationValuesOnChange} />
            <TextBox
              label="Контакти хабу"
              name="contacts"
              value={contacts[0].value}
              onChange={handleOrganizationValuesOnChange}
            />
            <TextBox label="Telegram" name="telegram" value={telegram} onChange={handleOrganizationValuesOnChange} />
            <Button text="Додати інформацію" onClick={handleSubmit} />
            <Button isDisabled={true} text="Скасувати" onClick={handleSubmit} />
          </InfoWrapper>
        </>
      )}
    </>
  );
};

export default Profile;
