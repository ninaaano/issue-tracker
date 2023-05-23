import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

import { FILTER_TYPE } from '../../../constants/dropdownMenu';

import DropDownMenu from './DropDownMenu';
import Icon from '../Icon';
import {
  $DropDown,
  $DropDownButtonWrapper,
  $DropDownButton,
  $DropDownHeader,
  $DropDownMenus,
  $DropDownWrapper,
} from './style';

// TODO : util 함수로 빼기.
const convertMenus = ({ type, name, menus }) => {
  const convertedMenus = [];

  if (type === FILTER_TYPE.ASSIGNEE) {
    convertedMenus.push({ id: 'none', text: `${name}가 없는 이슈` });
  }
  if (type === FILTER_TYPE.LABEL || type === FILTER_TYPE.MILESTONE) {
    convertedMenus.push({ id: 'none', text: `${name}이 없는 이슈` });
  }

  menus.forEach((menu) => {
    const keys = Object.keys(menu);
    const newMenu = {};

    keys.forEach((key) => {
      if (key.includes('Id')) newMenu.id = menu[key];
      if (key.includes('Name')) newMenu.text = menu[key];
      if (key.includes('url')) newMenu.url = menu[key];
      if (key.includes('backgroundColor')) newMenu.backgroundColor = menu[key];
    });

    convertedMenus.push(newMenu);
  });

  return convertedMenus;
};

const DropDown = ({ className = '', type, name, width, height, menus, position = 'left', gap = 0 }) => {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef(null);
  const menusRef = useRef(null);

  const toggleHandler = () => {
    setIsOpen((previous) => !previous);
  };

  useEffect(() => {
    const closeHandler = ({ target }) => {
      const isClickedOutside = !buttonRef.current?.contains(target) && !menusRef.current?.contains(target);

      if (isClickedOutside) {
        setIsOpen(false);
      }
    };

    window.addEventListener('click', closeHandler);

    return () => window.removeEventListener('click', closeHandler);
  }, []);

  const convertedMenus = type === 'issue' ? menus : convertMenus({ type, name, menus });

  return (
    <$DropDown>
      <$DropDownButtonWrapper ref={buttonRef} width={width} height={height}>
        <$DropDownButton type="ghost" size="M" onClick={toggleHandler}>
          {type === 'issue' ? '필터' : `${name}`}
          <Icon name="chevronDown" />
        </$DropDownButton>
      </$DropDownButtonWrapper>
      {isOpen && (
        <$DropDownWrapper className={className} position={position} gap={gap} ref={menusRef}>
          <$DropDownHeader>{`${name} 필터`}</$DropDownHeader>
          <$DropDownMenus>
            {convertedMenus.map(({ id, url, text, backgroundColor, isChecked }) => (
              <DropDownMenu
                key={id}
                menuImg={url}
                menuText={text}
                backgroundColor={backgroundColor}
                isChecked={isChecked}
              />
            ))}
          </$DropDownMenus>
        </$DropDownWrapper>
      )}
    </$DropDown>
  );
};

DropDown.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  menus: PropTypes.arrayOf(PropTypes.object).isRequired,
  position: PropTypes.oneOf(['right', 'left']),
  gap: PropTypes.number,
};

export default DropDown;
