import React from 'react';
import PropTypes from 'prop-types';

import { $Label } from './style';

const Label = ({ height, name, textColor, backgroundColor }) => {
  // TODO: 옆에 아이콘 넣기 해야함.
  return (
    <$Label height={height} textColor={textColor} backgroundColor={backgroundColor}>
      {name}
    </$Label>
  );
};

Label.propTypes = {
  height: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
};

export default Label;
