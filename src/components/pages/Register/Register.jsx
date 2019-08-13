import React from 'react';

import RegisterStyle from './RegisterStyle';
import MasterPage from '../MasterPage';
import RegisterForm from '../../RegisterForm';

const displayName = 'Register';

export default function Register() {
  return (
    <MasterPage>
      <RegisterStyle>
        <RegisterForm />
      </RegisterStyle>
    </MasterPage>
  );
}

Register.displayName = displayName;
