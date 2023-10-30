import React from 'react'

const Modal = ({children}) => {
  return (
    <div className='fixed z-10 inset-0 overflow-y-auto h-screen w-screen bg-[#000000b2] flex justify-center items-center'>
    <div className='pt-4 px-4 pb-20 bg-white rounded opacity-100'>
    {children}
    </div>
    </div>
  )
}

export default Modal