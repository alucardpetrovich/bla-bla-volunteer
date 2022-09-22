import React, { FC } from 'react';

import { useUserConfig, useUserMenuLinks } from '../useUserConfig';
import { Box, IconBox, LinksList, Permalinks, StyledLink, Wrapper } from './UserMenu.styled';

const UserMenu: FC = () => {
  const userConfig = useUserConfig();
  const { Links, permalinks } = useUserMenuLinks();

  return (
    <Wrapper>
      <Box>
        {userConfig && (
          <LinksList>
            {userConfig?.menuLinks.map(item => {
              if (Links[item]) {
                return (
                  <li key={Links[item].title}>
                    <StyledLink to={Links[item].to}>
                      <IconBox>{Links[item].img}</IconBox>
                      {Links[item].title}
                    </StyledLink>
                  </li>
                );
              }
              return null;
            })}
          </LinksList>
        )}

        <Permalinks>
          {permalinks.map(item => {
            if (Links[item]) {
              return (
                <li key={Links[item].title}>
                  <StyledLink to={Links[item].to}>
                    <IconBox>{Links[item].img}</IconBox>
                    {Links[item].title}
                  </StyledLink>
                </li>
              );
            }
            return null;
          })}
        </Permalinks>
      </Box>
    </Wrapper>
  );
};

export default UserMenu;
