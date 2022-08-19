import styled from 'styled-components';

export const ResetPasswordWrapper = styled.div`
  width: 100%;
  max-width: 320px;
`;
export const ResetPasswordContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ResetPasswordText = styled.p`
  ${p => p.theme.font('body3')};
  color: ${p => p.theme.palette.primary.main};
  margin-bottom: ${p => p.theme.spacing(4)};
`;
