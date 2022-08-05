import * as React from 'react';
import cn from 'classnames';

import { Loading } from './components';

import './index.css';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ loading, disabled, onClick, ...props }) => {
  return (
    <button
      type="button"
      className={cn(
        'flex',
        'items-center',
        'gap-1',
        'p-1',
        'cursor-pointer',
        'rounded-md',
        'hover:bg-indigo-500',
        'hover:text-white',
        'bg-white',
        'dark:bg-slate-800',
        'text-slate-900',
        'dark:text-white',
      )}
      disabled={disabled || loading}
      {...props}
    >
      {loading && <Loading />}
      {props.children}
    </button>
  );
};
