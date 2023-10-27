import React from 'react'

export const Button = (props) => {
    const 

    {className,
    children,
    clickHandler,
    } = props;
  return (
    <button onClick={clickHandler} className={`px-6 py-2 cursor-pointer rounded-full ${className}`}>{children}</button>
  )
}
