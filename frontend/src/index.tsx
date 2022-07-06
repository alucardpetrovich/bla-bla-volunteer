import { ThemeProvider } from '@mui/material/styles';
import { DeviceMatchProvider, theme } from '@ui-kit';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { IntlProvider } from 'react-intl';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

import messages from './locale/list.json';
import App from './pages/App/index';
import store, { persistor } from './store/store';

const rootDiv = document.getElementById('root');

if (!rootDiv) {
  throw new Error('root element does not exist');
}

const root = ReactDOM.createRoot(rootDiv);

const locale = 'uk';
const m = messages[locale];

root.render(
  <DeviceMatchProvider>
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
    </StrictMode>
  </DeviceMatchProvider>,
);
