import React from 'react';
import PropTypes from 'prop-types';

import { $Button } from './style';

const Button = ({ children, isTab = false, isActive = false, type, size, ...props }) => {
  return (
    <$Button isTab={isTab} isActive={isActive} type={type} size={size} {...props}>
      {children}
    </$Button>
  );
};

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  isTab: PropTypes.bool.isRequired,
  isActive: PropTypes.bool.isRequired,
  type: PropTypes.oneOf(['container', 'outline', 'ghost']),
  size: PropTypes.oneOf(['L', 'M', 'S']),
};

export default Button;
