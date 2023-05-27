import React, { useState } from 'react';
import PropTypes from 'prop-types';

import TextInput from '../../common/TextInput';
import Label from '../../common/Label';
import {
  $LabelTable,
  $LabelTableTitle,
  $LabelPreview,
  $LabelTableInputLayout,
  $LabelColorInputLayout,
  $LabelTableLayout,
} from './style';

const LabelTable = ({ labelName = '', content = '', backgroundColor = '', textColor = 'dark', type }) => {
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

  const ColorInputs = (
    <$LabelColorInputLayout>
      <TextInput
        id="labelBackgroundColor"
        value={labelInfo.backgroundColor}
        onChange={backgroundColorChangeHandler}
        labelText="배경 색상"
        placeholderText="입력해주세요"
      />
      <select name="labelTextColor" defaultValue="dark" onChange={textColorChangeHandler}>
        <option value="dark">dark text</option>
        <option value="light">light text</option>
      </select>
    </$LabelColorInputLayout>
  );

  return (
    <$LabelTable>
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
          {ColorInputs}
        </$LabelTableInputLayout>
      </$LabelTableLayout>
    </$LabelTable>
  );
};

LabelTable.propTypes = {
  labelName: PropTypes.string,
  content: PropTypes.string,
  backgroundColor: PropTypes.string,
  textColor: PropTypes.oneOf(['dark', 'light']),
  type: PropTypes.oneOf(['add', 'edit']).isRequired,
};

export default LabelTable;
