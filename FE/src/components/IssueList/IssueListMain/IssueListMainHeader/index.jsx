import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Button from '../../../common/Button';
import Icon from '../../../common/Icon';
// import DropDown from './DropDown';
import DropDown from '../../../common/DropDown';

import { $IssueListMainHeader, $CheckBox, $LeftButton, $RightButton, $DropDown } from './style';
import DropDownButton from './DropDownButton';

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

const TYPES = {
  LABEL: {
    TYPE: 'label',
    MENUS: [],
  },
  MILESTONE: {
    TYPE: 'milestone',
    MENUS: [],
  },
  ASSIGNEE: {
    TYPE: 'assignee',
    MENUS: [],
  },
  WRITER: {
    TYPE: 'writer',
    MENUS: [],
  },
};

const IssueListMainHeader = (props) => {
  const [isSelected, setIsSelected] = useState(false);

  const [isOpened, setIsOpened] = useState({
    label: false,
    milestone: false,
    assignee: false,
    writer: false,
  });

  const checkBoxClickHandler = () => {
    setIsSelected((prev) => !prev);
  };

  const dropDownOpenHandler = (e, type) => {
    // ! 왜 e.stopPropagation()으로 해결됐을까?
    // ! 리액트에서 이벤트 처리방법은 우리가 생각한거랑은 다름. syntheticEvent
    e.stopPropagation();
    setIsOpened((previous) => {
      const updatedState = Object.keys(previous).reduce((acc, key) => {
        const value = previous[key];

        if (key === type) acc[key] = !value;
        else acc[key] = false;

        return acc;
      }, {});

      return updatedState;
    });
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
        <DropDownButton name="담당자" onClick={(e) => dropDownOpenHandler(e, 'assignee')} />
        {isOpened.assignee && (
          <$DropDown
            type={TYPES.ASSIGNEE.TYPE}
            menus={TYPES.ASSIGNEE.MENUS}
            closeHandler={() => {
              setIsOpened((prev) => {
                return { ...prev, assignee: false };
              });
            }}
          />
        )}

        <DropDownButton name="레이블" onClick={(e) => dropDownOpenHandler(e, 'label')} />
        {isOpened.label && (
          <$DropDown
            type={TYPES.LABEL.TYPE}
            menus={TYPES.LABEL.MENUS}
            closeHandler={() => {
              setIsOpened((prev) => {
                return { ...prev, label: false };
              });
            }}
          />
        )}

        <DropDownButton name="마일스톤" onClick={(e) => dropDownOpenHandler(e, 'milestone')} />
        {isOpened.milestone && (
          <$DropDown
            type={TYPES.MILESTONE.TYPE}
            menus={TYPES.MILESTONE.MENUS}
            closeHandler={() => {
              setIsOpened((prev) => {
                return { ...prev, milestone: false };
              });
            }}
          />
        )}
        <DropDownButton name="작성자" onClick={(e) => dropDownOpenHandler(e, 'writer')} />
        {isOpened.writer && (
          <$DropDown
            type={TYPES.WRITER.TYPE}
            menus={TYPES.WRITER.MENUS}
            closeHandler={() => {
              setIsOpened((prev) => {
                return { ...prev, writer: false };
              });
            }}
          />
        )}
      </$RightButton>
    </$IssueListMainHeader>
  );
};

IssueListMainHeader.propTypes = {};

export default IssueListMainHeader;
