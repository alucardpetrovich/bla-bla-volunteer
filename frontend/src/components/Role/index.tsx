import { roles } from 'src/constants/roles';
import { IInvolvement } from 'src/models/userModel/userModel';
import { useTheme } from 'styled-components';

import RoleCard from '../atoms/RoleCard';
import { RoleListWrapper, RoleWrapper } from './style';

interface IRole {
  involvements: IInvolvement[];
}

const Role: React.FC<IRole> = ({ involvements }) => {
  const theme = useTheme();
  const mainColor = theme.palette.primary.main;
  const hoverColor = theme.palette.common.black;

  return (
    <>
      {involvements.length !== 0 && (
        <RoleListWrapper>
          {roles.map(role => (
            <RoleWrapper key={role.title} color={mainColor} hover={hoverColor}>
              <RoleCard id={role.id} title={role.title} textAlign="left">
                {role.desc}
              </RoleCard>
            </RoleWrapper>
          ))}
        </RoleListWrapper>
      )}
    </>
  );
};

export default Role;
