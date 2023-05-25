import React, { useRef, useState, useMemo } from 'react';
import PropTypes from 'prop-types';

import { $Input, $Label, $TextInput } from './style';

// ! 추후에 prop에 helpText, iconName 추가
// labelText, placeholderText => direction = row
// labelText => direction = column
// placeholderText => direction = row
const Input = ({ id, labelText = '', placeholderText = '', disabled = false }) => {
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef(null);

  const focusHandler = () => setIsFocused(true);
  const blurHandler = () => setIsFocused(false);

  const hasValue = inputRef.current?.value.trim().length > 0;

  const styleType = useMemo(() => {
    if (labelText && placeholderText) return 'both';
    if (labelText && !placeholderText) return 'onlyLabel';
    if (!labelText && placeholderText) return 'onlyPlaceholder';

    return null;
  }, [labelText, placeholderText]);

  return (
    <React.Fragment>
      <$Input styleType={styleType} isFocused={isFocused} disabled={disabled}>
        {labelText && (
          <$Label htmlFor={id} styleType={styleType} hasValue={hasValue} isFocused={isFocused}>
            {labelText}
          </$Label>
        )}
        <$TextInput
          type="text"
          id={id}
          name={id}
          placeholder={placeholderText}
          ref={inputRef}
          hasValue={hasValue}
          isFocused={isFocused}
          onFocus={focusHandler}
          onBlur={blurHandler}
          disabled={disabled}
        />
      </$Input>
      {/* {helpText && <div>{helpText}</div>} */}
    </React.Fragment>
  );
};

Input.propTypes = {
  id: PropTypes.string.isRequired,
  // direction: PropTypes.oneOf(['row', 'column']),
  labelText: PropTypes.string,
  placeholderText: PropTypes.string,
  disabled: PropTypes.bool,
  // size: PropTypes.oneOf(['S', 'M']),
  // helpText: PropTypes.string,
};

export default Input;
