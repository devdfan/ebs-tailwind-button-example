import * as React from 'react';

import { Button, ButtonProps } from '.';

export default {
  title: 'Button',
  component: Button,
};

export const Regular: React.FC<ButtonProps> & { args: ButtonProps } = ({ children, ...props }) => (
  <Button {...props}>{children}</Button>
);

Regular.args = {
  type: 'primary',
  size: 'medium',
  children: 'Example',
  form: '',
  icon: '',
  buttonClass: '',
  loading: false,
  submit: false,
  block: false,
  onClick: () => console.log,
};
