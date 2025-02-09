import { PropsWithChildren } from 'react';
import { StyledButton } from './Button.styles';
import { ButtonVariants } from './Button.types';

type ButtonProps = PropsWithChildren & {
  variant?: ButtonVariants;
  onClick: () => void;
};

export const Button = ({ children, variant = 'primary', onClick, ...rest }: ButtonProps) => (
  <StyledButton {...rest} $variant={variant} onClick={onClick}>
    {children}
  </StyledButton>
);
