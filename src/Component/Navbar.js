import React from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'
export const Navbar = ({value, setSlide, slide}) => {
  return (
    <nav className="col-span-10 row-span-1 m-0 p-4 ">
    <div className='border-b border-[#dadce0] flex justify-between items-center pb-4'>
      <div className="flex space-x-4 items-center">
        <GiHamburgerMenu className='text-[22px] cursor-pointer' onClick={() => setSlide(!slide)}/>
        <img className='w-[40px] h-[40px]' src="https://ssl.gstatic.com/calendar/images/dynamiclogo_2020q4/calendar_30_2x.png" alt="logo Icon" />
        <span className='text-[22px]'>Calendar</span>
      </div>
      <div className="text-center">
        <h1 className="text-[22px]">Calendar | {value}</h1>
      </div>
      <div className="flex space-x-4">
        <img className='rounded-full w-[40px] h-[40px]' src="https://hips.hearstapps.com/hmg-prod/images/one-punch-man-1574953051.png?crop=0.9076871433366902xw:1xh;center,top&resize=1200:*" alt="Profile" />
      </div>
      </div>
    </nav>
  )
}
