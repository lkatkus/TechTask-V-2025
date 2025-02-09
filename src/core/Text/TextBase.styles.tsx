import styled from 'styled-components';

export const TextBaseComponent = styled.div<{
  $lineHeight: number;
  $lineCount?: number;
  $fontSize: number;
  $bold: boolean;
  $italic: boolean;
  $center: boolean;
}>(
  ({ $fontSize, $lineHeight, $bold, $italic, $center }) => ({
    lineHeight: $lineHeight,
    fontSize: $fontSize,
    textAlign: $center ? 'center' : 'unset',
    fontWeight: $bold ? 'bold' : 'normal',
    fontStyle: $italic ? 'italic' : 'normal',
  }),
  ({ $lineCount }) => {
    if (!$lineCount) {
      return;
    }

    if ($lineCount === 1) {
      return {
        width: '100%',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
      };
    }

    return {
      width: '100%',
      lineClamp: $lineCount,
      WebkitLineClamp: $lineCount,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      display: '-webkit-box',
      WebkitBoxOrient: 'vertical',
    };
  },
);
