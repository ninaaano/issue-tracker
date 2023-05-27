import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Button from '../../common/Button';
import Icon from '../../common/Icon';
import TabButton from '../../common/TabButton';
import { $LabelListHeader } from './style';

const LabelListHeader = ({ labelCount, milestoneCount }) => {
  const [isAddLabelButtonClicked, setIsAddLabelButtonClicked] = useState(false);

  const labelFormHandler = () => {
    setIsAddLabelButtonClicked((previous) => !previous);
  };

  return (
    <$LabelListHeader>
      <TabButton labelCount={labelCount} milestoneCount={milestoneCount} currentButton="label" />
      <Button type={isAddLabelButtonClicked ? 'outline' : 'contained'} size="S" onClick={labelFormHandler}>
        <Icon name={isAddLabelButtonClicked ? 'xSquare' : 'plus'} />
        <p>{isAddLabelButtonClicked ? '닫기' : '레이블 추가'}</p>
      </Button>
    </$LabelListHeader>
  );
};

LabelListHeader.propTypes = {
  labelCount: PropTypes.number.isRequired,
  milestoneCount: PropTypes.number.isRequired,
};

export default LabelListHeader;
