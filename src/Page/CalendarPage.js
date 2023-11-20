import React, {useEffect, useState} from 'react'
import { Navbar } from '../Component/Navbar'
import { Task } from '../Component/Task'
import { CalendarContainer } from '../Component/CalendarContainer'

export default function CalendarPage(){
  const [value, setValue] = useState(new Date());
  const [slide, setSlide] = useState(true);
  const [showModal, setShowModal] = useState(false); 
  const [currentSlected, setCurrentSlected] = useState("");
  

useEffect(() => {
  if(value){
    var original_str = value.toDateString();
    var date = new Date(original_str);
    var day = date.getUTCDate();
    var month = date.toLocaleString('default', { month: 'short' });
    var hour = date.getUTCHours();
    var ampm = hour >= 12 ? 'PM' : 'AM';
    hour = hour % 12;
    hour = hour ? hour : 12; 
    var new_str = day+1 + "_" + month + "_" + hour + ampm;
    setCurrentSlected(new_str);
  }
}, [value])

  return (
    <div className='h-screen w-screen grid grid-rows-6 grid-cols-8'>
        <Navbar value={`${value.toDateString()}`} setSlide={setSlide} slide={slide}/>
        <Task showModal={showModal} setShowModal={setShowModal}  value={value} setValue={setValue} slide={slide} setSlide={setSlide}/>
        { currentSlected &&
        <CalendarContainer showModal={showModal} setShowModal={setShowModal} value={value} setValue={setValue} currentSlected={currentSlected}/>
        }
    </div>
  )
}
