import styled from 'styled-components';
import { ResponsiveStyle, getResponsiveStyle } from '@/theme';
import { ColSpan } from './GridItem.types';

export const StyledGridItem = styled.div<{
  $colSpan: ResponsiveStyle<ColSpan>;
}>(({ $colSpan = 1 }) => {
  const colSpanStyle = Array.isArray($colSpan)
    ? getResponsiveStyle(['grid-column', $colSpan.map((s) => `span ${s}`)])
    : { gridColumn: `span ${$colSpan}` };

  return {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    ...colSpanStyle,
  };
});
