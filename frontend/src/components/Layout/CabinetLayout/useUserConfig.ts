import { useIntl } from 'react-intl';
import { useCurrentUser } from 'src/components/common/hooks/useCurrentUser';
import { Involvement } from 'src/components/common/services/api/auth';

export enum UserLinks {
  messages = 'messages',
  projects = 'projects',
  activity = 'activity',
  statistic = 'statistic',
  routes = 'routes',
  settings = 'settings',
  profile = 'profile',
}

export const useUserConfig = () => {
  const { formatMessage } = useIntl();

  const data = useCurrentUser();
  const role = data?.involvements[0].type;
  const nickname = data?.nickname;

  const UserConfig = {
    [Involvement.donor]: {
      role: `${formatMessage({
        defaultMessage: 'Донор',
        description: 'UserConfig: donor role',
      })}`,
      menuLinks: [UserLinks.projects, UserLinks.messages, UserLinks.activity, UserLinks.statistic],
    },
    [Involvement.volunteer_hub]: {
      role: `${formatMessage({
        defaultMessage: 'Волонтерський Хаб',
        description: 'UserConfig: volunteer_hub role',
      })}`,
      menuLinks: [UserLinks.projects, UserLinks.messages, UserLinks.activity, UserLinks.statistic],
    },
    [Involvement.hub]: {
      role: `${formatMessage({
        defaultMessage: 'Хаб',
        description: 'UserConfig: hub role',
      })}`,
      menuLinks: [UserLinks.projects, UserLinks.messages, UserLinks.activity, UserLinks.statistic],
    },
    [Involvement.mobile_hub]: {
      role: `${formatMessage({
        defaultMessage: 'Мобільний волонтер',
        description: 'UserConfig: mobile_hub role',
      })}`,
      menuLinks: [UserLinks.routes, UserLinks.messages, UserLinks.activity, UserLinks.statistic],
    },
    [Involvement.recipient]: {
      role: `${formatMessage({
        defaultMessage: 'Отримувач',
        description: 'UserConfig: mobile_hub role',
      })}`,
      menuLinks: [UserLinks.projects, UserLinks.messages, UserLinks.activity, UserLinks.statistic],
    },
  };

  if (role) {
    return { ...UserConfig[role], nickname };
  }

  return null;
};
