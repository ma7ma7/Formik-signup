import React from 'react';
import { Formik, Form } from 'formik';

function SignUp() {
  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassowrd: '',
  };
  return (
    <Formik initialValues={initialValues}>
      {(formik) => (
        <div>
          {console.log(formik.initialValues)}
          <h1>Sign up </h1>
          <Form></Form>
        </div>
      )}
    </Formik>
  );
}

export default SignUp;
