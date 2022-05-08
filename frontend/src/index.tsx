import { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import store from './redux/store';
import App from './pages/App';
import { IntlProvider, useIntl } from 'react-intl';
import UAMessage from '../src/locales/ua.json';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <BrowserRouter>
      <IntlProvider locale="ua" messages={UAMessage}>
        <Provider store={store}>
          <App />
        </Provider>
      </IntlProvider>
    </BrowserRouter>
  </StrictMode>,
);
