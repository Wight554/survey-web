import React from 'react';
import { Link } from 'react-router-dom';

import LoginStyle from './LoginStyle';
import MasterPage from '../MasterPage';
import LoginForm from '../../LoginForm';
import LabelText from '../../LabelText';

const displayName = 'Login';

export default function Login() {
  return (
    <MasterPage>
      <LoginStyle>
        <LoginForm />
        {/* TODO: handle this some day */}
        <Link to="/">forgot password?</Link>
        <LabelText>or</LabelText>
        <Link to="/register">Register</Link>
      </LoginStyle>
    </MasterPage>
  );
}

Login.displayName = displayName;
