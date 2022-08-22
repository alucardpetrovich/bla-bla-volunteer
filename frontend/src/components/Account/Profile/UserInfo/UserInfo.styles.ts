import styled from 'styled-components';

export const Wrapper = styled.form``;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: start;
  gap: ${p => p.theme.spacing(4)};
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 510px;
`;

export const Label = styled.p`
  ${p => p.theme.font('body3')};
  color: ${p => p.theme.palette.grey['500']};
  margin-bottom: ${p => p.theme.spacing(2.5)};
`;

export const Text = styled.p`
  ${p => p.theme.font('body8')};
  color: ${p => p.theme.palette.common.black};
  margin-bottom: ${p => p.theme.spacing(4)};
`;
