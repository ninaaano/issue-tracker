import React from 'react';
import PropTypes from 'prop-types';

import Icon from '../../../../common/Icon';
import { $DropDownButton } from './style';

const DropDownButton = ({ name, children, onClick }) => {
  return (
    <$DropDownButton type="ghost" size="M" onClick={onClick}>
      {name}
      <Icon name="chevronDown" />
      {children}
    </$DropDownButton>
  );
};

DropDownButton.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.node,
  onClick: PropTypes.func,
};

export default DropDownButton;
