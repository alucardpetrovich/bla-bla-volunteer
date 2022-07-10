import React from 'react';

interface INotifications {
  isNew?: boolean;
}

export const NotificationsIcon = ({
  height,
  width,
  isNew,
  ...props
}: React.SVGProps<SVGSVGElement> & INotifications) => (
  <svg
    height={height}
    width={width}
    {...props}
    viewBox="0 0 20 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ cursor: 'pointer' }}
  >
    <path
      d="M11.73 20C11.5544 20.3033 11.3021 20.5552 10.9985 20.7302C10.6948 20.9053 10.3505 20.9974 10 20.9974C9.6495 20.9974 9.30517 20.9053 9.00152 20.7302C8.69788 20.5552 8.44561 20.3033 8.27 20M16 7.4C16 5.703 15.368 4.075 14.243 2.875C13.117 1.675 11.59 1 10 1C8.409 1 6.883 1.674 5.757 2.875C4.632 4.075 4 5.703 4 7.4C4 14.867 1 17 1 17H19C19 17 16 14.867 16 7.4Z"
      style={{
        stroke: '#323434',
        strokeWidth: '1.5',
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
      }}
    />
    {isNew ? <circle cx="16" cy="4" r="3.5" fill="#93A9D2" stroke="#323434" /> : null}
  </svg>
);
