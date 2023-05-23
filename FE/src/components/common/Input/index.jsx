import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ id, labelText, placeholderText, helpText }) => {
  return (
    <React.Fragment>
      <label htmlFor={id}>{labelText}</label>
      <input type="text" id={id} name={id} placeholder={placeholderText} />
      {helpText && <div>{helpText}</div>}
    </React.Fragment>
  );
};

Input.propTypes = {
  id: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
  placeholderText: PropTypes.string,
  helpText: PropTypes.string,
};

export default Input;
