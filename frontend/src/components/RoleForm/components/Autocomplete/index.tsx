import { Autocomplete, TextField } from '@mui/material';
import { debounce } from 'lodash';
import { SyntheticEvent, useEffect, useRef, useState } from 'react';
import { settlementsAPI } from 'src/api';
import { useAppSelector } from 'src/hooks';
import { getLang } from 'src/store/lang/langSelectors';

import InputWrapper from '../../../InputWrapper/InputWrapper';

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

const AutocompleteCus = () => {
  const lang = useAppSelector(getLang);
  const [citiesList, setCitiesList] = useState<ICity[]>([]);

  const onInputChange = useRef(
    debounce(async (event: SyntheticEvent, value: string) => {
      if (!value) return;

      if (value.length > 1) {
        const result = await settlementsAPI.settlementsSearch(value, 1, lang);
        setCitiesList(result);
      }
    }, 500),
  ).current;

  useEffect(() => {
    return () => {
      onInputChange.cancel();
      setCitiesList([]);
    };
  }, [onInputChange]);

  return (
    <InputWrapper name="name" label="Назва населеного пункту">
      <Autocomplete
        freeSolo
        id="cityList"
        options={citiesList.map(city => {
          return `${city.name} (${city.region}, ${city.district})`;
        })}
        renderOption={(props, option) => {
          return (
            <li {...props} key={props.id}>
              {option}
            </li>
          );
        }}
        onInputChange={onInputChange}
        renderInput={params => {
          return <TextField {...params} type="text" />;
        }}
      />
    </InputWrapper>
  );
};

export default AutocompleteCus;
