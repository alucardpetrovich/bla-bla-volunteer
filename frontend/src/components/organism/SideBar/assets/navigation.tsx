import { BiCog } from 'react-icons/bi';
import { MdMessage } from 'react-icons/md';
import { BiAnalyse, BiSearch } from 'react-icons/bi';
import { AiFillHeart, AiTwotoneFileExclamation } from 'react-icons/ai';
import { FaBars, FaHome, FaLock, FaMoneyBill, FaUser } from 'react-icons/fa';
import { BsCartCheck } from 'react-icons/bs';

export const sideBarRouters = [
  {
    path: '/projects',
    name: 'проекти',
    icon: <FaUser />,
  },
  {
    path: '/messages',
    name: 'повідомлення',
    icon: <MdMessage />,
  },
  {
    path: '/analytics',
    name: 'статистика',
    icon: <BiAnalyse />,
  },
  {
    path: '/activity',
    name: 'активність',
    icon: <AiTwotoneFileExclamation />,
  },
  {
    path: '/order',
    name: 'особистий кабінет',
    icon: <BsCartCheck />,
  },
  {
    path: '/settings',
    name: 'налаштування',
    icon: <BiCog />,
    exact: true,
    subRoutes: [
      {
        path: '/settings/profile',
        name: 'Profile ',
        icon: <FaUser />,
      },
      {
        path: '/settings/2fa',
        name: '2FA',
        icon: <FaLock />,
      },
      {
        path: '/settings/billing',
        name: 'Billing',
        icon: <FaMoneyBill />,
      },
    ],
  },
];
