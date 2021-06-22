# Formik

Easy way to handle forms library for react and react native.

### Setup

#### Installation

```shell
npm install --save formik

// or

yarn add formik
```

#### Use

use formik as render props pattern using `Formik` component

```react
import { Formik, Form} from 'formik'

function SignUp () {
  return (
  	<Formik>
    	(formik) => {
        <Form>
        </Form>
      }
    </Formik>
  )
}
```

`formik => formik` is an object returned by Formik that can help use building forms and handles error and states

#### how to set up initial values

```react
import { Formik, Form} from 'formik'

function SignUp () {
  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassowrd: '',
  };
  return (
  	<Formik initialValues={initialValues}>
			...
    </Formik>
  )
}
```

#### Use custom Feild

```react
import { useField } from 'formik';
function Field ({ label, ...props}) {
  const [field, meta] = useField(props)
  return {
    <>
    	<label httmlFor={field.name}></label>
    	<input {...field} {...props}/>
    </>
  }
}
```

#### Validation

```react
import * as Yup from 'yup';

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
  	<Formik validationSchema={validationSchema}>
			...
    </Formik>
)
```

#### Use valiation in inputs

```react
import React from 'react';
import { useField, ErrorMessage } from 'formik';

export default function Feild({ label, ...props }) {
  const [field, meta] = useField(props);
  return (
    <div className='mb-2'>
      <label htmlFor={field.name}>{label}</label>
      <input
        {...field}
        {...props}
        autoComplete='off'
        className={`form-control shadow-none ${
          meta.touched && meta.error && 'is-invalid'
        }`}
      />
      <ErrorMessage component='div' name={field.name} className='error' />{' '}
    </div>
  );
}

```

