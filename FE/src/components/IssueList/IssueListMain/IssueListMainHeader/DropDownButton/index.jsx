import React from 'react';
import PropTypes from 'prop-types';

import Icon from '../../../../common/Icon';
import { $DropDownButton } from './style';

const DropDownButton = ({ name }) => {
  return (
    <$DropDownButton type="ghost" size="M">
      {name}
      <Icon name="chevronDown" />
    </$DropDownButton>
  );
};

DropDownButton.propTypes = {
  name: PropTypes.string.isRequired,
};

export default DropDownButton;
