import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { FILTER_TYPE, FILTER_NAME } from '../../../../constants/dropdownMenu';
import Button from '../../../common/Button';
import Icon from '../../../common/Icon';
import DropDown from '../../../common/DropDown';
import { $IssueListMainHeader, $CheckBox, $LeftButton, $RightButton } from './style';

const IssueButton = ({ onClick, status, count = 0, active }) => {
  const STATUS_MAP = {
    open: { iconName: 'alertCircle', buttonText: `열린 이슈(${count})` },
    close: { iconName: 'trash', buttonText: `닫힌 이슈(${count})` },
  };

  return (
    <Button type="ghost" size="M" active={active} onClick={onClick}>
      <Icon name={STATUS_MAP[status].iconName} />
      {STATUS_MAP[status].buttonText}
    </Button>
  );
};

IssueButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  status: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  active: PropTypes.bool.isRequired,
};

const IssueListMainHeader = ({
  openCount,
  closeCount,
  user,
  label,
  milestone,
  openBtnHandler,
  closeBtnHandler,
  isOpened,
}) => {
  const [isSelected, setIsSelected] = useState(false);
  const checkBoxClickHandler = () => {
    setIsSelected((prev) => !prev);
  };

  return (
    <$IssueListMainHeader>
      <$LeftButton>
        {/* { TODO: 조건부 렌더링으로 헤더부분 갈아끼워야함 } */}
        <$CheckBox type="button" onClick={checkBoxClickHandler}>
          <Icon
            name={isSelected ? 'checkBoxActive' : 'checkBoxInitial'}
            fill={isSelected ? '#007AFF' : '#D9DBE9'}
          />
        </$CheckBox>
        <IssueButton status="open" count={openCount} onClick={openBtnHandler} active={isOpened} />
        <IssueButton status="close" count={closeCount} onClick={closeBtnHandler} active={!isOpened} />
      </$LeftButton>
      <$RightButton>
        {/* { TODO: 조건부 렌더링으로 헤더부분 갈아끼워야함 } */}
        <DropDown type={FILTER_TYPE.ASSIGNEE} name={FILTER_NAME.ASSIGNEE} menus={user} position="right" />
        <DropDown type={FILTER_TYPE.LABEL} name={FILTER_NAME.LABEL} menus={label} position="right" />
        <DropDown
          type={FILTER_TYPE.MILESTONE}
          name={FILTER_NAME.MILESTONE}
          menus={milestone}
          position="right"
        />
        <DropDown type={FILTER_TYPE.WRITER} name={FILTER_NAME.WRITER} menus={user} position="right" />
      </$RightButton>
    </$IssueListMainHeader>
  );
};

IssueListMainHeader.propTypes = {
  openCount: PropTypes.number,
  closeCount: PropTypes.number,
  user: PropTypes.array.isRequired,
  label: PropTypes.array.isRequired,
  milestone: PropTypes.array.isRequired,
  openBtnHandler: PropTypes.func.isRequired,
  closeBtnHandler: PropTypes.func.isRequired,
  isOpened: PropTypes.bool.isRequired,
};

export default IssueListMainHeader;
