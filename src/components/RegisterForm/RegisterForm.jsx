import React from 'react';
import PropTypes from 'prop-types';

import RegisterFormFirstPage from '../RegisterFormFirstPage';
import RegisterFormSecondPage from '../RegisterFormSecondPage';

const displayName = 'RegisterForm';

const propTypes = {
  page: PropTypes.number.isRequired,
  nextPage: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
};

const RegisterForm = ({ page, nextPage, handleSubmit }) => {
  return (
    <>
      {page === 1 && <RegisterFormFirstPage onSubmit={nextPage} />}
      {page === 2 && <RegisterFormSecondPage onSubmit={handleSubmit} />}
    </>
  );
};

export default RegisterForm;

RegisterForm.displayName = displayName;
RegisterForm.propTypes = propTypes;
