import { useState } from 'react';
import { Form } from 'react-router-dom';

const Login = () => {
  // React formlarında default olarak sayfa yenilenir.
  // Bu yüzden preventDefault() kullanıyoruz.
  // Ve daha efektif bir şekilde yönetmek ve two-way binding yapmak için
  // useState kullanıyoruz.
  const [inputValues, setInputValues] = useState({
    username: '',
    password: '',
  });

  const handleOnChange = (e: any) => {
    // console.log((e.currentTarget.elements[0] as HTMLInputElement).name) => username
    // console.log((e.currentTarget.elements[1] as HTMLInputElement).name) => password

    // Bu şekilde TypeScript ile form elemanlarına erişebiliriz kitabına uyarak ama,
    // Biz ne yapağız?  e:any şeklinde yazıp, e.target.name şeklinde yazıp kolayca erişebiliriz 🫶🏻

    setInputValues({
      ...inputValues,
      [e.target.name]: e.target.value,
      // Bunu şu şekilde de yapabilirdik:
      // Bir parametre daha alıp ona göre işlem yapabilirdik.
      // handleOnChange = (e:any, name:string) gibi ama bu şekilde daha kolay geliyor,
      // En azından bana öyle geliyor.
    });
  };
  return (
    <>
      <form
        className='flex flex-col items-center justify-center h-screen text-black
         mx-auto w-2/3 md:w-1/2 lg:w-1/3 bg-gradient-to-r from-black to-gray-900 bg-opacity-80 border border-gray-400 rounded-lg shadow-lg shadow-slate-50'
        onSubmit={(e) => {
          e.preventDefault();
          console.log(inputValues);
          handleOnChange(e);
        }}
      >
        <div className='flex flex-col items-center justify-center w-50'>
          <h1 className='text-4xl font-bold text-primary mb-10 text-white'>
            Login
          </h1>
          <label
            htmlFor='username'
            className='text-white
          text-opacity-80 mb-2 font-semibold text-left w-full'
          >
            Username
          </label>
          <input
            id='username'
            type='text'
            placeholder='Username'
            name='username'
            onChange={handleOnChange}
            value={inputValues.username}
            className='px-4 py-2 border border-gray-400 rounded-lg mb-4'
          />
          <label
            htmlFor='password'
            className='text-white
          text-opacity-80 mb-2 font-semibold text-left w-full'
          >
            Password
          </label>
          <input
            type='password'
            id='password'
            placeholder='Password'
            name='password'
            onChange={handleOnChange}
            value={inputValues.password}
            className='px-4 py-2 border border-gray-400 rounded-lg mb-4'
          />
          <button type='submit' className='submit-button'>
            Login
          </button>
        </div>
      </form>
    </>
  );
};

export default Login;
