import styled from 'styled-components';
import { getResponsiveStyle } from '@/theme';

export const ContentContainer = styled.div(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  overflowY: 'scroll',
  ...getResponsiveStyle(['padding', [theme.spacing.m, theme.spacing.m, theme.spacing.l]]),
}));

export const ContentWrapper = styled.div({
  width: '100%',
  flex: 1,
  ...getResponsiveStyle(['maxWidth', ['100%', '100%', 1000]]),
});
