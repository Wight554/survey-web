import React from 'react';
import { reduxForm, Field } from 'redux-form/immutable';

import Form from '../Form';

import InputContainer from '../InputContainer';

const displayName = 'LoginForm';

const handleLogin = () => {}; // TODO: do smth

const validate = values => {
  const errors = {};
  if (!values.get('username')) {
    errors.username = 'Required';
  } else if (values.get('username').length > 15) {
    errors.username = 'Must be 15 characters or less';
  }
  if (!values.get('password')) errors.password = 'Required';
  return errors;
};

const LoginForm = () => {
  return (
    <Form onSubmit={handleLogin}>
      <Field name="username" type="text" component={InputContainer} label="Username" />
      <Field name="password" type="password" component={InputContainer} label="Password" />
      <button type="submit">Login</button>
    </Form>
  );
};

export default reduxForm({
  form: 'login',
  validate
})(LoginForm);

LoginForm.displayName = displayName;
