import { withThemeFromJSXProvider } from '@storybook/addon-themes';
import type { Preview } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import '../src/index.css';
import { GlobalStyles, defaultTheme } from '../src/theme';

const preview: Preview = {
  parameters: {
    options: {
      storySort: {
        method: '',
        order: ['core', 'components', 'containers', 'pages', '*'],
        locales: '',
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    withThemeFromJSXProvider({
      themes: {
        light: defaultTheme,
      },
      defaultTheme: 'light',
      Provider: ThemeProvider,
      GlobalStyles: GlobalStyles,
    }),
  ],
};

export default preview;
