import React from 'react';

interface Props {
  open: boolean;
  message: string;
  setOpen: (open: boolean) => void;
}

const Modal = ({ open, message, setOpen }: Props) => {
  return (
    <dialog
      open={open}
      onClick={(e) => {
        e.preventDefault();
        e.target === e.currentTarget && setOpen(false);
      }}
      className='bg-black bg-opacity-50 w-screen h-screen items-center justify-center z-0'
    >
      <div
        className={`
            dialog-modal 
        `}
      >
        <h1 className='text-4xl font-bold text-primary mb-10 text-white'>
          Success
        </h1>
        <p className='text-white text-opacity-80 mb-10 font-semibold text-center w-full'>
          {message}
        </p>
        <button
          className='submit-button w-1/2 mt-10'
          onClick={() => setOpen(false)}
        >
          Close
        </button>
      </div>
    </dialog>
  );
};

export default Modal;
