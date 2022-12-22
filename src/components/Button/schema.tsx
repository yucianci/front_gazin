export type ButtonProps = {
  variant?: 'outlined' | 'outlined' | 'text';
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  isIconButton?: boolean;
  children?: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  color?:
    | 'inherit'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'error'
    | 'info'
    | 'warning'
    | undefined;
  size?: 'large' | 'medium' | 'small';
}
