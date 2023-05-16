import React from 'react';
import PropTypes from 'prop-types';

import Icon from '../../Icon';
import { $MenuWrapper, $MenuLeftWrapper, $MenuImg, $MenuText } from './style';

const DropDownMenu = ({ key, menuImg = null, menuText, isChecked }) => {
  return (
    <$MenuWrapper key={key}>
      <$MenuLeftWrapper>
        {menuImg !== null && <$MenuImg src={menuImg} />}
        <$MenuText $isChecked={isChecked}>{menuText}</$MenuText>
      </$MenuLeftWrapper>
      <Icon name={isChecked ? 'checkOnCircle' : 'checkOffCircle'} />
    </$MenuWrapper>
  );
};

DropDownMenu.propTypes = {
  key: PropTypes.number.isRequired,
  menuImg: PropTypes.string,
  menuText: PropTypes.string.isRequired,
  isChecked: PropTypes.bool,
};

export default DropDownMenu;
