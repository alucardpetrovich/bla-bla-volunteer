import { Link } from 'src/components/common/components/Link/Link';
import styled from 'styled-components';

export const VerificationStatus = styled.h3`
  ${p => p.theme.font('h2')};
  margin-bottom: ${p => p.theme.spacing(4.75)};
`;

export const StyledLink = styled(Link)`
  display: inline-block;

  ${p => p.theme.font('body2')};

  color: ${p => p.theme.palette.common.white};
  background-color: ${p => p.theme.palette.primary.main};

  padding-left: ${p => p.theme.spacing(5)};
  padding-right: ${p => p.theme.spacing(5)};
  padding-top: ${p => p.theme.spacing(1.5)};
  padding-bottom: ${p => p.theme.spacing(1.5)};
  border-radius: 5px;
`;
