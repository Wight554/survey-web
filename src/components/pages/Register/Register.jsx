import React from 'react';
import PropTypes from 'prop-types';

import RegisterStyle from './RegisterStyle';
import MasterPage from '../MasterPage';
import RegisterForm from '../../RegisterForm';

const displayName = 'Register';

const propTypes = {
  handleSubmit: PropTypes.func.isRequired
};

export default function Register({ handleSubmit }) {
  return (
    <MasterPage>
      <RegisterStyle>
        <RegisterForm handleSubmit={handleSubmit} />
      </RegisterStyle>
    </MasterPage>
  );
}

Register.displayName = displayName;
Register.propTypes = propTypes;
