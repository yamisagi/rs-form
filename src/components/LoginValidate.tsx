import { useState } from 'react';
import Modal from './Modal';
import useInput from '../hooks/useInput';
///! Her şeyden önce, kodumuzu daha okunabilir hale getirmek için ve tekrar tekrar aynı kodları yazmamak için componentler oluşturabiliriz. Fakat tüm notları bir arada tutmak için bu şekilde yazmam daha mantıklı olacaktır.

// Parçalanabilecek Componentler:
// 1. Input
// 2. Button
// 3. Form

// Örneğin Input componentini şu şekilde oluşturabilirdik;

// const Input = ({
//   label,
//   id,
//   error,
//   ...props
//
// }) => {
//   return (
//     <div className='flex flex-col'>
//       <label htmlFor={id} className='label-form'>
//         {label}
//       </label>
//       <input
//         id={id}
//         {...props}
//       />
//       {error && (
//         <p className='text-red-500 text-xs italic mb-2'>
//           {error}
//         </p>
//       )}
//     </div>
//   );
// };

const LoginValidate = () => {
  {/*
  //! useInput hook'u ile basit bir şekilde inputlar için validation yapabiliriz.
  //! Ve validation için ayrı ayrı state'ler oluşturmamıza gerek kalmaz.
  //! Ayrıca, her input type için özelleştirilmiş validationlar da yapabiliriz. 
  //------------------------------------------
  const {
    value: email,
    didBlur: emailDidBlur,
    hasError: emailHasError,
    onBlur: emailOnBlur,
    onChange: emailOnChange,
  } = useInput('', (value) => value.includes('@'));

  const {
    value: password,
    didBlur: passwordDidBlur,
    hasError: passwordHasError,
    onBlur: passwordOnBlur,
    onChange: passwordOnChange,
  } = useInput('', (value) => value.trim() !== ''); 

  //------------------------------------------
  */
}

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

  //! 4. Yöntem

  // HTML5'in kendi validation'ı ile de bu kontrolü yapabiliriz.
  // inputlar, optionlar, textarea'lar için required attribute'ü ile ekstra bir kontrol yapmamıza gerek kalmayacaktır. Ve tarayıcı tarafından kontrol edilecektir.
  // Örneğin, <input type="email" required /> veya <input type="password" required /> gibi.
  // Ayrıca HTML5'in kendi validation'ı ile minLength attribute'ü ile de kontrol yapabiliriz. Örneğin, <input type="password" minLength={8} /> gibi.
  // Ve iki validation'ı da birlikte kombinleyebiliriz.
  // Örneğin, iki password input'ı biri password, diğeri confirm password için olduğunu düşünelim. Bu durumda kendi validationumuzu yazmamız gerekir çünkü HTML5'in böyle bir validation'ı yoktur.

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
    // ----------
    //! Dipnot olarak 4. Yöntemde bahsettiğim gibi, HTML5'in kendi validation'ı ile de bu kontrolü yapabiliriz. Örneğin, required attribute'ü ile veya minLenght attribute'ü ile.

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
              type='email'
              placeholder='Email'
              name='email'
              onChange={handleOnChange}
              value={inputValues.email}
              className='input-form'
              onBlur={() => validateInput('email')}
              required
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
              required
              minLength={8} // Regex ile de kontrol edebiliriz.
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
