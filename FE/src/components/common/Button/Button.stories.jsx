import React from 'react';

import Button from '.';

const meta = {
  title: 'Button',
  component: Button,
  argTypes: {
    active: { control: 'boolean' },
    isTab: { control: 'boolean' },
    type: { options: ['container', 'outline', 'ghost'] },
    size: { options: ['L', 'M', 'S'] },
  },
};

export default meta;

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'heoo',
  active: false,
  isTab: false,
  type: 'container',
  size: 'L',
};
