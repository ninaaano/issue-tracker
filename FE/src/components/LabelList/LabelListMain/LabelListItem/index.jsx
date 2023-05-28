import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Button from '../../../common/Button';
import Icon from '../../../common/Icon';
import Label from '../../../common/Label';
import LabelTable from '../../LabelTable';
import { $LabelListItem, $LabelLayout, $LabelContent, $ButtonsLayout } from './style';

const LabelListItem = ({ name, content, backgroundColor, textColor = 'dark' }) => {
  const [isLabelTableOpened, setIsLabelTableOpened] = useState(false);
  const [isDeleteButtonClicked, setIsDeleteButtonClicked] = useState(false);

  const openLabelTableHandler = () => setIsLabelTableOpened(true);
  const closeLabelTableHandler = () => setIsLabelTableOpened(false);
  const deleteLabelHandler = () => {
    // TODO: 해당 label를 삭제하는 기능 구현
    setIsDeleteButtonClicked(true);
  };

  return isLabelTableOpened ? (
    <LabelTable
      type="edit"
      labelName={name}
      content={content}
      backgroundColor={backgroundColor}
      textColor={textColor}
      closeHandler={closeLabelTableHandler}
    />
  ) : (
    <$LabelListItem>
      <$LabelLayout>
        <Label height={24} name={name} textColor={textColor} backgroundColor={backgroundColor} />
      </$LabelLayout>

      <$LabelContent>{content || '레이블에 대한 설명이 없습니다.'}</$LabelContent>

      <$ButtonsLayout>
        <Button type="ghost" size="S" onClick={openLabelTableHandler}>
          <Icon name="edit" />
          <p>편집</p>
        </Button>

        <Button type="ghost" size="S" onClick={deleteLabelHandler}>
          <Icon name="trash" />
          <p>삭제</p>
        </Button>
      </$ButtonsLayout>
    </$LabelListItem>
  );
};

LabelListItem.propTypes = {
  name: PropTypes.string.isRequired,
  content: PropTypes.string,
  backgroundColor: PropTypes.string.isRequired,
  textColor: PropTypes.oneOf(['dark', 'light']).isRequired,
};

export default LabelListItem;
