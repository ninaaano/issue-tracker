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

Primary.args = {
  modalName: '이슈 필터',
  menus: [
    {
      id: 1,
      imgSrc: '',
      text: '열린 이슈',
    },
  ],
};
