import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Icon from '../../common/Icon';
import Button from '../../common/Button';
import SideBar from '../../common/SideBar';
import TextArea from '../../common/TextArea';
import Comments from './Comments';
import { $IssueDetailMain, $IssueCommentArea, $IssueDetailMainLayout } from './style';

const IssueDetailMain = ({ detailIssue, user: userData, label: labelData, milestone: milestoneData }) => {
  const [selectedItems, setSelectedItems] = useState({
    assignee: detailIssue.assignee[0]?.userId,
    milestone: detailIssue.milestone?.milestoneId,
    label: detailIssue.label[0]?.labelId,
  });

  const [comment, setComment] = useState('');
  const [files, setFiles] = useState([]);

  const commentEditHandler = ({ target }) => {
    setComment(target.value);
  };
  const filesUploadHandler = ({ target }) => {
    setFiles([...target.files]);
  };

  const changeAssigneeHandler = (userId) => setSelectedItems({ ...selectedItems, assignee: userId });
  const changeLabelHandler = (labelId) => setSelectedItems({ ...selectedItems, label: labelId });
  const changeMilestoneHandler = (milestoneId) => {
    setSelectedItems({ ...selectedItems, milestone: milestoneId });
  };

  console.log(selectedItems);

  return (
    <$IssueDetailMainLayout>
      <$IssueCommentArea>
        <$IssueDetailMain>
          <Comments issue={detailIssue} />
        </$IssueDetailMain>
        <TextArea
          id="comment"
          value={comment}
          onChange={commentEditHandler}
          size="S"
          files={files}
          filesUploadHandler={filesUploadHandler}
        />
        <Button type="contained" size="S">
          <Icon name="plus" />
          코멘트 작성
        </Button>
      </$IssueCommentArea>
      <SideBar
        assignees={userData}
        labels={labelData}
        milestones={milestoneData}
        selectedItems={selectedItems}
        changeAssigneeHandler={changeAssigneeHandler}
        changeLabelHandler={changeLabelHandler}
        changeMilestoneHandler={changeMilestoneHandler}
      />
    </$IssueDetailMainLayout>
  );
};

IssueDetailMain.propTypes = {
  detailIssue: PropTypes.object.isRequired,
  user: PropTypes.array.isRequired,
  label: PropTypes.array.isRequired,
  milestone: PropTypes.array.isRequired,
};

export default IssueDetailMain;
