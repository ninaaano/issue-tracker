import React from 'react';
import PropTypes from 'prop-types';

import Icon from '../../../common/Icon';
import { $FilterBar, $FilterButton, $FilterInput, $FilterInputWrapper } from './style';

const FilterBar = () => {
  // 상태 : Initial, Active, Empty, Typing, Typed
  const buttonClickHandler = () => {};

  return (
    <$FilterBar>
      <$FilterButton onClick={buttonClickHandler}>
        필터
        <Icon name="chevronDown" fill="#6E7191" />
      </$FilterButton>
      <$FilterInputWrapper>
        <Icon name="search" fill="#6E7191" />
        <$FilterInput type="text" placeholder="is:issue is:open" />
      </$FilterInputWrapper>
    </$FilterBar>
  );
};

export default FilterBar;
