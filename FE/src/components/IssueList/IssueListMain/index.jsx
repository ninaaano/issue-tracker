import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { FilterStateContext } from '../../../context/filterContext';
import List from './List';
import IssueListMainHeader from './IssueListMainHeader';
import { $Lists, $IssueListMain } from './style';

const IssueListMain = ({ issues, user, label, milestone }) => {
  const filterState = useContext(FilterStateContext);

  const filterTypes = Object.keys(filterState);

  const filteredIssues = issues.filter((issue) => {
    const { milestoneId } = issue.milestone;
    const { userId: writerId } = issue.writer;
    const labelIdArr = issue.label.map(({ labelId }) => labelId);
    const assigneeIdArr = issue.assignee.map(({ userId }) => userId);

    const isOpenedMatched = filterState.isOpened === issue.isOpened;
    const isMilestoneMatched = filterState.milestone === null || milestoneId === filterState.milestone;
    const isLabelMatched = filterState.label === null || labelIdArr.includes(filterState.label);
    const isAssigneeMatched = filterState.assignee === null || assigneeIdArr.includes(filterState.assignee);
    const isWriterMatched = filterState.writer === null || writerId === filterState.writer;

    return isOpenedMatched && isMilestoneMatched && isLabelMatched && isAssigneeMatched && isWriterMatched;
  });

  // filterTypes.forEach((type) => {
  //   const filterOption = filterState[type];

  //   if (filterOption) {
  //     switch (type) {
  //       case 'isOpened':
  //         issues.forEach((issue) => {
  //           if (issue.isOpened) filteredIssues.push(issue);
  //         });
  //         break;

  //       case 'milestone':
  //         issues.forEach((issue) => {
  //           if (issue.milestone.milestoneId === filterOption) filteredIssues.push(issue);
  //         });
  //         break;

  //       case 'label':
  //         issues.forEach((issue) => {
  //           const labelInfo = issue.label;

  //           labelInfo.forEach(({ labelId }) => {
  //             if (labelId === filterOption) filteredIssues.push(issue);
  //           });
  //         });
  //         break;

  //       case 'assignee':
  //         issues.forEach((issue) => {
  //           const assigneeInfo = issue.assignee;

  //           assigneeInfo.forEach(({ userId }) => {
  //             if (userId === filterOption) filteredIssues.push(issue);
  //           });
  //         });
  //         break;

  //       case 'writer':
  //         issues.forEach((issue) => {
  //           if (issue.writer.userId === filterOption) filteredIssues.push(issue);
  //         });
  //         break;

  //       default:
  //         break;
  //     }
  //   }
  // });
  console.log(filteredIssues);

  return (
    <$IssueListMain>
      <IssueListMainHeader user={user} label={label} milestone={milestone} />
      <$Lists>
        {filteredIssues.map((issue) => (
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
