import React from 'react';
import PropTypes from 'prop-types';

import List from './List';
import IssueListMainHeader from './IssueListMainHeader';
import { $Lists } from './style';

const IssueListMain = ({ issues }) => {
  return (
    <React.Fragment>
      <IssueListMainHeader />
      <$Lists>
        {issues.map((issue) => (
          <List key={issue.issueId} {...issue} />
        ))}
      </$Lists>
    </React.Fragment>
  );
};

IssueListMain.propTypes = {
  issues: PropTypes.array.isRequired,
};

export default IssueListMain;
