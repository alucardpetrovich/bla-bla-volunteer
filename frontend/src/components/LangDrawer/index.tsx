import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { makeUrl } from '@ui-kit';
import { MouseEvent, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import messages from 'src/locale/list.json';

import { StorageKeys } from '../common/constants/storageKeys';
import { useLocale } from '../common/hooks/useLocale';
import { setToStorage } from '../common/utils/storage';

const locales = Object.keys(messages);

// TODO: REFACTOR!!!!
const LangDrawer = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { locale } = useLocale();

  const [currentLang, setCurrentLang] = useState<string>('');
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  useEffect(() => {
    setCurrentLang(locale);
  }, [locale]);

  const handleClose = (event: MouseEvent<HTMLElement>) => {
    const newLang: string | null = (event.target as Element).getAttribute('data-lang');

    const l = newLang || locale;

    navigate(makeUrl(pathname.replace(locale, '').slice(1), { locale: l }), {
      replace: true,
    });

    setToStorage(StorageKeys.locale, l);
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="lang-button"
        aria-controls={open ? 'lang-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <p>{currentLang}</p>
      </Button>
      <Menu
        color="lang"
        id="lang-menu"
        aria-labelledby="lang-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        {locales.map(locale => {
          return (
            <MenuItem color="lang" key={locale} onClick={handleClose} data-lang={locale}>
              <p data-lang={locale}>{locale}</p>
            </MenuItem>
          );
        })}
      </Menu>
    </div>
  );
};

export default LangDrawer;
