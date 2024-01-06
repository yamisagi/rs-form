import React from 'react';

const ComplexForm = () => {
  return (
    <form className='login-form h-fit'>
      <div className='flex flex-col items-center justify-center p-10'>
        <h1 className='h1-form'>Complex Signup Form</h1>
        <p className='p-form'>
          This is a complex form with many fields and validations.
        </p>
        <div className='flex flex-col items-start justify-start w-full'>
          <label htmlFor='email' className='label-form'>
            Email
          </label>

          <input
            className='input-form'
            type='email'
            name='email'
            id='email'
            placeholder='Email'
          />
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 w-full'>
          <div className='flex flex-col items-center md:items-start justify-center md:justify-start'>
            <label htmlFor='password' className='label-form'>
              Password
            </label>
            <input
              className='input-form'
              type='password'
              name='password'
              id='password'
              placeholder='Password'
            />
          </div>
          <div className='flex flex-col items-center md:items-start justify-center md:justify-start'>
            <label htmlFor='password' className='label-form'>
              Confirm Password
            </label>
            <input
              className='input-form'
              type='password'
              name='password'
              id='password'
              placeholder='Confirm Password'
            />
          </div>
        </div>
      </div>
    </form>
  );
};

export default ComplexForm;
