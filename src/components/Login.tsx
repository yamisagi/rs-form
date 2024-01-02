import { Form } from 'react-router-dom';

const Login = () => {
  return (
    <>
      <Form
        className='flex flex-col items-center justify-center h-screen text-black
         mx-auto w-full md:w-1/2 lg:w-1/3 bg-gradient-to-r from-black to-gray-900 bg-opacity-80 border border-gray-400 rounded-lg shadow-lg shadow-slate-50
      '
        onSubmit={(e) => {
          e.preventDefault();
          // TODO: Modal for login
        }}
      >
        <h1 className='text-4xl font-bold text-primary mb-10 text-white'>
          Login
        </h1>
        <input
          type='text'
          placeholder='Username'
          className='px-4 py-2 border border-gray-400 rounded-lg mb-4'
        />
        <input
          type='password'
          placeholder='Password'
          className='px-4 py-2 border border-gray-400 rounded-lg mb-4'
        />
        <button
          type='submit'
          className='px-4 py-2 bg-primary text-white rounded-lg w-40 
            hover:bg-primary-dark transition duration-300 ease-in-out bg-opacity-80
            focus:outline-none focus:bg-opacity-100 focus:ring-2 focus:ring-primary-dark
            bg-gradient-to-r from-gray-800 to-gray-900'
        >
          Login
        </button>
      </Form>
    </>
  );
};

export default Login;
