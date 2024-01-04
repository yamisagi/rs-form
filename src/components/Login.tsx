import { useState } from 'react';
import { Form } from 'react-router-dom';
import Modal from './Modal';
// Biz React-Router Form elemanını kullanmış olsaydık,
// Bizim için birçok işlemi otomatik olarak yapacaktı fakat "Best practice"
// Kısmını öğrenmek için biz bunu kendimiz yapacağız.

const Login = () => {
  const [open, setOpen] = useState(false);
  // React formlarında default olarak sayfa yenilenir.
  // Bu yüzden preventDefault() kullanıyoruz.
  // Ve daha efektif bir şekilde yönetmek ve two-way binding yapmak için
  // useState kullanıyoruz.

  //! 2. Yöntem:

  // useRef ile de kullanabiliriz.

  // const username = useRef<HTMLInputElement>(null);
  // const password = useRef<HTMLInputElement>(null);

  // const handleOnChange = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //
  //   Her ref bir obje döndürür. Bu yüzden null olup olmadığını kontrol etmemiz gerekir.
  //   if (username.current && password.current) gibi.
  //   Ardındam ref objesinin current özelliğine erişebiliriz.

  //   const usernameValue = username.current?.value;
  //   const passwordValue = password.current?.value;

  //   Ve bu şekilde eriştiğimiz veriler ile işlem yapabiliriz.
  //   Örneğin bir API'ye göndermek gibi.
  // };

  // Fakat şöyle bir handikapı var, eğer biz useRef ile bir form elemanına erişirsek,
  // Ve kullandıktan sonra silmek istersek, bunu tek tek yapmamız gerekir.

  // username.current = null;
  // password.current = null;

  // şeklinde.
  // Bu da çok tercih edilen bir yöntem değil React tarafında.

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
      <Modal open={open} message='Form submitted.' setOpen={setOpen} />
      <form
        className='login-form'
        onSubmit={(e) => {
          e.preventDefault();
          console.log(inputValues);
          handleOnChange(e);
          // Formu submit ettikten sonra inputları sıfırlamak için:
          setInputValues({
            username: '',
            password: '',
          });
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
            // ref={username}
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
            // ref={password}
            id='password'
            placeholder='Password'
            name='password'
            onChange={handleOnChange}
            value={inputValues.password}
            className='px-4 py-2 border border-gray-400 rounded-lg mb-4'
          />
          <button
            type='submit'
            className='submit-button'
            onClick={() => setOpen(true)}
          >
            Login
          </button>
        </div>
      </form>
    </>
  );
};

export default Login;
