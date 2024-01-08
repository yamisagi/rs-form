import { useState } from 'react';
import Modal from './Modal';

const LoginValidate = () => {
  const [open, setOpen] = useState(false);
  const [inputValues, setInputValues] = useState({
    email: '',
    password: '',
  });

  const [didFocus, setDidFocus] = useState({
    email: false,
    password: false,
  });

  //! 1. Yöntem

  // Her keypress'te çalışacak şekilde bir kontrol için bu şekilde bir fonksiyon oluşturup, RegExp ile kontrol edebiliriz.
  // Fakat bu yöntemde her keypress'te çalıştığı için performans sorunu olabilir.
  // Ve bu yöntemde error mesajı çok erken gözükebilir. Bu da kullanıcıyı rahatsız edebilir.

  const validateInput = (identifier: string) => {
    // Her keypress'te çalışacak şekilde bir kontrol için bu şekilde bir fonksiyon oluşturup, RegExp ile kontrol edebiliriz.

    //? Email Regex için içerisi boşluk olmayan bir karakter, @ işareti, içerisi boşluk olmayan bir karakter, nokta, içerisi boşluk olmayan bir karakter.
    const emailReg = /\S+@\S+\.\S+/;

    //? Password Regex için en az 8 karakter, en az bir harf, en az bir sayı ve en az bir özel karakter olmalı.
    const passwordReg =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-])[A-Za-z\d!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]{8,}$/;

    // return inputValues.email === '' || re.test(email);

    // ! 2. Yöntem
    // Bu yöntemde ise inputValues.email === '' kontrolü yapmamıza gerek kalmadan bir state ve onBlur event'i ile kontrol edebiliriz. Ki görece daha kullanıcı dostu bir yöntemdir.

    // Bu şekilde bir kontrol yapmak için öncelikle bir state oluşturup, onBlur event'i ile focus'un inputtan çıkıp çıkmadığını kontrol edebiliriz ve bu şekilde bir kontrol yapabiliriz.

    // Ve tek bir fonksiyon ile tüm inputlar için kontrol yapabiliriz.

    if (identifier === 'email') {
      setDidFocus((prev) => ({
        ...prev,
        email: !emailReg.test(inputValues.email),
      }));
    }
    if (identifier === 'password') {
      setDidFocus((prev) => ({
        ...prev,
        password: !passwordReg.test(inputValues.password),
      }));
    }
  };

  const handleSimpleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(inputValues);
    // API'ye göndermek için kullanabiliriz.
    console.log(didFocus.email, didFocus.password);

    //! 3. Yöntem

    // Bu yöntemde submission kısmında bir kontrol yapabiliriz.
    // Yukarıdaki yöntemlerdeki gibi onBlur kullanmadan ref veya state ile submit kısmında validation için if kontrolü ile de yapılabilir, fakat bu yöntemde error message çok geç gözükebilir. Bu da kullanıcıyı rahatsız edebilir.
    // Örneğin, 
    // if (inputValues.email === '' || inputValues.password === '') {
    //    Eğer error message için bir state'imiz var ise burda da set edebiliriz.
    //   alert('Please enter a valid email or password.');
    //   return; // Sonraki işlemleri yapmaması için return koyabiliriz.
    // } 
    // API'ye işlemleri vs. 
    // Error message için bir state'imiz var ise burda da eski haline döndürebiliriz.



    //* 2. Yöntemin devamı;

    // Validation yapsak da yapmasak da, kullanıcı submit ettiğinde istek atılacaktır.
    // Bu yüzden burda bir kontrol yapmak mantıklı olacaktır.
    //! **********
    // Burda inputValues kısmını kontrol etmemizin mantıksal sebebi ise,
    // Başlangıçta didFocus.email ve didFocus.password false olarak tanımlı olduğu için, kullanıcı inputa hiçbir şey yazmadan submit ederse, form yine de submit olacaktır.
    // Bu da bizim istemediğimiz bir durumdur.

    if (
      inputValues.email !== '' &&
      !didFocus.email &&
      inputValues.password !== '' &&
      !didFocus.password
    ) {
      setInputValues({
        email: '',
        password: '',
      });
      setOpen(true);
    } else {
      alert('Please enter a valid email or password.');
    }
  };

  const handleOnChange = (e: any) => {
    e.preventDefault();
    setInputValues({
      ...inputValues,
      [e.target.name]: e.target.value,
    });

    // 2. Yönteme ek olarak, onBlur event'i ile focus tekrar inputa geldiğinde error mesajını kaldırabiliriz, ki bu da kullanıcı dostu bir yöntemdir.
    setDidFocus((prev) => {
      return {
        ...prev,
        [e.target.name]: false,
      };
    });
  };

  return (
    <>
      <Modal open={open} message='Form submitted.' setOpen={setOpen} />
      <form className='login-form' onSubmit={handleSimpleFormSubmit}>
        <div className='flex flex-col items-center justify-center w-50'>
          <h1 className='h1-form'>Login Validation</h1>
          <div className='flex flex-col'>
            <label htmlFor='email' className='label-form'>
              Email
            </label>
            <input
              id='email'
              type='text'
              placeholder='Email'
              name='email'
              onChange={handleOnChange}
              value={inputValues.email}
              className='input-form'
              onBlur={() => validateInput('email')}
            />
            {didFocus.email && (
              <p className='text-red-500 text-xs italic mb-2'>
                Please enter a valid email.
              </p>
            )}
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
              onBlur={() => validateInput('password')}
            />
            {didFocus.password && (
              <p className='text-red-500 text-xs italic mb-2'>
                Please enter a valid password.
              </p>
            )}
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
