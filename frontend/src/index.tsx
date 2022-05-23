import { StrictMode } from 'react';
import { IntlProvider } from 'react-intl';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import messages_ua from './locales/ua.json';
import messages_ru from './locales/ru.json';
import store, { persistor } from './redux/store';
import App from './pages/App/index';
import { ThemeProvider } from 'styled-components';
import theme from 'utils/styles/theme';

const messages = {
  ua: messages_ua,
  ru: messages_ru,
};

const root = ReactDOM.createRoot(document.getElementById('root'));
const language = navigator.language.split(/[-_]/)[0];

root.render(
  <StrictMode>
    <BrowserRouter>
      <IntlProvider locale={language} messages={messages[language]}>
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
