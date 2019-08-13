import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import LoginStyle from './LoginStyle';
import MasterPage from '../MasterPage';
import LoginForm from '../../LoginForm';
import LabelText from '../../LabelText';

const displayName = 'Login';

const propTypes = {
  handleSubmit: PropTypes.func.isRequired
};

export default function Login({ handleSubmit }) {
  return (
    <MasterPage>
      <LoginStyle>
        <LoginForm onSubmit={handleSubmit} />
        {/* TODO: handle this some day */}
        <Link to="/">forgot password?</Link>
        <LabelText>or</LabelText>
        <Link to="/register">Register</Link>
      </LoginStyle>
    </MasterPage>
  );
}

Login.displayName = displayName;
Login.propTypes = propTypes;
