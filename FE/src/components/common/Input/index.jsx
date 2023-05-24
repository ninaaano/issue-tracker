import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';

import { $Input } from './style';

// ! 추후에 prop에 helpText, iconName 추가
const Input = ({
  id,
  direction = 'row',
  labelText = '',
  placeholderText = '',
  disabled = false,
  heightType = 'S',
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef(null);

  const focusHandler = () => setIsFocused(true);
  const blurHandler = () => setIsFocused(false);

  const hasValue = inputRef.current?.value.trim().length > 0;

  return (
    <React.Fragment>
      <$Input
        direction={direction}
        heightType={heightType}
        labelText={labelText}
        hasValue={hasValue}
        isFocused={isFocused}
        disabled={disabled}
      >
        <label htmlFor={id}>{labelText}</label>
        <input
          type="text"
          id={id}
          name={id}
          placeholder={placeholderText}
          ref={inputRef}
          disabled={disabled}
          onFocus={focusHandler}
          onBlur={blurHandler}
        />
      </$Input>
      {/* {helpText && <div>{helpText}</div>} */}
    </React.Fragment>
  );
};

Input.propTypes = {
  id: PropTypes.string.isRequired,
  direction: PropTypes.oneOf(['row', 'column']),
  labelText: PropTypes.string,
  placeholderText: PropTypes.string,
  disabled: PropTypes.bool,
  heightType: PropTypes.oneOf(['S', 'M']),
  // helpText: PropTypes.string,
};

export default Input;
