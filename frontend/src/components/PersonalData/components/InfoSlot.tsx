import { TextField, useTheme } from '@mui/material';
import { Text } from '@ui-kit';
import { useEffect, useState } from 'react';
import { usePrevious } from 'src/libs/ui-kit/src/hooks/usePrevious';

import { DataSubTitle, InfoSlotWrapper } from './style';

interface IInfoSlot {
  title: string;
  info: string;
  isEditActive?: boolean;
  isEditCanceled?: boolean;
}

const InfoSlot: React.FC<IInfoSlot> = ({ title, info, isEditActive, isEditCanceled }) => {
  const [currentInfo, setInfo] = useState(info);
  const prevInfo = usePrevious(currentInfo);

  const theme = useTheme();
  const color = theme.palette.grey[500];

  useEffect(() => {
    setInfo(info);
  }, [info]);

  useEffect(() => {
    if (prevInfo && isEditCanceled) {
      setInfo(prevInfo);
    }
  }, [isEditCanceled]);

  return (
    <InfoSlotWrapper>
      <DataSubTitle tag="b3" color={color}>
        {title}
      </DataSubTitle>
      {!isEditActive ? (
        <Text
          tag="b1"
          //   onClick={() => setIsEditActive(true)}
        >
          {currentInfo}
        </Text>
      ) : (
        // <Typography
        //   onClick={() => {
        //     setIsEditActive(true);
        //   }}
        // >
        //   {currentInfo}!
        // </Typography>
        <TextField
          autoFocus
          //   inputProps={{ className: classes.name }}
          value={currentInfo}
          onChange={event => setInfo(event.target.value)}
          //   onBlur={() => setIsEditActive(false)}
        />
      )}
      {/* {isPhone && (
        <Text tag="b4" color={color}>
          Номер телефону доступний за запитом
        </Text>
      )} */}
    </InfoSlotWrapper>
  );
};

export default InfoSlot;
