import styled from 'styled-components';

type TextProps = {
  color?: string;
  children?: any;
};

const Text = (props: TextProps) => {
  const Component = styled.p`
    font-size: 20px;
    font-weight: 400;
    color: ${props.color ? props.color : 'var(--new-moon-D3)'};
    text-align: justify;
  `;

  return <Component>{props.children}</Component>;
};

export default Text;
