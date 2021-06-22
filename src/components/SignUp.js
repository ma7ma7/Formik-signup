import React from 'react';
import { Formik, Form } from 'formik';
import Feild from './Feild';
import * as Yup from 'yup';

function SignUp() {
  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassowrd: '',
  };

  const validationSchema = Yup.object({
    firstName: Yup.string()
      .max(15, 'Must be 15 char or less')
      .min(5, 'At lest 5')
      .required('Name is Required'),
    lastName: Yup.string()
      .max(15, 'Must be 15 char or less')
      .required('Name is Required'),
    email: Yup.string()
      .email('Enter a valid email')
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 charaters')
      .required('Password is required'),
    confirmPassowrd: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Password must match')
      .required('Confirm password is required'),
  });
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => console.log(values)}
    >
      {(formik) => (
        <div>
          <h1>Sign up </h1>
          <Form>
            <Feild label='First Name' name='firstname' type='text' />
            <Feild label='Last Name' name='lastName' type='text' />
            <Feild label='Email' name='email' type='email' />
            <Feild label='Passowrd' name='password' type='password' />
            <Feild
              label='Confirm Passowrd'
              name='confirmPassowrd'
              type='password'
            />
            <button className='btn btn-dark mt-3' type='submit'>
              Register
            </button>
            <button className='btn btn-danger mt-3 ml-3' type='reset'>
              Reset
            </button>
          </Form>
        </div>
      )}
    </Formik>
  );
}

export default SignUp;
