import { useState } from 'react';
import { useIntl } from 'react-intl';

import Button from '../Buttons/Button';
import InfoSlot from './components/InfoSlot';
import { InfoWrapper } from './style';

interface IDefaultUser {
  nickName: string;
  email: string;
  instagram: string;
  phone: string;
  telegram: string;
  facebook: string;
}

const PersonalData = () => {
  const { formatMessage } = useIntl();
  const [isEditActive, setIsEditActive] = useState(false);
  const [isEditCanceled, setEditCanceled] = useState(false);

  const defaultUser: IDefaultUser = {
    nickName: 'Nick Name',
    email: '@gmail.com',
    instagram: '',
    phone: '+380503931031',
    telegram: '',
    facebook: '',
  };

  const { nickName, email, instagram, phone, telegram, facebook } = defaultUser;

  const handleEditCancel = () => {
    setEditCanceled(true);
    setIsEditActive(false);
  };
  return (
    <>
      <InfoWrapper>
        <InfoSlot
          title={formatMessage({ defaultMessage: 'Нікнейм', description: 'PersonalData: nickName' })}
          info={nickName}
          isEditActive={isEditActive}
          isEditCanceled={isEditCanceled}
        />
        <InfoSlot
          title={formatMessage({ defaultMessage: 'Електронна пошта', description: 'PersonalData: email' })}
          info={email}
          isEditActive={isEditActive}
          isEditCanceled={isEditCanceled}
        />
        <InfoSlot
          title="Instagram"
          info={instagram || 'Не вказано'}
          isEditActive={isEditActive}
          isEditCanceled={isEditCanceled}
        />
        <InfoSlot
          title={formatMessage({ defaultMessage: 'Номер телефону', description: 'PersonalData: phoneNumber' })}
          info={phone}
          isEditActive={isEditActive}
          isEditCanceled={isEditCanceled}
          data-phone="phone"
        />
        <InfoSlot
          title="Telegram"
          info={telegram || 'Не вказано'}
          isEditActive={isEditActive}
          isEditCanceled={isEditCanceled}
        />
        <InfoSlot
          title="Facebook"
          info={facebook || 'Не вказано'}
          isEditActive={isEditActive}
          isEditCanceled={isEditCanceled}
        />
      </InfoWrapper>
      {isEditActive ? (
        <Button
          text={formatMessage({ defaultMessage: 'Зберегти', description: 'PersonalData: saveInfoButton' })}
          onClick={() => setIsEditActive(false)}
        />
      ) : (
        <Button
          text={formatMessage({ defaultMessage: 'Редагувати', description: 'PersonalData: editInfoButton' })}
          onClick={() => setIsEditActive(true)}
        />
      )}
      <Button
        isDisabled={!isEditActive}
        text={formatMessage({ defaultMessage: 'Скасувати', description: 'PersonalData: cancelInfoButton' })}
        onClick={handleEditCancel}
      />
    </>
  );
};

export default PersonalData;
