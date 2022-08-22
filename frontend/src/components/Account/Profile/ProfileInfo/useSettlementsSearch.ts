import { useMutation } from '@tanstack/react-query';
import { debounce } from 'lodash';
import { SyntheticEvent, useState } from 'react';

import { Settlement, settlementsSearch } from './api/settlements';

export const useSettlementsSearch = () => {
  const [options, setOptions] = useState<Settlement[]>([]);

  const { mutate, isLoading, isError } = useMutation(settlementsSearch, {
    onSuccess: response => {
      setOptions(response.settlements);
    },
  });

  const search = debounce(async (event: SyntheticEvent<Element, Event>, value: string) => {
    if (value?.length <= 2 || !value) {
      return;
    }
    return mutate({ search: value });
  }, 500);

  return {
    search,
    isLoading,
    isError,
    options,
  };
};
