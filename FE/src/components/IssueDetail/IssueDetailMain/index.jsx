import React from 'react';
import PropTypes from 'prop-types';

import SideBar from '../../common/SideBar';
import Comments from './Comments';
import { $IssueDetailMain } from './style';

const IssueDetailMain = ({ issue, user, label, milestone }) => {
  return (
    <$IssueDetailMain>
      <Comments issue={issue} />
      <SideBar assignees={user} labels={label} milestones={milestone} />
    </$IssueDetailMain>
  );
};

IssueDetailMain.propTypes = {
  issue: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  milestone: PropTypes.string.isRequired,
};

export default IssueDetailMain;
