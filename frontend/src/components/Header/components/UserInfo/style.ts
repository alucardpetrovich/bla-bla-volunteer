import styled from 'styled-components';

export const ContainerMain = styled.div`
  display: flex;
  align-items: center;
`;

export const UserPhoto = styled.img`
  display: block;
  width: 40px;
  height: 40px;
  margin-right: ${p => p.theme.spacing(2)};
  border-radius: 50%;
`;

export const UserName = styled.p`
  ${p => p.theme.font('body8')};
  color: ${p => p.theme.palette.common.black};
`;

export const UserRole = styled.p`
  ${p => p.theme.font('body9')};
  color: ${p => p.theme.palette.grey[500]};
`;
