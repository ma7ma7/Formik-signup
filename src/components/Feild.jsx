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
