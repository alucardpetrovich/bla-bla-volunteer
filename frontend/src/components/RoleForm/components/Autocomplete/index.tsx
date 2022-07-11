import { Autocomplete, TextField } from '@mui/material';
import { debounce } from 'lodash';
import { SyntheticEvent, useEffect, useRef, useState } from 'react';
import { settlementsAPI } from 'src/api';
import { useAppSelector } from 'src/hooks';
import { getLang } from 'src/store/lang/langSelectors';

import InputWrapper from '../../../InputWrapper/InputWrapper';

type AutocompleteCusProps = {
  setData?: (data: string) => void;
};

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

const AutocompleteCus = ({ setData }: AutocompleteCusProps) => {
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

  const onSelectCity = (string: string) => {
    if (string) {
      const uuid = string.slice(-37, -1);
      // FIXME: пофіксить тайпінги
      // eslint-disable-next-line
      // @ts-ignore
      setData(uuid);
    }
  };

  return (
    <InputWrapper name="name" label="Назва населеного пункту">
      <Autocomplete
        freeSolo
        autoSelect
        id="cityList"
        defaultValue="Оберіть місто"
        options={citiesList.map(city => {
          return `${city.name} (${city.region}, ${city.district} ${city.id})`;
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
        // FIXME: пофіксить тайпінги
        // eslint-disable-next-line
        // @ts-ignore
        onChange={(e, value) => onSelectCity(value)}
      />
    </InputWrapper>
  );
};

export default AutocompleteCus;
