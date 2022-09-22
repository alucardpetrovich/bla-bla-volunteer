import styled from 'styled-components';

export const UserPhotoStyled = styled.div`
  width: ${p => p.theme.spacing(5)};
  height: ${p => p.theme.spacing(5)};
  border: 1px solid ${p => p.theme.palette.primary.main};
  border-radius: 50%;
  overflow: hidden;

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }
`;

export const UserInfoStyled = styled.div`
  margin-right: 200px;
  margin-left: ${p => p.theme.spacing(2)};
`;

export const UserNameStyled = styled.p`
  ${p => p.theme.font('body1')}
`;

export const UserRoleStyled = styled.p`
  ${p => p.theme.font('body2')}
  color: ${p => p.theme.palette.primary.main};
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;
