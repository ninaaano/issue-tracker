import React, { useState } from 'react';
import PropTypes from 'prop-types';

import TextInput from '../../common/TextInput';
import Button from '../../common/Button';
import Icon from '../../common/Icon';
import { $MilestoneTable, $TableTitle, $MilestoneTitleLayout, $Buttons } from './style';

const MilestoneTable = ({ title = '', deadline = '', content = '', type = 'add', cancelClickHandler }) => {
  // 편집 페이지랑 같이 진행할 수 있도록
  const [milestoneInfo, setMilestoneInfo] = useState({
    title,
    deadline,
    content,
  });

  const titleChangeHandler = ({ target }) => {
    setMilestoneInfo((prev) => {
      return { ...prev, title: target.value };
    });
  };

  const deadlineChangeHandler = ({ target }) => {
    setMilestoneInfo((prev) => {
      return { ...prev, deadline: target.value };
    });
  };

  const contentChangeHandler = ({ target }) => {
    setMilestoneInfo((prev) => {
      return { ...prev, content: target.value };
    });
  };

  const editCompleteHandler = () => {
    // TODO: PATCH or PUT 로직 해야함.
    cancelClickHandler();
  };

  return (
    <$MilestoneTable>
      <$TableTitle>{type === 'add' ? '새로운 마일스톤 추가' : '마일스톤 편집'}</$TableTitle>
      <$MilestoneTitleLayout>
        <TextInput
          id="titleEdit"
          value={milestoneInfo.title}
          onChange={titleChangeHandler}
          labelText="마일스톤 이름 (필수)"
          placeholderText="입력하세요"
        />
        <TextInput
          id="deadlineEdit"
          value={milestoneInfo.deadline}
          onChange={deadlineChangeHandler}
          labelText="완료일 (선택)"
          placeholderText="YYYY.MM.DD"
        />
      </$MilestoneTitleLayout>
      <TextInput
        id="contentEdit"
        value={milestoneInfo.content}
        onChange={contentChangeHandler}
        labelText="설명 (선택)"
        placeholderText="입력하세요"
      />
      <$Buttons>
        {type === 'add' ? (
          <Button type="contained" size="S">
            <Icon name="plus" />
            완료
          </Button>
        ) : (
          <>
            <Button type="outline" size="S" onClick={cancelClickHandler}>
              <Icon name="xSquare" />
              취소
            </Button>
            <Button type="contained" size="S" onClick={editCompleteHandler}>
              <Icon name="edit" />
              편집 완료
            </Button>
          </>
        )}
      </$Buttons>
    </$MilestoneTable>
  );
};

MilestoneTable.propTypes = {
  title: PropTypes.string,
  deadline: PropTypes.string,
  content: PropTypes.string,
  type: PropTypes.string,
  cancelClickHandler: PropTypes.func,
};

export default MilestoneTable;
