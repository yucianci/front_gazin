import { IconButton } from '@mui/material';
import React from 'react';
import { MuiButton } from './styles';

interface IButton {
  variant?: 'outlined' | 'outlined' | 'text';
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  isIconButton?: boolean;
  children?: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  color?: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning' | undefined
}

const Button = ({
  variant, onClick, isIconButton, children, type, color,
}: IButton) => (
  <>
    {!isIconButton ? (
      <MuiButton variant={variant} type={type} color={color} onClick={onClick || undefined}>
        {children}
      </MuiButton>
    ) : (
      <IconButton onClick={onClick || undefined}>
        {children}
      </IconButton>
    )}
  </>
);

export default Button;
