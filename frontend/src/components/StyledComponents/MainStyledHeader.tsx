import styled from 'styled-components';

type MainStyledHeaderProps = {
  color?: string;
  isSelected?: boolean;
  onClick?: Function;
  children: any;
};

const MainStyledHeader = (props: MainStyledHeaderProps) => {
  const Component = styled.h2`
    font-size: 40px;
    font-weight: 600;
    padding: 20px 0px;
    color: ${props.color ? props.color : 'var(--fourth-yellow)'};
    cursor: ${props.isSelected ? 'pointer' : 'default'};
  `;

  return <Component onClick={() => props.onClick}>{props.children}</Component>;
};

export default MainStyledHeader;
