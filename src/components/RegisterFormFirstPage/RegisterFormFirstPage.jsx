import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form/immutable';

import Form from '../Form';

import InputContainer from '../InputContainer';

const displayName = 'RegisterFormFirstPage';

const validate = values => {
  const errors = {};
  if (!values.get('username')) {
    errors.username = 'Required';
  } else if (values.get('username').length > 15) {
    errors.username = 'Must be 15 characters or less';
  }
  if (!values.get('email')) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.get('email'))) {
    errors.email = 'Invalid email address';
  }
  if (!values.get('phone')) {
    errors.phone = 'Required';
  } else if (!/^[+]{1}[0-9]{11,14}$/i.test(values.get('phone'))) {
    errors.phone = 'Invalid phone number';
  }
  if (!values.get('fullname')) errors.fullname = 'Required';
  if (!values.get('password')) errors.password = 'Required';
  return errors;
};

const propTypes = {
  handleSubmit: PropTypes.func.isRequired
};

const RegisterFormFirstPage = ({ handleSubmit }) => {
  return (
    <Form onSubmit={handleSubmit}>
      <Field name="username" type="text" component={InputContainer} label="Username*" />
      <Field name="email" type="email" component={InputContainer} label="Email*" />
      <Field name="fullname" type="text" component={InputContainer} label="Full name*" />
      <Field name="phone" type="tel" component={InputContainer} label="Mobile number*" />
      <Field name="password" type="password" component={InputContainer} label="Password*" />
      <button type="submit">Next</button>
    </Form>
  );
};

export default reduxForm({
  form: 'Register',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate
})(RegisterFormFirstPage);

RegisterFormFirstPage.displayName = displayName;
RegisterFormFirstPage.propTypes = propTypes;
