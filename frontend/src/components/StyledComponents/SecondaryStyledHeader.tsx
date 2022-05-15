import styled from 'styled-components';

type SecondaryStyledHeaderProps = {
  color?: string;
  isSelected?: boolean;
  onClick?: Function;
  children: any;
};

const SecondaryStyledHeader = (props: SecondaryStyledHeaderProps) => {
  const Component = styled.h3`
    font-size: 30px;
    font-weight: 600;
    padding: 10px 0px;
    color: ${props.color ? props.color : 'var(--third-yellow)'};
    cursor: ${props.isSelected ? 'pointer' : 'default'};
  `;

  return <Component onClick={() => props.onClick}>{props.children}</Component>;
};

export default SecondaryStyledHeader;
