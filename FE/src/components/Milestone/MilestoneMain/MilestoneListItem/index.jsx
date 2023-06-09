import React, { useState } from 'react';
import PropTypes from 'prop-types';

<<<<<<< HEAD
=======
import useFetch from '../../../../hooks/useFetch';
import { MILESTONES } from '../../../../constants/api';

>>>>>>> parent of 54c88ca (remove: FE, iOS 파일 삭제)
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

<<<<<<< HEAD
const MilestoneListItem = ({ milestone }) => {
  const [isEdit, setIsEdit] = useState(false);

  const calculatePercentage = () => {
    const totalIssues = milestone.openIssue + milestone.closeIssue;

    return Math.ceil((milestone.closeIssue / totalIssues) * 100);
  };
=======
const MilestoneListItem = ({ milestone, getNewMilestoneData }) => {
  const [isEdit, setIsEdit] = useState(false);

  const { fetchData: changeMilestoneStatus } = useFetch(
    MILESTONES.PATCH_MILESTONE(milestone.milestoneId),
    'PATCH',
    {
      isOpened: !milestone.isOpened,
    },
    true,
  );

  const { fetchData: deleteMilestone } = useFetch(
    MILESTONES.DELETE_MILESTONE(milestone.milestoneId),
    'DELETE',
    {},
    true,
  );

  const calculatePercentage = (() => {
    const totalIssues = milestone.openIssue + milestone.closeIssue;

    if (totalIssues === 0) return 0;
    return Math.ceil((milestone.closeIssue / totalIssues) * 100);
  })();
>>>>>>> parent of 54c88ca (remove: FE, iOS 파일 삭제)

  const editButtonHandler = () => {
    setIsEdit(true);
  };

  const cancelEditHandler = () => {
    setIsEdit(false);
  };

<<<<<<< HEAD
  return isEdit ? (
    <MilestoneTable
      type="edit"
=======
  const changeMilestoneStatusHandler = async () => {
    // TODO: 닫겠습니까? 모달 구현하기.
    await changeMilestoneStatus();
    getNewMilestoneData();
  };

  const deleteMilestoneHandler = async () => {
    // TODO: 마일스톤을 삭제하시겠습니까? 모달 구현.
    await deleteMilestone();
    getNewMilestoneData();
  };

  return isEdit ? (
    <MilestoneTable
      type="edit"
      id={milestone.milestoneId}
>>>>>>> parent of 54c88ca (remove: FE, iOS 파일 삭제)
      title={milestone.milestoneName}
      deadline={milestone.deadline}
      content={milestone.content}
      cancelClickHandler={cancelEditHandler}
<<<<<<< HEAD
=======
      isOpened={milestone.isOpened}
      getNewMilestoneData={getNewMilestoneData}
>>>>>>> parent of 54c88ca (remove: FE, iOS 파일 삭제)
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
<<<<<<< HEAD
          <Button type="ghost" size="S">
            <Icon name="archive" fill="#4E4B66" />
            닫기
          </Button>
=======
          {milestone.isOpened ? (
            <Button type="ghost" size="S" onClick={changeMilestoneStatusHandler}>
              <Icon name="archive" fill="#4E4B66" />
              마일스톤 닫기
            </Button>
          ) : (
            <Button type="ghost" size="S" onClick={changeMilestoneStatusHandler}>
              <Icon name="milestone" fill="#4E4B66" />
              마일스톤 열기
            </Button>
          )}

>>>>>>> parent of 54c88ca (remove: FE, iOS 파일 삭제)
          <Button type="ghost" size="S" onClick={editButtonHandler}>
            <Icon name="edit" fill="#4E4B66" />
            편집
          </Button>
<<<<<<< HEAD
          <Button type="ghost" size="S">
=======
          <Button type="ghost" size="S" onClick={deleteMilestoneHandler}>
>>>>>>> parent of 54c88ca (remove: FE, iOS 파일 삭제)
            <Icon name="trash" fill="#FF3B30" />
            삭제
          </Button>
        </$Buttons>
<<<<<<< HEAD
        <$MilestoneProgress percent={calculatePercentage()} />
        <$ProgressInfo>
          <$Percent>{`${calculatePercentage()}%`}</$Percent>
=======
        <$MilestoneProgress percent={calculatePercentage} />
        <$ProgressInfo>
          <$Percent>{`${calculatePercentage}%`}</$Percent>
>>>>>>> parent of 54c88ca (remove: FE, iOS 파일 삭제)
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
<<<<<<< HEAD
=======
  getNewMilestoneData: PropTypes.func.isRequired,
>>>>>>> parent of 54c88ca (remove: FE, iOS 파일 삭제)
};

export default MilestoneListItem;
