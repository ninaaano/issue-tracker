import React from 'react';
import PropTypes from 'prop-types';

import Button from '../../../common/Button';
import Icon from '../../../common/Icon';
import Label from '../../../common/Label';
import { $LabelListItem, $LabelLayout, $LabelContent, $ButtonsLayout } from './style';

const LabelListItem = ({ name, content, backgroundColor, textColor = 'dark' }) => {
  return (
    <$LabelListItem>
      <$LabelLayout>
        <Label height={24} name={name} textColor={textColor} backgroundColor={backgroundColor} />
      </$LabelLayout>

      <$LabelContent>{content || '레이블에 대한 설명이 없습니다.'}</$LabelContent>

      <$ButtonsLayout>
        <Button type="ghost" size="S">
          <Icon name="edit" />
          <p>편집</p>
        </Button>

        <Button type="ghost" size="S">
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
