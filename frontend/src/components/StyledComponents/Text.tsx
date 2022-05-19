import styled from 'styled-components';

interface IText {
  color?: string;
  children?: any;
}

const Component = styled.p`
  font-size: 20px;
  font-weight: 400;
  color: ${({ color }) => color || 'var(--new-moon-D3)'};
  text-align: justify;
`;

const Text: React.FC<IText> = ({ children, color }) => {
  return <Component color={color}>{children}</Component>;
};

export default Text;
