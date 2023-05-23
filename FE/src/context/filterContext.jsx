import React, { createContext, useReducer } from 'react';
import PropTypes from 'prop-types';

import { filterReducer } from './filterReducer';

const FilterStateContext = createContext(null);
const FilterDispatchContext = createContext(null);

const FilterProvider = ({ children }) => {
  const [filterState, filterDispatch] = useReducer(filterReducer, {
    isOpened: false, // 열린 이슈, 닫힌 이슈, 필터드롭다운에도 적용해야함.
    commentedByMe: false,
    milestone: null,
    label: null,
    assignee: null,
    writer: null,
  });

  return (
    <FilterStateContext.Provider value={{ filterState }}>
      <FilterDispatchContext.Provider value={filterDispatch}>{children}</FilterDispatchContext.Provider>
    </FilterStateContext.Provider>
  );
};

FilterProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { FilterProvider, FilterStateContext, FilterDispatchContext };
