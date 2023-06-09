import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Icon from '../../common/Icon';
import Button from '../../common/Button';
import TabButton from '../../common/TabButton';
import MilestoneAddTable from '../MilestoneTable';
import { $MilestoneHeader, $MilestoneHeaderLayout } from './style';

<<<<<<< HEAD
const MilestoneHeader = ({ labelCount = 0, milestoneCount = 0 }) => {
=======
const MilestoneHeader = ({ labelCount = 0, milestoneCount = 0, getNewMilestoneData }) => {
>>>>>>> parent of 54c88ca (remove: FE, iOS 파일 삭제)
  const [isAdding, setIsAdding] = useState(false);

  const addMilestoneHandler = () => {
    setIsAdding(true);
  };

  const cancelAddHandler = () => {
    setIsAdding(false);
  };

<<<<<<< HEAD
  const createButton = () => {
=======
  const createButton = (() => {
>>>>>>> parent of 54c88ca (remove: FE, iOS 파일 삭제)
    return isAdding ? (
      <Button type="outline" size="S" onClick={cancelAddHandler}>
        <Icon name="xSquare" />
        닫기
      </Button>
    ) : (
      <Button type="contained" size="S" onClick={addMilestoneHandler}>
        <Icon name="plus" />
        마일스톤 추가
      </Button>
    );
<<<<<<< HEAD
  };
=======
  })();
>>>>>>> parent of 54c88ca (remove: FE, iOS 파일 삭제)

  return (
    <$MilestoneHeaderLayout>
      <$MilestoneHeader>
        <TabButton labelCount={labelCount} milestoneCount={milestoneCount} currentButton="milestone" />
<<<<<<< HEAD
        {createButton()}
      </$MilestoneHeader>
      {isAdding && <MilestoneAddTable />}
=======
        {createButton}
      </$MilestoneHeader>
      {isAdding && (
        <MilestoneAddTable getNewMilestoneData={getNewMilestoneData} closeTableHandler={cancelAddHandler} />
      )}
>>>>>>> parent of 54c88ca (remove: FE, iOS 파일 삭제)
    </$MilestoneHeaderLayout>
  );
};

MilestoneHeader.propTypes = {
  labelCount: PropTypes.number.isRequired,
  milestoneCount: PropTypes.number.isRequired,
<<<<<<< HEAD
=======
  getNewMilestoneData: PropTypes.func.isRequired,
>>>>>>> parent of 54c88ca (remove: FE, iOS 파일 삭제)
};

export default MilestoneHeader;
