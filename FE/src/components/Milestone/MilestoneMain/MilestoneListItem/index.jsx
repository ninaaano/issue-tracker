import React from 'react';
import PropTypes from 'prop-types';

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
import Icon from '../../../common/Icon';
import Button from '../../../common/Button';

const MilestoneListItem = ({ milestone }) => {
  const calculatePercentage = () => {
    const totalIssues = milestone.openIssue + milestone.closeIssue;

    return Math.ceil((milestone.closeIssue / totalIssues) * 100);
  };

  return (
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
          <Button type="ghost" size="S">
            <Icon name="edit" fill="#4E4B66" />
            편집
          </Button>
          <Button type="ghost" size="S">
            <Icon name="trash" fill="#FF3B30" />
            삭제
          </Button>
        </$Buttons>
        <$MilestoneProgress percent={calculatePercentage()} />
        <$ProgressInfo>
          <$Percent>{`${calculatePercentage()}%`}</$Percent>
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
};

export default MilestoneListItem;
