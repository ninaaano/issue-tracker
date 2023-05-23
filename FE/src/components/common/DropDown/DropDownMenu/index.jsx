import React from 'react';
import PropTypes from 'prop-types';

import Icon from '../../Icon';
import { $MenuWrapper, $MenuLeftWrapper, $MenuImg, $MenuText, $LabelColor } from './style';

const DropDownMenu = ({ menuImg = null, menuText, isChecked = false, backgroundColor }) => {
  // const { isChecked, changeFilterOption } = useContext(FilterContext);
  const menuClickHandler = () => {
    // TODO: context API 적용(로직)
    // TODO: 드롭다운 창도 닫아야함. -> 드롭다운 전체에 상태 둬야함.
    // Filter Context로 보내고
    // setIsChecked를 바꿔.
  };

  return (
    <$MenuWrapper type="button" onClick={menuClickHandler}>
      <$MenuLeftWrapper>
        {backgroundColor && <$LabelColor backgroundColor={backgroundColor} />}
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
  backgroundColor: PropTypes.string,
};

export default DropDownMenu;
