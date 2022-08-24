import { Link } from 'src/components/common/components/Link/Link';
import styled from 'styled-components';

export const VerificationStatus = styled.h2`
  ${p => p.theme.font('h2')};
  margin-bottom: ${p => p.theme.spacing(4.5)};
`;

export const StyledLink = styled(Link)`
  display: inline-block;

  ${p => p.theme.font('body2')};

  color: ${p => p.theme.palette.common.white};
  background-color: ${p => p.theme.palette.primary.main};

  padding: ${p => p.theme.spacing(1.5, 5)};
  border-radius: 5px;
`;
