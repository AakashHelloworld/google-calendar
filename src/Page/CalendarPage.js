import React, {useEffect, useState} from 'react'
import { Navbar } from '../Component/Navbar'
import { Task } from '../Component/Task'
import { CalendarContainer } from '../Component/CalendarContainer'

export default function CalendarPage(){
  const [value, setValue] = useState(new Date());
  const [slide, setSlide] = useState(true);
  const [showModal, setShowModal] = useState(false); 

useEffect(() => {
  if(value){
  console.log(value.toDateString(), "I am")
  }
}, [value])

  return (
    <div className='h-screen w-screen grid grid-rows-6 grid-cols-8'>
        <Navbar value={`${value.toDateString()}`} setSlide={setSlide} slide={slide}/>
        <Task showModal={showModal} setShowModal={setShowModal}  value={value} setValue={setValue} slide={slide} setSlide={setSlide}/>
        <CalendarContainer showModal={showModal} setShowModal={setShowModal} value={value} setValue={setValue}/>
    </div>
  )
}
