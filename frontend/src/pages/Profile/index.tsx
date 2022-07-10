import { useIntl } from 'react-intl';
import PersonalData from 'src/components/PersonalData';
import RoleForm from 'src/components/RoleForm';
import RoleSelection from 'src/components/RoleSelection';
import { useAppSelector } from 'src/hooks';

import { getUser } from '../../store/user/userSelectors';
import InfoTitle from './components/InfoTitle';

const Profile: React.FC = () => {
  const { formatMessage } = useIntl();
  const user = useAppSelector(getUser);
  const involvements = user?.involvements;

  return (
    <>
      <InfoTitle
        title={formatMessage({
          defaultMessage: 'Ваша роль',
          description: 'Profile: role',
        })}
        showInfo
      >
        {involvements && involvements.length !== 0 && <RoleSelection involvements={involvements} />}
        {involvements?.length !== 0 && <RoleForm />}
      </InfoTitle>
      <InfoTitle
        title={formatMessage({
          defaultMessage: 'Особисті дані',
          description: 'Profile: personalData',
        })}
        showInfo={false}
      >
        <PersonalData />
      </InfoTitle>
      <InfoTitle
        title={formatMessage({
          defaultMessage: 'Оцінка активності',
          description: 'Profile: activity',
        })}
        showInfo={false}
      >
        <div>Оцінка активності</div>
      </InfoTitle>
      <InfoTitle
        title={formatMessage({
          defaultMessage: 'Листування',
          description: 'Profile: messages',
        })}
        showInfo={false}
      >
        <div>Листування</div>
      </InfoTitle>
    </>
  );
};

export default Profile;
