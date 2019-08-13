import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form/immutable';

import Form from '../Form';

import CheckboxContainer from '../CheckboxContainer';

const displayName = 'RegisterFormSecondPage';

const propTypes = {
  handleSubmit: PropTypes.func.isRequired
};

const RegisterFormSecondPage = ({ handleSubmit }) => {
  return (
    <Form onSubmit={handleSubmit}>
      <Field name="java" type="checkbox" component={CheckboxContainer} label="Java" />
      <Field name="javascript" type="checkbox" component={CheckboxContainer} label="JavaScript" />
      <Field name="dotnet" type="checkbox" component={CheckboxContainer} label=".NET" />
      <Field name="typescript" type="checkbox" component={CheckboxContainer} label="TypeScript" />
      <Field name="android" type="checkbox" component={CheckboxContainer} label="Android" />
      <Field name="ios" type="checkbox" component={CheckboxContainer} label="iOS" />
      <button type="submit">Register</button>
    </Form>
  );
};

export default reduxForm({
  form: 'Register',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true
})(RegisterFormSecondPage);

RegisterFormSecondPage.displayName = displayName;
RegisterFormSecondPage.propTypes = propTypes;
