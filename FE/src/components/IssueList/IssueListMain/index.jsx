import React from 'react';
import PropTypes from 'prop-types';

import List from './List';
import { $Lists } from './style';

const IssueListMain = ({ issues }) => {
  return (
    <$Lists>
      {issues.map((issue) => (
        <List key={issue.issueId} {...issue} />
      ))}
    </$Lists>
  );
};

IssueListMain.propTypes = {
  issues: PropTypes.array.isRequired,
};

export default IssueListMain;
