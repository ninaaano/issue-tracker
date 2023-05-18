import React from 'react';
import PropTypes from 'prop-types';

import Icon from '../../Icon';
import { $MenuWrapper, $MenuLeftWrapper, $MenuImg, $MenuText } from './style';

const DropDownMenu = ({ menuImg = null, menuText, isChecked = false }) => {
  return (
    <$MenuWrapper>
      <$MenuLeftWrapper>
        {menuImg !== null && <$MenuImg src={menuImg} />}
        <$MenuText $isChecked={isChecked}>{menuText}</$MenuText>
      </$MenuLeftWrapper>
      <Icon name={isChecked ? 'checkOnCircle' : 'checkOffCircle'} />
    </$MenuWrapper>
  );
};

DropDownMenu.propTypes = {
  menuImg: PropTypes.string,
  menuText: PropTypes.string.isRequired,
  isChecked: PropTypes.bool,
};

export default DropDownMenu;
