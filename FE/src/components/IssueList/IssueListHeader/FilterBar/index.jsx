import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Icon from '../../../common/Icon';
import DropDown from '../../../common/DropDown';
import { $FilterBar, $FilterButton, $FilterInput, $FilterInputWrapper } from './style';

const FILTER = {
  TYPE: 'issue',
  MENUS: [
    { text: '열린 이슈' },
    { text: '내가 작성한 이슈' },
    { text: '나에게 할당된 이슈' },
    { text: '내가 댓글을 남긴 이슈' },
    { text: '닫힌 이슈' },
  ],
};

const FilterBar = () => {
  // 상태 : Initial, Active, Empty, Typing, Typed
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const buttonClickHandler = () => {
    setIsDropdownOpen((previous) => !previous);
  };

  return (
    <$FilterBar>
      <$FilterButton onClick={buttonClickHandler}>
        필터
        <Icon name="chevronDown" fill="#6E7191" />
      </$FilterButton>
      {isDropdownOpen && <DropDown type={FILTER.TYPE} menus={FILTER.MENUS} />}
      <$FilterInputWrapper>
        <Icon name="search" fill="#6E7191" />
        <$FilterInput type="text" placeholder="is:issue is:open" />
      </$FilterInputWrapper>
    </$FilterBar>
  );
};

export default FilterBar;
