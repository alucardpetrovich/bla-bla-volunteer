import styled from 'styled-components';

interface ISecondaryStyledHeader {
  color?: string;
  isSelected?: boolean;
  onClick?: Function;
  children: any;
}

const Component = styled.h3`
  font-size: 30px;
  font-weight: 600;
  padding: 10px 0px;
  color: ${({ color }) => color || 'var(--third-yellow)'};
`;
const SecondaryStyledHeader: React.FC<ISecondaryStyledHeader> = ({
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

export default SecondaryStyledHeader;
