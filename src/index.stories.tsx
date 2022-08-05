import * as React from 'react';

import { Button, ButtonProps } from '.';

const story = {
  title: 'Button',
  component: Button,
};

export default story;

export const Regular: React.FC<ButtonProps> & { args: ButtonProps } = ({ children, ...props }) => (
  <Button {...props}>{children}</Button>
);

Regular.args = {
  loading: true,
  children: 'Example',
  onClick: () => console.log,
};
