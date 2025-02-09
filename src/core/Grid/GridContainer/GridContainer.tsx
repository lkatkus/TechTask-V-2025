import { PropsWithChildren, Ref, forwardRef } from 'react';
import { StyledGridContainer } from './GridContainer.styles';

type GridContainerProps = PropsWithChildren & {
  rowGap?: number;
  columnGap?: number;
};

export const GridContainer = forwardRef(
  (
    { children, rowGap = 0, columnGap = 0, ...rest }: GridContainerProps,
    ref: Ref<HTMLDivElement>,
  ) => (
    <StyledGridContainer ref={ref} {...rest} $rowGap={rowGap} $columnGap={columnGap}>
      {children}
    </StyledGridContainer>
  ),
);
