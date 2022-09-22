import { useIntl } from 'react-intl';
import { PATHS } from 'src/components/common/constants/PATH';
import { useCurrentUser } from 'src/components/common/hooks/useCurrentUser';
import { Involvement } from 'src/components/common/services/api/auth';

import { ReactComponent as ActivityIcon } from './assets/activity.svg';
import { ReactComponent as RoutesIcon } from './assets/map.svg';
import { ReactComponent as MessageIcon } from './assets/message.svg';
import { ReactComponent as ProfileIcon } from './assets/profile.svg';
import { ReactComponent as ProjectsIcon } from './assets/projects.svg';
import { ReactComponent as SettingsIcon } from './assets/settings.svg';
import { ReactComponent as StatisticIcon } from './assets/statistic.svg';

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

  if (role && role in UserConfig) {
    return { ...UserConfig[role], nickname };
  }

  return null;
};

export const useUserMenuLinks = () => {
  const { formatMessage } = useIntl();

  const Links = {
    [UserLinks.routes]: {
      title: formatMessage({
        defaultMessage: 'маршрути',
        description: 'UserConfig: rotes link',
      }),
      to: '#',
      img: <RoutesIcon />,
    },
    [UserLinks.activity]: {
      title: formatMessage({
        defaultMessage: 'активність',
        description: 'UserConfig: activity link',
      }),
      to: '#',
      img: <ActivityIcon />,
    },
    [UserLinks.messages]: {
      title: formatMessage({
        defaultMessage: 'повідомлення',
        description: 'UserConfig: message link',
      }),
      to: '#',
      img: <MessageIcon />,
    },
    [UserLinks.projects]: {
      title: formatMessage({
        defaultMessage: 'проекти',
        description: 'UserConfig: projects link',
      }),
      to: '#',
      img: <ProjectsIcon />,
    },
    [UserLinks.statistic]: {
      title: formatMessage({
        defaultMessage: 'статистика',
        description: 'UserConfig: statistic link',
      }),
      to: '#',
      img: <StatisticIcon />,
    },
    [UserLinks.profile]: {
      title: formatMessage({
        defaultMessage: 'особистий кабінет',
        description: 'UserConfig: profile link',
      }),
      to: PATHS.PROFILE,
      img: <ProfileIcon />,
    },
    [UserLinks.settings]: {
      title: formatMessage({
        defaultMessage: 'налаштування',
        description: 'UserConfig: settings link',
      }),
      to: '#',
      img: <SettingsIcon />,
    },
  };

  const permalinks = [UserLinks.profile, UserLinks.settings];

  return { permalinks, Links };
};
