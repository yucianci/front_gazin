import { IconButton } from '@mui/material';
import React from 'react';
import { ButtonProps } from './schema';
import { MuiButton } from './styles';

const Button = ({
  variant,
  onClick,
  isIconButton,
  children,
  type,
  color,
  size,
}: ButtonProps) => (
  <>
    {!isIconButton ? (
      <MuiButton
        variant={variant}
        type={type}
        color={color}
        onClick={onClick || undefined}
        size={size}
      >
        {children}
      </MuiButton>
    ) : (
      <IconButton onClick={onClick || undefined} color={color}>
        {children}
      </IconButton>
    )}
  </>
);

export default Button;
