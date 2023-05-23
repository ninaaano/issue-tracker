import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import List from './List';
import IssueListMainHeader from './IssueListMainHeader';
import { FilterBarContext } from '../../../context/filterContext';
import { $Lists, $IssueListMain } from './style';

const IssueListMain = ({ issues, user, label, milestone }) => {
  const filterState = useContext(FilterBarContext);

  console.log(filterState);
  return (
    <$IssueListMain>
      <IssueListMainHeader user={user} label={label} milestone={milestone} />
      <$Lists>
        {issues.map((issue) => (
          <List key={issue.issueId} {...issue} />
        ))}
      </$Lists>
    </$IssueListMain>
  );
};

IssueListMain.propTypes = {
  issues: PropTypes.array.isRequired,
  user: PropTypes.array.isRequired,
  label: PropTypes.array.isRequired,
  milestone: PropTypes.array.isRequired,
};

export default IssueListMain;
