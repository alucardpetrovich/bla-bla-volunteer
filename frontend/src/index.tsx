import { ThemeProvider } from '@mui/material/styles';
import { DeviceMatchProvider, theme } from '@ui-kit';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

import App from './pages/App/index';
import store, { persistor } from './store/store';

const rootDiv = document.getElementById('root');

if (!rootDiv) {
  throw new Error('root element does not exist');
}

const root = ReactDOM.createRoot(rootDiv);

root.render(
  <DeviceMatchProvider>
    <StrictMode>
      <BrowserRouter>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <ThemeProvider theme={theme}>
              <App />
            </ThemeProvider>
          </PersistGate>
        </Provider>
      </BrowserRouter>
    </StrictMode>
  </DeviceMatchProvider>,
);
