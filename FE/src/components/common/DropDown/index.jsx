import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

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
const convertMenuObj = (type, menus) => {
  return menus.map((menu) => {
    const keys = Object.keys(menu);
    const newMenu = {};

    keys.forEach((key) => {
      if (key.includes('Id')) newMenu.id = menu[key];
      if (key.includes('Name')) newMenu.text = menu[key];
      if (key.includes('url')) newMenu.url = menu[key];
      if (key.includes('backgroundColor')) newMenu.backgroundColor = menu[key];
    });
    return newMenu;
  });
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

  const convertMenus = type === 'issue' ? menus : convertMenuObj(type, menus);

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
            {convertMenus.map(({ id, url, text, backgroundColor, isChecked }) => (
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
