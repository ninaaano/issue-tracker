import React from 'react';
import DropDownButton from '.';

const meta = {
  title: 'Drop Down Button',
  component: DropDownButton,
  argTypes: {
    name: { control: 'string' },
  },
};

export default meta;

const Template = (args) => <DropDownButton {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  name: '담당자',
};
