import { defaultTheme } from './theme';

export type ThemeType = typeof defaultTheme;

export type ResponsiveStyle<T> = T | [T] | [T, T] | [T, T, T] | [T, T, T, T];
