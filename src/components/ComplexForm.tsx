import React from 'react';

const ComplexForm = () => {
  // Bu kısımda görece olarak daha karmaşık bir form oluşturduk.
  // Ve önceki örnekteki gibi bir submit fonksiyonu oluşturduk.
  // Fakat bu sefer 1-2 adet inputla uğraşmak yerine daha fazla,
  // ve daha farklı inputları handle etmek zorunda kalacağız.

  // Bu yüzden Ref veya State kullanmak bu ve bunun gibi durumlarda
  // Çok mantıklı olmayacaktır. Çünkü her bir input için ayrı ayrı
  // State veya Ref oluşturmak yerine, bir form submit edildiğinde
  // Form içindeki tüm inputların değerlerini almak daha mantıklı olacaktır.

  // Bundan dolayı bize Browser tarafından sağlanan FormData API'sini kullanacağız.

  const handleComplexFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Form submit edildiğinde, form içindeki tüm inputların değerlerini almak için

    const formData = new FormData(e.currentTarget); // İçine form elementini veriyoruz.

    // Fakat burada bir problem var. Multiple inputların aynı name'e sahip olması.
    // Örneğin, password ve confirm password inputları aynı name'e sahip. Veya acquisition checkboxları.
    // Bu yüzden, form içindeki tüm inputların değerlerini almak için

    const acquisition = formData.getAll('acquisition'); // FormData.getAll() ile aynı name'e sahip tüm inputların değerlerini alıyoruz.

    // Ilk önce datayı toplayıp daha sonra bu değerleri merge edeceğiz.

    // ************

    // Form içindeki tüm inputların değerlerini almak için

    const data = Object.fromEntries(formData.entries()); // Object.fromEntries() ile FormData.entries()'i Object'e çeviriyoruz.

    // Ve acquisition değerlerini merge ediyoruz.

    const mergedData = { ...data, acquisition };

    // Veya şu şekilde de yapabiliriz.

    // data.acquisition = acquisition;

    console.log(mergedData);

    // Bu şekilde form içindeki tüm inputların değerlerini alabiliriz.
    // Multiple inputların aynı name'e sahip olması durumunda da merge edebiliriz.
    //! Bu yöntemde önemli olan nokta, Inputların 'name' attribute'unun olmasıdır. Aksi takdirde FormData API'si ile değerlerini alamayız.

    // ************

    // FormData API'si ile de formu resetlemek mümkün.

    // const form = e.currentTarget;
    // form.reset(); // Formu resetlemek için
  };

  return (
    <form onSubmit={handleComplexFormSubmit} className='login-form h-fit'>
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
        <div className='select-box' role='group'>
          <label
            htmlFor='role'
            className='text-left text-white text-base font-mono'
          >
            What is your role?
          </label>
          <select name='role' id='role' className='select-form'>
            <option value='' disabled>
              Select your role
            </option>
            <option value='student'>Student</option>
            <option value='teacher'>Teacher</option>
            <option value='admin'>Admin</option>
          </select>
        </div>
        <fieldset className='fieldset-form'>
          <legend className='text-left text-base font-mono'>
            How did you find us?
          </legend>
          <div className='font-extralight'>
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

          <div className='font-extralight'>
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

          <div className='font-extralight'>
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
          <button type='submit' className='submit-button'>
            Submit
          </button>
          {/* Reset butonu için type='reset' kullanıyoruz. 
              Tabi ki bu butonu kullanmak yerine, bir butonun type='button' olması ve onClick={handleReset} şeklinde bir fonksiyon yazmak da mümkün.
              Ayriyeten, FormData API'si ile de formu resetlemek mümkün.

          */}
          <button type='reset' className='reset-button'>
            Reset
          </button>
        </div>
      </div>
    </form>
  );
};

export default ComplexForm;
