import { ChapterArrow, Heading } from '@ui-kit';
import { useState } from 'react';
import { Divider } from 'src/components/Divider';

import { InfoTitleWrapper } from './style';

interface IInfoTitle {
  title: string;
  children: React.ReactNode;
  showInfo: boolean;
}

const InfoTitle: React.FC<IInfoTitle> = ({ title, showInfo, children }) => {
  const [showChildren, setShowChildren] = useState(showInfo);

  const childrenToggle = () => {
    setShowChildren(!showChildren);
  };

  const isUp = () => {
    if (showChildren) {
      return 'rotate(0)';
    } else return 'rotate(180)';
  };

  return (
    <>
      <InfoTitleWrapper>
        <Heading tag="h3" style={{ marginBottom: '40px' }}>
          {title}
        </Heading>
        <ChapterArrow onClick={childrenToggle} transform={isUp()} />
      </InfoTitleWrapper>
      {showChildren ? children : <></>}
      <Divider />
    </>
  );
};

export default InfoTitle;
