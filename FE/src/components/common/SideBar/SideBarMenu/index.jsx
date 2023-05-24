import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { FILTER_TYPE, FILTER_NAME } from '../../../../constants/dropdownMenu';
import { $SideBarMenu, $DropDown } from './style';

const SideBarMenu = ({ type, menus, selectedMenu = false }) => {
  const [selectedItem, setSelectedItem] = useState({});

  return (
    <$SideBarMenu isSelected={selectedMenu}>
      <$DropDown
        type={FILTER_TYPE[type]}
        name={FILTER_NAME[type]}
        menus={menus}
        width={222}
        dropDownType="sideBar"
        position="center"
        onSelectItem={setSelectedItem}
        isSelectItem={selectedItem.id}
      />
    </$SideBarMenu>
  );
};

SideBarMenu.propTypes = {
  type: PropTypes.string.isRequired,
  menus: PropTypes.array.isRequired,
  selectedMenu: PropTypes.oneOfType(PropTypes.number, PropTypes.string),
};

export default SideBarMenu;
