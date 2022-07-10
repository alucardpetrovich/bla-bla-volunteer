import { Autocomplete, TextField } from '@mui/material';
import { SyntheticEvent, useState } from 'react';
import { useIntl } from 'react-intl';
import { settlementsAPI } from 'src/api';
import { useAppDispatch, useAppSelector } from 'src/hooks';
import { getLang } from 'src/store/lang/langSelectors';
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

interface ILocation {
  lon: number;
  lat: number;
}

interface ICity {
  centerLocation: ILocation;
  countryCode: string;
  district: string;
  id: string;
  name: string;
  region: string;
  type: string;
}

const RoleForm = () => {
  const { formatMessage } = useIntl();
  const dispatch = useAppDispatch();
  const lang = useAppSelector(getLang);

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

  const [citiesList, setCitiesList] = useState<ICity[]>([]);
  const [citySearch, setCitySearch] = useState('');

  const onHandleSearch = async (event: SyntheticEvent, value: string) => {
    const result = await settlementsAPI.settlementsSearch(value, 1, lang);
    setCitiesList(result);
  };

  const onInputChange = (event: SyntheticEvent, value: string) => {
    setCitySearch(value);
    if (citySearch.length <= 2) return;

    setTimeout(async () => {
      if (citySearch.length >= 3) {
        const result = await settlementsAPI.settlementsSearch(citySearch, 1, lang);
        console.log('result', result);
        setCitiesList(result);
      }
    }, 1000);
  };

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

      {/* !!!  Autocomplete in progress */}

      <Autocomplete
        freeSolo
        id="cityList"
        disableClearable
        options={citiesList.map(city => city.name)}
        // FIXME: пофіксить тайпінги
        // eslint-disable-next-line
        // @ts-ignore
        onChange={onHandleSearch}
        onInputChange={onInputChange}
        // renderInput={params => (
        //   <TextField
        //     {...params}
        //     sx={{ m: 1, width: '36ch', bgcolor: '#fff' }}
        //     size="small"
        //     label="Місто"
        //     InputProps={{
        //       ...params.InputProps,
        //       type: 'search',
        //     }}
        //   />
        // )}
        renderInput={params => {
          console.log('params', params);
          return <TextField {...params} label="Місто" />;
        }}
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
