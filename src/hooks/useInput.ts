import { ChangeEvent, useCallback, useState } from 'react';

// Aşağıda oluşturduğumuz useInput hook'u, input elemanlarımız için kullanacağımız bir hook.
// Bu hook'u kullanarak input elemanlarımızın value, onChange ve onBlur değerlerini ayarlayabiliriz.
/// [LoginValidate](./src/hooks/LoginValidate.tsx) componentinde bu hook'u kullanarak input elemanlarımızın value, onChange ve onBlur değerlerini ayarlayabiliriz.
// Ayrıca bu hook'u kullanarak input elemanlarımızın hata durumlarını da kontrol edebiliriz.

const useInput = (
  initialValue: string,
  validationFn: (arg0: string) => boolean
) => {
  const [value, setValue] = useState(initialValue);
  const [didBlur, setDidBlur] = useState(false);

  const validate = validationFn(value);

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    setDidBlur(false);
  }, []);

const onBlur = useCallback(() => {
    setDidBlur(true);
}, []);

return {
    value,
    onChange,
    onBlur,
    didBlur,
    hasError: didBlur && !validate
};
};

export default useInput;
