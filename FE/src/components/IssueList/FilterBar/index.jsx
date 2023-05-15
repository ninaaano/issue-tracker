import React from 'react';
import PropTypes from 'prop-types';

import { $FilterBar, $FilterButton, $FilterInput, $FilterInputWrapper } from './style';

const FilterBar = () => {
  // 상태 : Initial, Active, Empty, Typing, Typed
  const buttonClickHandler = () => {};

  return (
    <$FilterBar>
      <$FilterButton onClick={buttonClickHandler}>
        필터
        <img src="./assets/Icons/chevronDown.svg" alt="chevronDown" />
      </$FilterButton>
      <$FilterInputWrapper>
        <img src="./assets/Icons/search.svg" alt="search" />
        <$FilterInput type="text" placeholder="is:issue is:open" />
      </$FilterInputWrapper>
    </$FilterBar>
  );
};

export default FilterBar;
