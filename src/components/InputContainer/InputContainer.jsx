import React from 'react';
import PropTypes from 'prop-types';
import InputContainerStyle from './InputContainerStyle';
import Input from '../Input';
import ErrorText from '../ErrorText';
import LabelText from '../LabelText';

const displayName = 'InputContainer';

const propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  input: PropTypes.shape({
    name: PropTypes.string
  }).isRequired,
  meta: PropTypes.shape({
    touched: PropTypes.boolean,
    error: PropTypes.boolean
  }).isRequired
};

export default function InputContainer({ label, type, input, meta: { touched, error } }) {
  return (
    <InputContainerStyle>
      <label htmlFor={input.name}>
        <LabelText>{label}</LabelText>
      </label>
      <Input {...input} type={type} placeholder={label} />
      {touched && error && <ErrorText>{error}</ErrorText>}
    </InputContainerStyle>
  );
}

InputContainer.displayName = displayName;
InputContainer.propTypes = propTypes;
