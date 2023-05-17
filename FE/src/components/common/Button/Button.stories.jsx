import React from 'react';

import Button from '.';

const meta = {
  title: 'Button',
  component: Button,
  argTypes: {
    active: { control: 'boolean' },
    type: { options: ['contained', 'outline', 'ghost'] },
    size: { options: ['L', 'M', 'S'] },
  },
};

export default meta;

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'button',
  active: false,
  type: 'contained',
  size: 'L',
};
