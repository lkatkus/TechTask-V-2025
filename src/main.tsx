import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import App from './App.tsx';
import { ImageLoaderContextProvider } from './context/ImageLoader';
import './index.css';
import { GlobalStyles, defaultTheme } from './theme';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <ImageLoaderContextProvider>
        <App />
        <GlobalStyles />
      </ImageLoaderContextProvider>
    </ThemeProvider>
  </StrictMode>,
);
