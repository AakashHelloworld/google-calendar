import React, {useEffect, useState} from 'react'
import { Navbar } from '../Component/Navbar'
import { Task } from '../Component/Task'
import { CalendarContainer } from '../Component/CalendarContainer'

export default function CalendarPage(){
  const [value, setValue] = useState(new Date());
  const [slide, setSlide] = useState(false);
  const [showModal, setShowModal] = useState(false); 
  const [currentSlected, setCurrentSlected] = useState("");
  const [deviceType, setDeviceType] = useState("");

  

useEffect(() => {
  if(value){
    console.log(value);
    let day = value.getDate();
    let monthIndex = value.getMonth();
    let hours = value.getHours();
    let monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let month = monthNames[monthIndex];
    let period = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    let formattedDate = `${day}_${month}_${hours}${period}`;
    console.log(formattedDate);
    setCurrentSlected(formattedDate);
  }
}, [value])



useEffect(() => {
  const checkDeviceType = () => {
    setSlide(window.innerWidth <= 768 ? false : true);
  };
  checkDeviceType();
}, []);

  return (
    <div className='flex flex-col h-screen w-screen md:grid md:grid-rows-6 md:grid-cols-8 '>
        <Navbar value={`${value.toDateString()}`} setSlide={setSlide} slide={slide}/>
        <Task showModal={showModal} setShowModal={setShowModal}  value={value} setValue={setValue} slide={slide} setSlide={setSlide}/>
        { currentSlected &&
        <CalendarContainer showModal={showModal} setShowModal={setShowModal} value={value} setValue={setValue} currentSlected={currentSlected}/>
        }
    </div>
  )
}
