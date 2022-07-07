import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderTitleWrapper = styled.div`
  width: 700px;
  margin-left: auto;
`;

export const HeaderSubtitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const SignUpButton = styled.button`
  width: 250px;
  background: transparent;
  border-color: ${({ color }) => color};
  border-width: 2px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
`;

export const ExitEnterButton = styled.button`
  background: transparent;
  border: none;
  color: ${({ theme, color }) => (color ? color : theme.palette.text.primary)};
  font-family: 'Inter';
  font-size: 20px;
  line-height: 1.2;
  font-weight: 900;
  letter-spacing: normal;
`;
