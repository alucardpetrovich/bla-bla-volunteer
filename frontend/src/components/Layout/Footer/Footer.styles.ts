import styled from 'styled-components';

export const Wrapper = styled.footer`
  padding: ${p => p.theme.spacing(11, 10, 12.5)};
`;

export const NavigationBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: ${p => p.theme.spacing(4)};
  border-bottom: 1px solid ${p => p.theme.palette.primary.main};
  margin-bottom: ${p => p.theme.spacing(5)};
`;

export const Name = styled.p`
  ${p => p.theme.font('text1')}
`;

export const SocialLinksBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CopyRight = styled.p`
  ${p => p.theme.font('body5')};
  color: ${p => p.theme.palette.primary.main};
`;

export const SocialLinks = styled.ul`
  display: flex;
  align-items: center;
  gap: 24px;
`;

export const SocialItem = styled.li``;

export const SocialLink = styled.a`
  display: block;
  width: 24px;
  height: 24px;
`;
