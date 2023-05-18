import React, { useEffect, useRef } from 'react';
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

const DropDown = ({ className = '', type, menus, closeHandler }) => {
  const dropDownElement = useRef(null);

  const closeModalHandler = ({ target }) => {
    if (dropDownElement.current && !dropDownElement.current.contains(target)) closeHandler();
  };

  useEffect(() => {
    window.addEventListener('click', closeModalHandler);
    return () => {
      window.removeEventListener('click', closeModalHandler);
    };
  }, []);

  return (
    <$DropDownWrapper className={className} ref={dropDownElement}>
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
  className: PropTypes.string,
  type: PropTypes.string.isRequired,
  menus: PropTypes.arrayOf(PropTypes.object).isRequired,
  closeHandler: PropTypes.func.isRequired,
};

export default DropDown;
