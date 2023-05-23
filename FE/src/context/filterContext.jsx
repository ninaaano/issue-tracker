import React, { createContext, useReducer } from 'react';
import PropTypes from 'prop-types';

import { filterReducer } from './filterReducer';

const filterInitFunc = (userData, labelData, milestoneData) => {
  const userIdArr = userData.map((user) => user.userId);
  const labelIdArr = labelData.map((label) => label.labelId);
  const milestoneIdArr = milestoneData.map((milestone) => milestone.milestoneId);

  return {
    isOpened: false, // 열린 이슈, 닫힌 이슈, 필터드롭다운에도 적용해야함.
    commentedByMe: false,
    milestone: {
      none: false,
      ...milestoneIdArr.reduce((acc, id) => {
        acc[id] = false;
        return acc;
      }, {}),
    },
    label: {
      none: false,
      ...labelIdArr.reduce((acc, id) => {
        acc[id] = false;
        return acc;
      }, {}),
    },
    assignee: {
      none: false,
      ...userIdArr.reduce((acc, id) => {
        acc[id] = false;
        return acc;
      }, {}),
    },
    writer: userIdArr.reduce((acc, id) => {
      acc[id] = false;
      return acc;
    }, {}),
  };
};

const FilterBarContext = createContext({});

const FilterBarProvider = ({ children, data }) => {
  const [filterState, filterDispatch] = useReducer(
    filterReducer,
    {},
    filterInitFunc.bind(null, data.users, data.labels, data.milestones),
  );

  return (
    <FilterBarContext.Provider value={{ filterState, filterDispatch }}>{children}</FilterBarContext.Provider>
  );
};

FilterBarProvider.propTypes = {
  children: PropTypes.node.isRequired,
  data: PropTypes.node.isRequired,
};
export { FilterBarContext, FilterBarProvider };
