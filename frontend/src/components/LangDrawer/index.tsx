import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { MouseEvent, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'src/hooks';
import messages from 'src/locale/list.json';
import { changeLang } from 'src/store/lang/langOperations';
import { getLang } from 'src/store/lang/langSelectors';

import { Text } from '../StyledComponents';

const locales = Object.keys(messages);

const LangDrawer = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const [currentLang, setCurrentLang] = useState<string>('');
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const dispatch = useAppDispatch();

  const lang = useSelector(getLang);
  useEffect(() => {
    setCurrentLang(lang);
  }, [lang]);

  const handleClose = (event: MouseEvent<HTMLElement>) => {
    const newLang: string | null = (event.target as Element).getAttribute('data-lang');
    localStorage.setItem('lang', JSON.stringify(newLang));
    dispatch(changeLang(newLang));
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
        <Text tag="b1">{currentLang}</Text>
      </Button>
      <Menu
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
          let lang;
          if (locale === 'uk') {
            lang = 'ua';
          } else lang = locale;
          return (
            <MenuItem key={lang} onClick={handleClose} data-lang={lang}>
              <Text color="#fff" tag="b1" data-lang={lang}>
                {lang}
              </Text>
            </MenuItem>
          );
        })}
      </Menu>
    </div>
  );
};

export default LangDrawer;
