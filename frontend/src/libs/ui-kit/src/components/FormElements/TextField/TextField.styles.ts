import { red } from '@mui/material/colors';
import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  margin-bottom: ${p => p.theme.spacing(3)};
`;

export const Label = styled.p<{ error?: boolean }>`
  ${p => p.theme.font('body3')};
  color: ${p => p.theme.palette.grey['500']};
  margin-bottom: ${p => p.theme.spacing(0.5)};
  ${p => p.error && `color: ${red['700']}`}
`;

export const Error = styled.p`
  position: absolute;
  left: 0;
  top: 105%;
  ${p => p.theme.font('body6')};
  color: ${red['700']};
`;
