import React from 'react';
import PropTypes from 'prop-types';
import CheckboxContainerStyle from './CheckboxContainerStyle';
import Input from '../Input';
import LabelText from '../LabelText';

const displayName = 'CheckboxContainer';

const propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  input: PropTypes.shape({
    name: PropTypes.string
  }).isRequired
};

export default function CheckboxContainer({ label, type, input }) {
  return (
    <CheckboxContainerStyle>
      <Input {...input} type={type} />
      <label htmlFor={input.name}>
        <LabelText>{label}</LabelText>
      </label>
    </CheckboxContainerStyle>
  );
}

CheckboxContainer.displayName = displayName;
CheckboxContainer.propTypes = propTypes;
