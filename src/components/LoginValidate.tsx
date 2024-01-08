import { useState } from 'react';
import Modal from './Modal';

const LoginValidate = () => {
  const [open, setOpen] = useState(false);
  const [inputValues, setInputValues] = useState({
    username: '',
    password: '',
  });

  const handleOnChange = (e: any) => {
  if (
    inputValues.username === '' ||
    inputValues.password === '' ||
    inputValues.username.length < 3 ||
    (inputValues.password.length < 3 && !inputValues.username.includes('@'))
    // Tabii ki bu şekilde bir validation işlemi yapmamalıyız.
    // Çok amatörce bir validation işlemi, bunun için bir sürü
    // Validation kütüphanesi var. Formik & Yup gibi.
    // Ama biz bunu öğrenmek için yapıyoruz.
  ) {
    alert('Please fill in the blanks.');
  } else {
    setInputValues({
      ...inputValues,
      [e.target.name]: e.target.value,
    });
    setOpen(true);
  }
  };
  return (
    <>
      <Modal open={open} message='Form submitted.' setOpen={setOpen} />
      <form
        className='login-form'
        onSubmit={(e) => {
          e.preventDefault();
          console.log(inputValues);
          handleOnChange(e);
          setInputValues({
            username: '',
            password: '',
          });
        }}
      >
        <div className='flex flex-col items-center justify-center w-50'>
          <h1 className='h1-form'>Login Validation</h1>
          <div className='flex flex-col'>
            <label htmlFor='username' className='label-form'>
              Username
            </label>
            <input
              id='username'
              type='text'
              placeholder='Username'
              name='username'
              onChange={handleOnChange}
              value={inputValues.username}
              className='input-form'
            />
          </div>
          <div className='flex flex-col mb-5'>
            <label htmlFor='password' className='label-form'>
              Password
            </label>
            <input
              type='password'
              id='password'
              placeholder='Password'
              name='password'
              onChange={handleOnChange}
              value={inputValues.password}
              className='input-form'
            />
          </div>
          <button type='submit' className='submit-button'>
            Login
          </button>
        </div>
      </form>
    </>
  );
};

export default LoginValidate;
