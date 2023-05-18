import React from 'react';
import PropTypes from 'prop-types';

import { $DropDownHeader, $DropDownMenus, $DropDownWrapper } from './style';
import DropDownMenu from './DropDownMenu';

const filterName = {
  issue: '이슈',
  milestone: '마일스톤',
  label: '레이블',
  writer: '작성자',
  assignee: '담당자',
};

const DropDown = ({ type, menus }) => {
  return (
    <$DropDownWrapper>
      <$DropDownHeader>{`${filterName[type]} 필터`}</$DropDownHeader>
      <$DropDownMenus>
        {menus.map(({ id, imgSrc, text, isChecked }) => (
          /*
            menu : {
                imgSrc: 이미지 주소 or 어떻게 할지 생각.
                text: 메뉴 텍스트 ex) 내가 작성한 이슈
                isChecked: 체크된 상태
            }
          */
          <DropDownMenu key={id} menuImg={imgSrc} menuText={text} isChecked={isChecked} />
        ))}
      </$DropDownMenus>
    </$DropDownWrapper>
  );
};

DropDown.propTypes = {
  type: PropTypes.string.isRequired,
  menus: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default DropDown;
