import { roles } from 'src/constants/roles';
import { IInvolvement } from 'src/models/userModel/userModel';

import RoleCard from '../atoms/RoleCard';
import { RoleListWrapper } from './style';

interface IRoleSelection {
  involvements: IInvolvement[];
}

const RoleSelection: React.FC<IRoleSelection> = ({ involvements }) => {
  return (
    <>
      {involvements.length !== 0 && (
        <RoleListWrapper>
          {roles.map(role => (
            <RoleCard key={role.title} id={role.id} title={role.title} textAlign="left">
              {role.desc}
            </RoleCard>
          ))}
        </RoleListWrapper>
      )}
    </>
  );
};

export default RoleSelection;
