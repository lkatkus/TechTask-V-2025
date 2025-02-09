import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle(({ theme }) => ({
  '*': {
    margin: 0,
    boxSizing: 'border-box',
    fontFamily: 'var(--font-primary)',
  },

  html: {
    backgroundColor: theme.background.primary,
  },

  'html, body': {
    width: '100%',
    height: '100%',
  },

  '#root': {
    width: '100%',
    height: '100%',
  },
}));

export const defaultTheme = {
  spacing: {
    xs: 4,
    s: 8,
    m: 16,
    l: 24,
    xl: 32,
  },
  background: {
    primary: '#e7e7e7',
    secondary: '#d3d3d3',
  },
  text: {
    primary: '#000000',
    secondary: '#ffffff',
  },
  border: {
    primary: '2px solid #ffffff',
  },
  shadow: {
    primary: '4px 4px 0px 0px rgba(0,0,0,0.1)',
  },
  components: {
    button: {
      primary: {
        color: '#000000',
        background: '#ffffff',
        backgroundHover: '#eeeeee',
      },
      secondary: {
        color: '#ffffff',
        background: 'transparent',
        backgroundHover: '#cccccc',
      },
    },
  },
};
