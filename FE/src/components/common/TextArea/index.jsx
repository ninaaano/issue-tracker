import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Button from '../Button';
import Icon from '../Icon';
import { $TextArea, $Label, $TextAreaInput } from './style';

const TextArea = ({
  id,
  value,
  onChange,
  labelText = '코멘트를 입력하세요.',
  disabled = false,
  heightType,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const focusHandler = () => setIsFocused(true);
  const blurHandler = () => setIsFocused(false);

  const hasValue = value.trim().length > 0;

  return (
    <$TextArea disabled={disabled} isFocused={isFocused} heightType={heightType}>
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
      <Button type="ghost" size="S" disabled={disabled}>
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
  heightType: PropTypes.oneOf(['S', 'L']),
};

export default TextArea;
