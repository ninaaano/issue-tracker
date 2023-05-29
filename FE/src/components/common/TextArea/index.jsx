import React, { useState, forwardRef } from 'react';
import PropTypes from 'prop-types';

import Button from '../Button';
import Icon from '../Icon';
import { $TextArea, $Label, $filesUploadButtonWrapper, $TextAreaInput, $TextLength } from './style';

const TextArea = forwardRef(
  ({ name: inputName, labelText = '코멘트를 입력하세요.', disabled = false, size }, ref) => {
    const [isFocused, setIsFocused] = useState(false);
    const [textLength, setTextLength] = useState(0);
    const [files, setFiles] = useState([]);
    const { commentRef, filesRef } = ref;

    const focusHandler = () => setIsFocused(true);
    const blurHandler = () => setIsFocused(false);

    const fileSelectHandler = () => {
      filesRef.current.click();
    };

    const filesUploadHandler = () => {
      const selectedFiles = filesRef.current?.files || [];

      setFiles(selectedFiles);
    };

    const inputChangeHandler = () => setTextLength(commentRef.current.value.length);

    const hasValue = commentRef.current?.value?.trim().length > 0;

    return (
      <$TextArea disabled={disabled} isFocused={isFocused} size={size}>
        <$Label htmlFor={inputName} hasValue={hasValue} isFocused={isFocused}>
          {labelText}
        </$Label>
        <$TextAreaInput
          id={inputName}
          name={inputName}
          ref={commentRef}
          onChange={inputChangeHandler}
          onFocus={focusHandler}
          onBlur={blurHandler}
          disabled={disabled}
        />
        {isFocused && <$TextLength>{`띄어쓰기 포함 ${textLength}자`}</$TextLength>}
        <input
          type="file"
          accept="image/*"
          multiple="multiple"
          ref={filesRef}
          onChange={filesUploadHandler}
          style={{ display: 'none' }}
        />
        <$filesUploadButtonWrapper>
          <Button type="ghost" size="S" disabled={disabled} onClick={fileSelectHandler}>
            <Icon name="paperclip" />
            파일 첨부하기
          </Button>
          {files.length > 0 && (
            <p>
              {Array.from(files)
                .map(({ name }) => name)
                .join(' ')}
            </p>
          )}
        </$filesUploadButtonWrapper>
      </$TextArea>
    );
  },
);

TextArea.propTypes = {
  name: PropTypes.string.isRequired,
  labelText: PropTypes.string,
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(['S', 'L']),
};

export default TextArea;
