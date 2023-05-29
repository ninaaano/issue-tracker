import React, { useRef } from 'react';
import { useParams } from 'react-router-dom';

import useFetch from '../../hooks/useFetch';

import { ISSUES, USERS, LABELS, MILESTONES } from '../../constants/api';

import IssueDetailHeader from '../../components/IssueDetail/IssueDetailHeader';
import IssueDetailMain from '../../components/IssueDetail/IssueDetailMain';
import Icon from '../../components/common/Icon';
import Button from '../../components/common/Button';
import SideBar from '../../components/common/SideBar';
import TextArea from '../../components/common/TextArea';
import { $IssueDetail, $IssueCommentArea, $IssueDetailMainLayout } from './style';

const IssueDetail = () => {
  // TODO: Text Area UnControlled Component로 바꾸기.
  const { issueId } = useParams();
  const { data: issueDetailData } = useFetch(ISSUES.GET_ISSUE(issueId));
  const { data: userData } = useFetch(USERS.GET_ALL_USERS);
  const { data: labelData } = useFetch(LABELS.GET_ALL_LABELS);
  const { data: milestoneData } = useFetch(MILESTONES.GET_ALL_MILESTONES);

  const allDataLoaded = issueDetailData && userData && labelData && milestoneData;

  const commentRef = useRef('');
  const filesRef = useRef([]);

  const makeSelectItemsObj = () => {
    const selectedItems = {};

    // TODO: 담당자, label 중복 처리
    selectedItems.assignee = issueDetailData.assignee[0].userId;
    selectedItems.milestone = issueDetailData.milestone.milestoneId;
    selectedItems.label = issueDetailData.label[0].labelId;
    return selectedItems;
  };

  const submitHandler = () => {
    const newComment = {
      commentRef: commentRef.current.value,
      files: filesRef.current.files,
    };

    console.log(newComment);
  };

  return (
    allDataLoaded && (
      <$IssueDetail>
        <IssueDetailHeader issue={issueDetailData} />
        <$IssueDetailMainLayout>
          <$IssueCommentArea>
            <IssueDetailMain
              issue={issueDetailData}
              user={userData}
              label={labelData}
              milestone={milestoneData}
            />
            <TextArea name="comment" ref={{ commentRef, filesRef }} size="S" />
            <Button type="contained" size="S" onClick={submitHandler}>
              <Icon name="plus" />
              코멘트 작성
            </Button>
          </$IssueCommentArea>
          <SideBar
            assignees={userData}
            labels={labelData}
            milestones={milestoneData}
            selectedItems={makeSelectItemsObj()}
          />
        </$IssueDetailMainLayout>
      </$IssueDetail>
    )
  );
};

export default IssueDetail;
