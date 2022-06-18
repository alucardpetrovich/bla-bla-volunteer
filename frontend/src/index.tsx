import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { IntlProvider } from 'react-intl';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from 'styled-components';

import messages_ru from './locales/ru.json';
import messages_ua from './locales/ua.json';
import App from './pages/App/index';
import store, { persistor } from './store/store';
import { theme } from './utils/styles';

const messages = {
  ua: messages_ua,
  ru: messages_ru,
};

// FIXME: пофіксить
// eslint-disable-next-line
// @ts-ignore
const root = ReactDOM.createRoot(document.getElementById('root'));
const language = navigator.language.split(/[-_]/)[0];
// FIXME: я буду робить переклади і поправлю це
// eslint-disable-next-line
// @ts-ignore
const m = messages?.[language];
root.render(
  <StrictMode>
    <BrowserRouter>
      <IntlProvider locale={language} messages={m}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <ThemeProvider theme={theme}>
              <App />
            </ThemeProvider>
          </PersistGate>
        </Provider>
      </IntlProvider>
    </BrowserRouter>
  </StrictMode>,
);
