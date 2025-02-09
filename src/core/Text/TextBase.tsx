import { PropsWithChildren } from 'react';
import { TextBaseComponent } from './TextBase.styles';

type BaseTextProps = {
  as?: string;
  fontSize: number;
  lineHeight: number;
  bold?: boolean;
};

type CommonTextProps = PropsWithChildren & {
  bold?: boolean;
  italic?: boolean;
  center?: boolean;
  lineCount?: number;
};

export const getTextBase =
  ({ as = 'p', fontSize, lineHeight }: BaseTextProps) =>
  ({ children, bold, italic, center, lineCount, ...rest }: CommonTextProps) => {
    return (
      <TextBaseComponent
        {...rest}
        as={as}
        $fontSize={fontSize}
        $lineHeight={lineHeight}
        $lineCount={lineCount}
        $bold={!!bold}
        $italic={!!italic}
        $center={!!center}
      >
        {children}
      </TextBaseComponent>
    );
  };
