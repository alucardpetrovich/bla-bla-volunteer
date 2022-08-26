import { ThemeProvider } from '@mui/material/styles';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { DeviceMatchProvider, theme } from '@ui-kit';
import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import toast, { Toaster } from 'react-hot-toast';
import { useRoutes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import { Routes } from './components/common/constants/Routes';
import { isErrorResponse } from './components/common/utils/typeguard';
import { GlobalStyle } from './utils/styles';

const rootDiv = document.getElementById('root');

if (!rootDiv) {
  throw new Error('root element does not exist');
}

const root = ReactDOM.createRoot(rootDiv);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
      onError: error => {
        if (isErrorResponse(error)) {
          toast.error(error.response.data.message);
          return;
        }

        toast.error('Error');
      },
    },
    mutations: {
      retry: false,
      onError: error => {
        if (isErrorResponse(error)) {
          toast.error(error.response.data.message);
          return;
        }

        toast.error('Error');
      },
    },
  },
});
const toastOptions = {
  duration: 3000,
  style: {
    padding: '16px',
    minWidth: '240px',
    borderRadius: '4px',
  },
  success: {
    iconTheme: {
      primary: '#388E3C',
      secondary: '#fff',
    },
  },
  error: {
    iconTheme: {
      primary: '#E53935',
      secondary: '#fff',
    },
  },
};

const App = () => useRoutes(Routes);

const reCaptchaKey = process.env.REACT_APP_CAPTCHA_SITE_KEY || '';

root.render(
  <QueryClientProvider client={queryClient}>
    <DeviceMatchProvider>
      <StrictMode>
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Toaster position="top-right" toastOptions={toastOptions} />
            <GoogleReCaptchaProvider reCaptchaKey={reCaptchaKey}>
              <App />
            </GoogleReCaptchaProvider>
          </ThemeProvider>
        </BrowserRouter>
      </StrictMode>
    </DeviceMatchProvider>
  </QueryClientProvider>,
);
