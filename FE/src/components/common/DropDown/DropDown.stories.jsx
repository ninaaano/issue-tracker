import React from 'react';
import DropDown from '.';

const meta = {
  title: 'Drop Down',
  component: DropDown,
};

export default meta;

const Template = (args) => {
  return <DropDown {...args} />;
};

export const Primary = Template.bind({});

Primary.args = {};
