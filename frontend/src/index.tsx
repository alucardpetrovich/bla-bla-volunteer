import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { IntlProvider } from 'react-intl';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from 'styled-components';

import messages from './locale/list.json';
import App from './pages/App/index';
import store, { persistor } from './store/store';
import { theme } from './utils/styles';

// FIXME: пофіксить
// eslint-disable-next-line
// @ts-ignore
const root = ReactDOM.createRoot(document.getElementById('root'));
// const language = navigator.language.split(/[-_]/)[0];
const locale = 'uk';
const m = messages[locale];

root.render(
  <StrictMode>
    <BrowserRouter>
      <IntlProvider locale={locale} messages={m} defaultLocale="uk">
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
