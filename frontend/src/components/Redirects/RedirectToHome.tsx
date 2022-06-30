import { FC } from 'react';
import { useSelector } from 'react-redux';
import { generatePath, Navigate } from 'react-router-dom';
import { PATHS } from 'src/constants/PATH';

const RedirectToHome: FC<{ replace?: boolean }> = ({ replace = true }) => {
  const lang = useSelector(() => 'ua');
  const path = `/${generatePath(PATHS.HOME.path, { lang })}`;

  return <Navigate to={path} replace={replace} />;
};

export default RedirectToHome;
