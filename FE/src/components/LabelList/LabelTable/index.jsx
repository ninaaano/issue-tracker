import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Button from '../../common/Button';
import Icon from '../../common/Icon';
import TextInput from '../../common/TextInput';
import Label from '../../common/Label';
import {
  $LabelTable,
  $LabelTableTitle,
  $LabelPreview,
  $LabelTableInputLayout,
  $LabelColorInputLayout,
  $TableButtonsLayout,
  $LabelTableLayout,
  $TextColorSelect,
  $ColorRandomButton,
} from './style';

const LabelTable = ({
  labelName = '',
  content = '',
  backgroundColor = '',
  textColor = 'dark',
  type,
  closeHandler,
}) => {
  const [labelInfo, setLabelInfo] = useState({
    labelName,
    content,
    backgroundColor: backgroundColor || '#EFF0F6',
    textColor,
  });

  const labelNameChangeHandler = ({ target }) => {
    setLabelInfo((prev) => {
      return { ...prev, labelName: target.value };
    });
  };

  const contentChangeHandler = ({ target }) => {
    setLabelInfo((prev) => {
      return { ...prev, content: target.value };
    });
  };

  const backgroundColorChangeHandler = ({ target }) => {
    setLabelInfo((prev) => {
      return { ...prev, backgroundColor: target.value };
    });
  };

  const textColorChangeHandler = ({ target }) => {
    setLabelInfo((prev) => {
      return { ...prev, textColor: target.value };
    });
  };

  return (
    <$LabelTable type={type}>
      <$LabelTableTitle>새로운 레이블 추가</$LabelTableTitle>

      <$LabelTableLayout>
        <$LabelPreview>
          <Label
            height={24}
            name={labelInfo.labelName}
            textColor={labelInfo.textColor}
            backgroundColor={labelInfo.backgroundColor}
          />
        </$LabelPreview>

        <$LabelTableInputLayout>
          <TextInput
            id="labelName"
            value={labelInfo.labelName}
            onChange={labelNameChangeHandler}
            labelText="레이블 이름"
            placeholderText="입력하세요"
          />

          <TextInput
            id="labelContent"
            value={labelInfo.content}
            onChange={contentChangeHandler}
            labelText="설명 (선택)"
            placeholderText="입력하세요"
          />

          <$LabelColorInputLayout>
            <TextInput
              id="labelBackgroundColor"
              value={labelInfo.backgroundColor}
              onChange={backgroundColorChangeHandler}
              labelText="배경 색상"
              placeholderText="입력해주세요"
            />
            <$ColorRandomButton type="button">
              <Icon name="refreshCcw" width={20} height={20} fill="#4E4B66" />
            </$ColorRandomButton>
            <$TextColorSelect
              name="labelTextColor"
              defaultValue={textColor}
              onChange={textColorChangeHandler}
            >
              <option value="dark">dark text</option>
              <option value="light">light text</option>
            </$TextColorSelect>
            <Icon name="chevronDown" width={24} height={24} fill="#6E7191" />
          </$LabelColorInputLayout>
        </$LabelTableInputLayout>
      </$LabelTableLayout>

      <$TableButtonsLayout>
        {type === 'edit' && (
          <Button type="outline" size="S" onClick={closeHandler}>
            <Icon name="xSquare" />
            <p>취소</p>
          </Button>
        )}

        {/* type="add"일 때 완료 버튼을 클릭한 경우, LabelListHeader의 [닫기 -> 레이블 추가] 버튼으로 변경  */}
        {/* 즉 LabelListHeader랑 type="add"인 LabelTable이 열린 유무인 상태를 공유해야 할 듯 */}
        <Button type="contained" size="S">
          <Icon name={type === 'add' ? 'plus' : 'edit'} />
          <p>{type === 'add' ? '완료' : '편집 완료'}</p>
        </Button>
      </$TableButtonsLayout>
    </$LabelTable>
  );
};

LabelTable.propTypes = {
  labelName: PropTypes.string,
  content: PropTypes.string,
  backgroundColor: PropTypes.string,
  textColor: PropTypes.oneOf(['dark', 'light']),
  type: PropTypes.oneOf(['add', 'edit']),
  closeHandler: PropTypes.func,
};

export default LabelTable;
