import React, { useRef, useState, useMemo } from 'react';
import PropTypes from 'prop-types';

import { $Input, $Label, $TextInput } from './style';

// ! 추후에 prop에 helpText, iconName 추가
const Input = ({ id, value, onChange, labelText = '', placeholderText = '', disabled = false }) => {
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
          value={value}
          onChange={onChange}
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
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  labelText: PropTypes.string,
  placeholderText: PropTypes.string,
  disabled: PropTypes.bool,
  // helpText: PropTypes.string,
};

export default Input;
