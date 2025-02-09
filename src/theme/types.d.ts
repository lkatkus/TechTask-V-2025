import { ThemeType } from './theme.types';

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {} // eslint-disable-line @typescript-eslint/no-empty-object-type
}
