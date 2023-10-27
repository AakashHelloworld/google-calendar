import React from 'react'
import { Navbar } from '../Component/Navbar'
import { Task } from '../Component/Task'
import { CalendarContainer } from '../Component/CalendarContainer'

export default function CalendarPage(){
  return (
    <div className='h-screen w-screen grid grid-rows-6 grid-cols-8'>
        <Navbar/>
        <Task />
        <CalendarContainer/>
    </div>
  )
}
