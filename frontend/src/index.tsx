import { StrictMode } from 'react';
import { IntlProvider } from 'react-intl';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import messages_ua from './locales/ua.json';
import messages_ru from './locales/ru.json';
import store from './redux/store';
import App from './pages/App';

const messages = {
  ua: messages_ua,
  ru: messages_ru,
};

const root = ReactDOM.createRoot(document.getElementById('root'));
let language = navigator.language.split(/[-_]/)[0];

root.render(
  <StrictMode>
    <BrowserRouter>
      <IntlProvider locale={language} messages={messages[language]}>
        <Provider store={store}>
          <App />
        </Provider>
      </IntlProvider>
    </BrowserRouter>
  </StrictMode>,
);
