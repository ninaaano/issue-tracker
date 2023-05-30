import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Icon from '../../../common/Icon';
import Button from '../../../common/Button';
import MilestoneTable from '../../MilestoneTable';
import {
  $MilestoneListItem,
  $MilestoneInfo,
  $UpsideInfo,
  $MilestoneName,
  $MilestoneDeadline,
  $MilestoneComment,
  $Buttons,
  $MilestoneProgress,
  $MilestoneControl,
  $ProgressInfo,
  $Percent,
  $Issues,
  $OpenIssue,
  $CloseIssue,
} from './style';

const MilestoneListItem = ({ milestone, getNewMilestoneData }) => {
  const [isEdit, setIsEdit] = useState(false);

  const calculatePercentage = (() => {
    const totalIssues = milestone.openIssue + milestone.closeIssue;

    if (totalIssues === 0) return 0;
    return Math.ceil((milestone.closeIssue / totalIssues) * 100);
  })();

  const editButtonHandler = () => {
    setIsEdit(true);
  };

  const cancelEditHandler = () => {
    setIsEdit(false);
  };

  return isEdit ? (
    <MilestoneTable
      type="edit"
      id={milestone.milestoneId}
      title={milestone.milestoneName}
      deadline={milestone.deadline}
      content={milestone.content}
      cancelClickHandler={cancelEditHandler}
      isOpened={milestone.isOpened}
      getNewMilestoneData={getNewMilestoneData}
    />
  ) : (
    <$MilestoneListItem>
      <$MilestoneInfo>
        <$UpsideInfo>
          <Icon name="milestone" fill="#007AFF" />
          <$MilestoneName>{milestone.milestoneName}</$MilestoneName>
          <$MilestoneDeadline>
            <Icon name="calendar" fill="#6E7191" />
            <div>{milestone.deadline ? milestone.deadline : '완료일이 설정되지 않았습니다.'}</div>
          </$MilestoneDeadline>
        </$UpsideInfo>
        {milestone.content && <$MilestoneComment>{milestone.content}</$MilestoneComment>}
      </$MilestoneInfo>
      <$MilestoneControl>
        <$Buttons>
          <Button type="ghost" size="S">
            <Icon name="archive" fill="#4E4B66" />
            닫기
          </Button>
          <Button type="ghost" size="S" onClick={editButtonHandler}>
            <Icon name="edit" fill="#4E4B66" />
            편집
          </Button>
          <Button type="ghost" size="S">
            <Icon name="trash" fill="#FF3B30" />
            삭제
          </Button>
        </$Buttons>
        <$MilestoneProgress percent={calculatePercentage} />
        <$ProgressInfo>
          <$Percent>{`${calculatePercentage}%`}</$Percent>
          <$Issues>
            <$OpenIssue>{`열린 이슈 ${milestone.openIssue}`}</$OpenIssue>
            <$CloseIssue>{`닫힌 이슈 ${milestone.closeIssue}`}</$CloseIssue>
          </$Issues>
        </$ProgressInfo>
      </$MilestoneControl>
    </$MilestoneListItem>
  );
};

MilestoneListItem.propTypes = {
  milestone: PropTypes.object.isRequired,
  getNewMilestoneData: PropTypes.func.isRequired,
};

export default MilestoneListItem;
