import React from 'react';

const ComplexForm = () => {
  return (
    <form className='login-form h-fit'>
      <div className='flex flex-col items-center justify-center p-10'>
        <h1 className='h1-form'>Complex Signup Form</h1>
        <p className='p-form'>
          This is a complex form with many fields and validations.
        </p>
        <div className='input-box'>
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
        <div className='grid-form'>
          <div className='input-box'>
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
          <div className='input-box'>
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
        <div className='border w-full my-5 h-0.5 bg-white bg-opacity-50'></div>
        <div className='grid-form'>
          <div className='input-box'>
            <label htmlFor='name' className='label-form'>
              Name
            </label>
            <input
              className='input-form'
              type='text'
              name='name'
              id='name'
              placeholder='Name'
            />
          </div>
          <div className='input-box'>
            <label htmlFor='surname' className='label-form'>
              Surname
            </label>
            <input
              className='input-form'
              type='text'
              name='surname'
              id='surname'
              placeholder='Surname'
            />
          </div>
        </div>
        <fieldset className='fieldset-form'>
          <legend className='text-left text-base font-mono'>
            How did you find us?
          </legend>
          <div className=''>
            <input
              type='checkbox'
              id='google'
              name='acquisition'
              value='google'
            />
            <label htmlFor='google' className='ml-2'>
              Google
            </label>
          </div>

          <div className='control'>
            <input
              type='checkbox'
              id='friend'
              name='acquisition'
              value='friend'
            />
            <label htmlFor='friend' className='ml-2'>
              Referred by friend
            </label>
          </div>

          <div className='control'>
            <input
              type='checkbox'
              id='other'
              name='acquisition'
              value='other'
            />
            <label htmlFor='other' className='ml-2'>
              Other
            </label>
          </div>
        </fieldset>
        <div className='flex items-left justify-left border w-full my-5 text-white rounded-md p-5 text-base font-mono'>
          <input
            type='checkbox'
            name='terms-and-conditions'
            id='terms-and-conditions'
          />
          <label htmlFor='terms-and-conditions' className='ml-2'>
            I accept the terms and conditions.
          </label>
        </div>
        <div
          className='flex items-end justify-end gap-5 w-full my-5 text-white p-5 text-base font-mono'
          role='group'
        >
          <button
            type='submit'
            className='submit-button'
            onClick={(e) => {
              e.preventDefault();
              console.log('Form submitted.');
            }}
          >
            Submit
          </button>
          <button
            type='reset'
            className='reset-button'
            onClick={(e) => {
              e.preventDefault();
              console.log('Form reset.');
            }}
          >
            Reset
          </button>
        </div>
      </div>
    </form>
  );
};

export default ComplexForm;
