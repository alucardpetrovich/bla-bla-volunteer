import { intersectionBy } from 'lodash';
import { useCallback, useState } from 'react';
import { defineMessage } from 'react-intl';

import { useUserSettings } from '../../../common/hooks/useUserSettings';
import { Involvement } from '../../../common/services/api/auth';
import { useInvolvementsTypeQuery } from './useInvolvementsTypeQuery';

const roles = [
  {
    title: defineMessage({ defaultMessage: 'Донор', description: 'Role: title' }),
    description: defineMessage({
      defaultMessage:
        'Особа або група осіб, організації, рухи тощо, які здійснюють' +
        ' передачу матеріальних засобів на безоплатній основі',
      description: 'Role: description',
    }),
    id: Involvement.donor,
  },
  {
    title: defineMessage({ defaultMessage: 'Волонтерський ха', description: 'Role: title' }),
    description: defineMessage({
      defaultMessage:
        'Тимчасове місце зберігання гуманітарної допомоги. Зосередження допомоги у волонтерських хабах ситуативне та тимчасове.',
      description: 'Role: description',
    }),
    id: Involvement.volunteer_hub,
  },
  {
    title: defineMessage({ defaultMessage: 'Хаб', description: 'Role: title' }),
    description: defineMessage({
      defaultMessage:
        'Неурядова установа, яка реєструється з метою накопичення матеріальних засобів, їх обліку та подальшої передачі. Має на меті створення місця зосередження допомоги.',
      description: 'Role: description',
    }),
    id: Involvement.hub,
  },
  {
    title: defineMessage({ defaultMessage: 'Мобільний волонтер', description: 'Role: title' }),
    description: defineMessage({
      defaultMessage:
        'Особа, яка виявила бажання здійснити доставку матеріальних засобів від місця їх тимчасового складування (хаб/волонтерський хаб) до отримувачів.',
      description: 'Role: description',
    }),
    id: Involvement.mobile_hub,
  },
  {
    title: defineMessage({ defaultMessage: 'Отримувач', description: 'Role: title' }),
    description: defineMessage({
      defaultMessage:
        'Територіальна громада, організація та установа, що потребує гуманітраної допомоги для забезпечення осіб, постраждалих внаслідок військових дій.',
      description: 'Role: description',
    }),
    id: Involvement.recipient,
  },
];

export const useRoles = () => {
  const { data, isLoading } = useInvolvementsTypeQuery();
  const [selectedId, setSelectedId] = useState<Involvement>();
  const { isLoading: isLoadingUpdateUserSettings, updateUserSettings } = useUserSettings();

  const handleUpdateUserSettings = useCallback(() => {
    if (!selectedId) {
      return;
    }
    updateUserSettings({ involvements: [selectedId] });
  }, [selectedId, updateUserSettings]);

  const list = intersectionBy(roles, data ?? [], item => item.id);

  return { isLoading, handleUpdateUserSettings, list, setSelectedId, isLoadingUpdateUserSettings, selectedId };
};
