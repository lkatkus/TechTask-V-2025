import styled from 'styled-components';

export const StyledGridContainer = styled.div<{
  $rowGap?: number;
  $columnGap?: number;
}>(({ $rowGap, $columnGap }) => ({
  width: '100%',
  display: 'grid',
  gridTemplateColumns: 'repeat(12, 1fr)',
  rowGap: $rowGap,
  columnGap: $columnGap,
}));
