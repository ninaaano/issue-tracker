import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';

import { FilterStateContext } from '../../../context/filterContext';
import List from './List';
import IssueListMainHeader from './IssueListMainHeader';
import { $Lists, $IssueListMain } from './style';

const IssueListMain = ({ issues, user, label, milestone }) => {
  const filterState = useContext(FilterStateContext);
  const [isOpened, setIsOpened] = useState(true);

  const filteredOpenIssues = issues.filter((issue) => {
    const { milestoneId } = issue.milestone;
    const { userId: writerId } = issue.writer;
    const labelIdArr = issue.label.map(({ labelId }) => labelId);
    const assigneeIdArr = issue.assignee.map(({ userId }) => userId);

    // const isOpenedMatched = filterState.isOpened === issue.isOpened;
    const isMilestoneMatched = filterState.milestone === null || milestoneId === filterState.milestone;
    const isLabelMatched = filterState.label === null || labelIdArr.includes(filterState.label);
    const isAssigneeMatched = filterState.assignee === null || assigneeIdArr.includes(filterState.assignee);
    const isWriterMatched = filterState.writer === null || writerId === filterState.writer;

    // isOpenedMatched && isMilestoneMatched && isLabelMatched && isAssigneeMatched && isWriterMatched;
    return issue.isOpened && isMilestoneMatched && isLabelMatched && isAssigneeMatched && isWriterMatched;
  });

  const filteredCloseIssues = issues.filter((issue) => {
    const { milestoneId } = issue.milestone;
    const { userId: writerId } = issue.writer;
    const labelIdArr = issue.label.map(({ labelId }) => labelId);
    const assigneeIdArr = issue.assignee.map(({ userId }) => userId);

    // const isOpenedMatched = filterState.isOpened === issue.isOpened;
    const isMilestoneMatched = filterState.milestone === null || milestoneId === filterState.milestone;
    const isLabelMatched = filterState.label === null || labelIdArr.includes(filterState.label);
    const isAssigneeMatched = filterState.assignee === null || assigneeIdArr.includes(filterState.assignee);
    const isWriterMatched = filterState.writer === null || writerId === filterState.writer;

    // isOpenedMatched && isMilestoneMatched && isLabelMatched && isAssigneeMatched && isWriterMatched;
    return !issue.isOpened && isMilestoneMatched && isLabelMatched && isAssigneeMatched && isWriterMatched;
  });

  const filteredIssues = isOpened ? filteredOpenIssues : filteredCloseIssues;

  return (
    <$IssueListMain>
      <IssueListMainHeader
        openCount={filteredOpenIssues.length}
        closeCount={filteredCloseIssues.length}
        user={user}
        label={label}
        milestone={milestone}
        openBtnHandler={() => setIsOpened(true)}
        closeBtnHandler={() => setIsOpened(false)}
        isOpened={isOpened}
      />
      <$Lists>
        {filteredIssues.map((issue) => (
          <List isOpened={isOpened} key={issue.issueId} {...issue} />
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
