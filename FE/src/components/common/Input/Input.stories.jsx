import React from 'react';
import Input from '.';

const meta = {
  title: 'Input',
  component: Input,
};

export default meta;

const Template = (args) => {
  return <Input {...args} />;
};

export const Primary = Template.bind({});

Primary.args = {
  id: 'label',
  labelText: 'Label',
  placeholderText: 'Placeholder',
};
