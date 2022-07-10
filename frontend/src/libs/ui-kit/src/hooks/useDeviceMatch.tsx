import { DeviceSizes } from '@ui-kit';
import { createContext, FC, useContext, useEffect, useMemo, useState } from 'react';

type TDeviceType = keyof typeof DeviceSizes;

type TDeviceMatch = { [key in TDeviceType]: boolean } & {
  mobile: boolean;
  desktop: boolean;
  largeDesktop: boolean;
};

const DEFAULT_DEVICE_MATCH: TDeviceMatch = {
  xs: false,
  sm: false,
  md: false,
  lg: false,
  xl: false,
  mobile: false,
  desktop: false,
  largeDesktop: false,
};

const DeviceMatchContext = createContext(DEFAULT_DEVICE_MATCH);

const getDeviceMatch = (deviceType: TDeviceType): TDeviceMatch => {
  const mobile = deviceType === 'xs' || deviceType === 'sm';
  const desktop = deviceType === 'md' || deviceType === 'lg';

  return {
    ...DEFAULT_DEVICE_MATCH,
    [deviceType]: true,
    mobile,
    desktop,
    largeDesktop: !mobile && !desktop,
  };
};

const getDeviceTypeFromWindowSize = (): TDeviceType => {
  const windowWidth = window.innerWidth;

  if (windowWidth < DeviceSizes.sm) {
    return 'xs';
  }

  if (windowWidth < DeviceSizes.md) {
    return 'sm';
  }

  if (windowWidth < DeviceSizes.lg) {
    return 'md';
  }

  if (windowWidth < DeviceSizes.xl) {
    return 'lg';
  }

  return 'xl';
};

interface IDeviceMatchProviderProps {
  deviceType?: TDeviceType;
  children: React.ReactNode;
}

export const DeviceMatchProvider: FC<IDeviceMatchProviderProps> = ({ deviceType: initialDeviceType, children }) => {
  const [deviceType, setDeviceType] = useState(initialDeviceType);

  const deviceMatch = useMemo(() => getDeviceMatch(deviceType ?? 'xs'), [deviceType]);

  useEffect(() => {
    setDeviceType(getDeviceTypeFromWindowSize());

    const handleResize = () => {
      setDeviceType(getDeviceTypeFromWindowSize());
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return <DeviceMatchContext.Provider value={deviceMatch}>{children}</DeviceMatchContext.Provider>;
};

export function useDeviceMatch(): TDeviceMatch {
  const deviceType = useContext(DeviceMatchContext);
  if (deviceType) {
    return deviceType;
  }

  throw new Error('DeviceType is misconfigured - Device provider missing');
}
