import React, { useState } from 'react';
import TextArea from '.';

const meta = {
  title: 'TextArea',
  component: TextArea,
};

export default meta;

const Template = (args) => {
  const [textAreaValue, setTextAreaValue] = useState('');

  const handler = ({ target }) => {
    setTextAreaValue(target.value);
    console.log(target.value);
  };

  return (
    <form>
      <TextArea id="textarea" value={textAreaValue} onChange={handler} />
    </form>
  );
};

export const Primary = Template.bind({});

Primary.args = {};
