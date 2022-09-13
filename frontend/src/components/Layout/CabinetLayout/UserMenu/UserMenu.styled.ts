import { Link } from 'src/components/common/components/Link/Link';
import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: ${p => p.theme.palette.primary.main};
  height: 100%;
  width: 250px;
  position: absolute;
  top: 0;
  left: 0;
  padding-top: ${p => p.theme.spacing(9)};
`;

export const StyledLink = styled(Link)`
  ${p => p.theme.font('body3')}
  color: ${p => p.theme.palette.common.black};
  display: flex;
  align-items: center;
`;

export const IconBox = styled.div`
  width: ${p => p.theme.spacing(8)};
  background-color: ${p => p.theme.palette.common.white};
  padding: ${p => p.theme.spacing(1, 0, 1, 4)};
  margin-right: ${p => p.theme.spacing(2)};
`;

export const LinksList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.spacing(2)};
  flex: 1 0 auto;
`;

export const Permalinks = styled(LinksList)`
  margin-top: auto;
  flex: 0 0 auto;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding-bottom: ${p => p.theme.spacing(10)};
`;
