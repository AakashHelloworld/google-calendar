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
    <input value={value} className={`mt-2 w-72 p-2 ${className}`} onChange={changeHandler} type={type} placeholder={placeholder} />
  )
}
