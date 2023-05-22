import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Button from '../../../common/Button';
import Icon from '../../../common/Icon';
import DropDown from '../../../common/DropDown';
import { $IssueListMainHeader, $CheckBox, $LeftButton, $RightButton } from './style';

const IssueButton = ({ status, count = 0, active = false }) => {
  const STATUS_MAP = {
    open: { iconName: 'alertCircle', buttonText: `열린 이슈(${count})` },
    close: { iconName: 'trash', buttonText: `닫힌 이슈(${count})` },
  };

  return (
    <Button type="ghost" size="M" active={active}>
      <Icon name={STATUS_MAP[status].iconName} />
      {STATUS_MAP[status].buttonText}
    </Button>
  );
};

IssueButton.propTypes = {
  status: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  active: PropTypes.bool,
};

const FILTER_TYPE = {
  LABEL: { en: 'label', ko: '라벨' },
  MILESTONE: { en: 'milestone', ko: '마일스톤' },
  ASSIGNEE: { en: 'assignee', ko: '담당자' },
  WRITER: { en: 'writer', ko: '작성자' },
};

const menus = {
  label: [],
  milestone: [],
  assignee: [],
  writer: [],
};

const IssueListMainHeader = (props) => {
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
        <IssueButton status="open" active />
        <IssueButton status="close" />
      </$LeftButton>
      <$RightButton>
        {/* { TODO: 조건부 렌더링으로 헤더부분 갈아끼워야함 } */}
        <DropDown type={FILTER_TYPE.ASSIGNEE.ko} menus={menus.assignee} position="right" />
        <DropDown type={FILTER_TYPE.LABEL.ko} menus={menus.label} position="right" />
        <DropDown type={FILTER_TYPE.MILESTONE.ko} menus={menus.milestone} position="right" />
        <DropDown type={FILTER_TYPE.WRITER.ko} menus={menus.writer} position="right" />
      </$RightButton>
    </$IssueListMainHeader>
  );
};

IssueListMainHeader.propTypes = {};

export default IssueListMainHeader;
