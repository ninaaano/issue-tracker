import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

import Button from '../Button';
import Icon from '../Icon';
import { $TextArea, $Label, $TextAreaInput, $TextLength } from './style';

const TextArea = ({ id, value, onChange, labelText = '코멘트를 입력하세요.', disabled = false, size }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [textLength, setTextLength] = useState(0);
  const fileInputRef = useRef(null);

  const focusHandler = () => setIsFocused(true);
  const blurHandler = () => setIsFocused(false);

  const handleFileSelect = () => {
    fileInputRef.current.click();
  };

  // ! 부모 컴포넌트에서 prop으로 받을 예정
  const handleFileUpload = ({ target }) => {
    const selectedFile = target.files[0];

    // 선택한 파일을 업로드하는 로직을 추가
    console.log('Selected file:', selectedFile);
  };

  const hasValue = value.trim().length > 0;

  useEffect(() => {
    // ? 기획서에서 입력이 멈춘 후 2초 뒤에 글자수를 보여줘야 하지만, 사용자 입장에서 과연 편할까?
    // 지금 코드는 typing하는 동안 글자수를 보여주도록 구현
    const timerId = setTimeout(() => {
      setTextLength(value.length);
    });

    return () => {
      clearTimeout(timerId);
    };
  }, [value]);

  return (
    <$TextArea disabled={disabled} isFocused={isFocused} size={size}>
      <$Label htmlFor={id} hasValue={hasValue} isFocused={isFocused}>
        {labelText}
      </$Label>
      <$TextAreaInput
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        onFocus={focusHandler}
        onBlur={blurHandler}
        disabled={disabled}
      />
      {isFocused && <$TextLength>{`띄어쓰기 포함 ${textLength}자`}</$TextLength>}
      <input type="file" ref={fileInputRef} onChange={handleFileUpload} style={{ display: 'none' }} />
      <Button type="ghost" size="S" disabled={disabled} onClick={handleFileSelect}>
        <Icon name="paperclip" />
        파일 첨부하기
      </Button>
    </$TextArea>
  );
};

TextArea.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  labelText: PropTypes.string,
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(['S', 'L']),
};

export default TextArea;
