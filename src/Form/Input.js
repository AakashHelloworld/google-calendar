import React from 'react'

export const Input = (props) => {
  const 

  {className,
  type,
  placeholder,
  changeHandler,
  value
  } = props;
  return (
    <input value={value} className={`mt-2 border rounded-md p-2 w-full ${className}`} onChange={changeHandler} type={type} placeholder={placeholder} />
  )
}
