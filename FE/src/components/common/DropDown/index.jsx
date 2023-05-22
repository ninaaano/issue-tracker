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

const DropDown = ({ className = '', type, width, height, menus, position = 'left', gap = 0 }) => {
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

  return (
    <$DropDown>
      <$DropDownButtonWrapper ref={buttonRef} width={width} height={height}>
        <$DropDownButton type="ghost" size="M" onClick={toggleHandler}>
          {type === 'filter' ? '필터' : `${type}`}
          <Icon name="chevronDown" />
        </$DropDownButton>
      </$DropDownButtonWrapper>
      {isOpen && (
        <$DropDownWrapper className={className} position={position} gap={gap} ref={menusRef}>
          <$DropDownHeader>{type === 'filter' ? '이슈 필터' : `${type} 필터`}</$DropDownHeader>
          <$DropDownMenus>
            {menus.map(({ id, imgSrc, text, isChecked }) => (
              <DropDownMenu key={id} menuImg={imgSrc} menuText={text} isChecked={isChecked} />
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
  width: PropTypes.number,
  height: PropTypes.number,
  menus: PropTypes.arrayOf(PropTypes.object).isRequired,
  position: PropTypes.oneOf(['right', 'left']),
  gap: PropTypes.number,
};

export default DropDown;
