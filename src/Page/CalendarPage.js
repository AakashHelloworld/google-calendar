import React, {useState} from 'react'
import { Navbar } from '../Component/Navbar'
import { Task } from '../Component/Task'
import { CalendarContainer } from '../Component/CalendarContainer'

export default function CalendarPage(){
  const [value, setValue] = useState(new Date());

  return (
    <div className='h-screen w-screen grid grid-rows-6 grid-cols-8'>
        <Navbar/>
        <Task value={value} setValue={setValue} />
        <CalendarContainer value={value} setValue={setValue}/>
    </div>
  )
}
