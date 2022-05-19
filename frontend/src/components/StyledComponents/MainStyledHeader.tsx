import styled from 'styled-components';

interface IMainStyledHeaderProps {
  color?: string;
  onClick?: Function;
  children: any;
}

const Component = styled.h2`
  font-size: 40px;
  font-weight: 600;
  padding: 20px 0px;
  color: ${({ color }) => color || 'var(--fourth-yellow)'};
`;

const MainStyledHeader: React.FC<IMainStyledHeaderProps> = ({
  onClick,
  children,
  color,
}) => {
  return (
    <Component onClick={() => onClick} color={color}>
      {children}
    </Component>
  );
};

export default MainStyledHeader;
