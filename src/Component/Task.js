import React from 'react'
import {Button} from '../Form/Button'
import CalendarCmponent from './SubComponents/CalendarCmponent'

export const Task = ({value, setValue, slide}) => {
    const clickHandler = ()=>{
        console.log("Hello")
    }

  return (
    <>
    { slide &&
      <div className='col-span-2 row-span-5 transition-all duration-300 ease-in-out transform translate-x-0 opacity-100' style={{transitionProperty: 'width, opacity'}}>
        <div className='m-2'>
            <Button clickHandler={clickHandler} className={"bg-white flex items-center gap-x-1.5 shadow-md"}>
            <svg width="36" height="36" viewBox="0 0 36 36"><path fill="#34A853" d="M16 16v14h4V20z"></path><path fill="#4285F4" d="M30 16H20l-4 4h14z"></path><path fill="#FBBC05" d="M6 16v4h10l4-4z"></path><path fill="#EA4335" d="M20 16V6h-4v14z"></path><path fill="none" d="M0 0h36v36H0z"></path></svg>
            Create
            </Button>
        </div>
        <div className='flex justify-center'>
        <CalendarCmponent value={value} setValue={setValue} />
        </div>
    </div>

    }

    </>
  )
}
