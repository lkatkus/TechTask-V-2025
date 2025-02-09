import { PropsWithChildren } from 'react';
import { ResponsiveStyle } from '@/theme';
import { StyledGridItem } from './GridItem.styles';
import { ColSpan } from './GridItem.types';

type GridItemProps = PropsWithChildren & {
  span?: ResponsiveStyle<ColSpan>;
};

export const GridItem = ({ span = 12, children, ...rest }: GridItemProps) => (
  <StyledGridItem {...rest} $colSpan={span}>
    {children}
  </StyledGridItem>
);
