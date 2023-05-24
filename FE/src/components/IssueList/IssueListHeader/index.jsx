import React from 'react';
import PropTypes from 'prop-types';

import NavButtons from './NavButtons';
import FilterBar from './FilterBar';
import { $IssueListHeader } from './style';

const IssueListHeader = ({ labelCount, milestoneCount }) => {
  return (
    <$IssueListHeader>
      <FilterBar />
      <NavButtons labelCount={labelCount} milestoneCount={milestoneCount} />
    </$IssueListHeader>
  );
};

IssueListHeader.propTypes = {
  labelCount: PropTypes.number.isRequired,
  milestoneCount: PropTypes.number.isRequired,
};

export default IssueListHeader;
