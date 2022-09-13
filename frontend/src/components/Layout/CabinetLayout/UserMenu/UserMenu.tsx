import React, { FC } from 'react';
import { useIntl } from 'react-intl';
import { PATHS } from 'src/components/common/constants/PATH';

import { ReactComponent as ActivityIcon } from '../assets/activity.svg';
import { ReactComponent as RoutesIcon } from '../assets/map.svg';
import { ReactComponent as MessageIcon } from '../assets/message.svg';
import { ReactComponent as ProfileIcon } from '../assets/profile.svg';
import { ReactComponent as ProjectsIcon } from '../assets/projects.svg';
import { ReactComponent as SettingsIcon } from '../assets/settings.svg';
import { ReactComponent as StatisticIcon } from '../assets/statistic.svg';
import { UserLinks, useUserConfig } from '../useUserConfig';
import { Box, IconBox, LinksList, Permalinks, StyledLink, Wrapper } from './UserMenu.styled';

const UserMenu: FC = () => {
  const data = useUserConfig();
  const { formatMessage } = useIntl();

  const Links = {
    [UserLinks.routes]: {
      title: `${formatMessage({
        defaultMessage: 'маршрути',
        description: 'UserConfig: rotes link',
      })}`,
      to: '#',
      img: <RoutesIcon />,
    },
    [UserLinks.activity]: {
      title: `${formatMessage({
        defaultMessage: 'активність',
        description: 'UserConfig: activity link',
      })}`,
      to: '#',
      img: <ActivityIcon />,
    },
    [UserLinks.messages]: {
      title: `${formatMessage({
        defaultMessage: 'повідомлення',
        description: 'UserConfig: message link',
      })}`,
      to: '#',
      img: <MessageIcon />,
    },
    [UserLinks.projects]: {
      title: `${formatMessage({
        defaultMessage: 'проекти',
        description: 'UserConfig: projects link',
      })}`,
      to: '#',
      img: <ProjectsIcon />,
    },
    [UserLinks.statistic]: {
      title: `${formatMessage({
        defaultMessage: 'статистика',
        description: 'UserConfig: statistic link',
      })}`,
      to: '#',
      img: <StatisticIcon />,
    },
    [UserLinks.profile]: {
      title: `${formatMessage({
        defaultMessage: 'особистий кабінет',
        description: 'UserConfig: profile link',
      })}`,
      to: PATHS.PROFILE,
      img: <ProfileIcon />,
    },
    [UserLinks.settings]: {
      title: `${formatMessage({
        defaultMessage: 'налаштування',
        description: 'UserConfig: settings link',
      })}`,
      to: '#',
      img: <SettingsIcon />,
    },
  };

  const permalinks = [UserLinks.profile, UserLinks.settings];

  return (
    <Wrapper>
      <Box>
        <LinksList>
          {data?.menuLinks.map(item => {
            return (
              <li key={Links[item].title}>
                <StyledLink to={Links[item].to}>
                  <IconBox>{Links[item].img}</IconBox>
                  {Links[item].title}
                </StyledLink>
              </li>
            );
          })}
        </LinksList>
        <Permalinks>
          {permalinks.map(item => {
            return (
              <li key={Links[item].title}>
                <StyledLink to={Links[item].to}>
                  <IconBox>{Links[item].img}</IconBox>
                  {Links[item].title}
                </StyledLink>
              </li>
            );
          })}
        </Permalinks>
      </Box>
    </Wrapper>
  );
};

export default UserMenu;
