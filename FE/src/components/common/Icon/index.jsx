import React from 'react';
import PropTypes from 'prop-types';

import IconComponents from './IconComponents';

const Icon = ({ name, width = 16, height = 16, fill = '#14142b' }) => {
  const IconComponent = IconComponents[name];

  return (
    <div>
      <IconComponent width={width} height={height} fill={fill} />
    </div>
  );
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  fill: PropTypes.string.isRequired,
};

export default Icon;
