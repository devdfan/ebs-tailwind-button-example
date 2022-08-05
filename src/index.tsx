import * as React from 'react';
import cn from 'classnames';

import './index.css';

export type ButtonSize = 'small' | 'medium' | 'large';

export type ButtonType = 'text' | 'primary' | 'fill' | 'ghost' | 'dark' | 'light';

export interface ButtonProps extends Omit<Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'type'>, 'prefix'> {
  onClick?: () => void;
  prefix?: React.ReactNode;
  size?: ButtonSize;
  type?: ButtonType;
  loading?: boolean;
  submit?: boolean;
  buttonClass?: string;
  form?: string;
  icon?: any;
  block?: boolean;
  round?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  submit = false,
  onClick,
  prefix,
  className,
  buttonClass,
  size = 'medium',
  type = 'ghost',
  icon,
  loading,
  block,
  round,
  ...props
}) => {
  return (
    <button
      type={submit ? 'submit' : 'button'}
      className={cn('bg-sky-600', 'hover:bg-sky-700')}
      disabled={props.disabled || loading}
      {...props}
    >
      {icon ? icon : props.children}
    </button>
  );
};
