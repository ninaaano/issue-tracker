import React from 'react';
import PropTypes from 'prop-types';

import NavButtons from './NavButtons';
import FilterBar from './FilterBar';
import { $IssueListHeader } from './style';

const IssueListHeader = (props) => {
  return (
    <$IssueListHeader>
      <FilterBar />
      <NavButtons />
    </$IssueListHeader>
  );
};

IssueListHeader.propTypes = {};

export default IssueListHeader;
