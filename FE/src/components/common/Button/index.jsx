import React from 'react';
import PropTypes from 'prop-types';

import { $Button } from './style';

const Button = ({ children, active = false, type, size, ...props }) => {
  return (
    <$Button $active={active} type={type} size={size} {...props}>
      {children}
    </$Button>
  );
};

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  active: PropTypes.bool,
  type: PropTypes.oneOf(['container', 'outline', 'ghost']).isRequired,
  size: PropTypes.oneOf(['L', 'M', 'S']).isRequired,
};

export default Button;
