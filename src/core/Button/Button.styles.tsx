import styled, { css } from 'styled-components';
import { ThemeType } from '@/theme';
import { ButtonVariants } from './Button.types';

const getBaseButtonStyle = ({ theme }: { theme: ThemeType }) =>
  css({
    cursor: 'pointer',
    borderRadius: theme.spacing.l,
    border: theme.border.primary,
    padding: `${theme.spacing.s}px ${theme.spacing.m}px`,
  });

const getButtonVariant = ({ theme, $variant }: { theme: ThemeType; $variant: ButtonVariants }) =>
  ({
    primary: css({
      color: theme.components.button.primary.color,
      backgroundColor: theme.components.button.primary.background,
      '&:hover': {
        backgroundColor: theme.components.button.primary.backgroundHover,
      },
    }),
    secondary: css({
      color: theme.components.button.secondary.color,
      backgroundColor: theme.components.button.secondary.background,
      '&:hover': {
        backgroundColor: theme.components.button.secondary.backgroundHover,
      },
    }),
  })[$variant];

export const StyledButton = styled.button<{ $variant: ButtonVariants }>(
  getBaseButtonStyle,
  getButtonVariant,
);
