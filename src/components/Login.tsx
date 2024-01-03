import { useState } from 'react';
import { Form } from 'react-router-dom';
// Biz React-Router Form elemanını kullanmış olsaydık, 
// Bizim için birçok işlemi otomatik olarak yapacaktı fakat "Best practice" 
// Kısmını öğrenmek için biz bunu kendimiz yapacağız.

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
    // onSubmit bizden e: React.FormEvent<HTMLFormElement> istiyor.
    // Ama biz React.FormEvent<HTMLFormElement> verirsek, e.target.name şeklinde
    // form elemanlarına erişemeyiz direkt olarak, aşağıdaki gibi erişebiliriz 👇🏻

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
        className='login-form'
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
