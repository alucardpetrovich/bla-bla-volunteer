import { Button } from '@mui/material';
import styled from 'styled-components';

export const VerificationTitle = styled.h3`
  ${p => p.theme.font('h3')};
  margin-bottom: ${p => p.theme.spacing(2.5)};
`;

export const VerificationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const VerificationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const VerificationText = styled.p`
  color: ${p => p.theme.palette.primary.main};

  margin-bottom: ${p => p.theme.spacing(4.5)};
`;

export const ResendButton = styled(Button)`
  margin-bottom: ${p => p.theme.spacing(2)};
`;

export const NavigateButton = styled(Button)`
  min-width: ${p => p.theme.spacing(11.5)};
  border: none;
`;
