import React from 'react'

export const Navbar = () => {
  return (
    <nav className="col-span-10 row-span-1 border border-gray-300 flex justify-between items-center p-4">
      <div className="flex space-x-4 items-center">
        <img className='w-[40px] h-[40px]' src="https://ssl.gstatic.com/calendar/images/dynamiclogo_2020q4/calendar_30_2x.png" alt="logo Icon" />
        <span className='text-[22px]'>Calendar</span>
      </div>
      <div className="text-center">
        <h1 className="text-[22px]">Calendar | Oct-Nov 2021</h1>
      </div>
      <div className="flex space-x-4">
        <img src="https://via.placeholder.com/20" alt="Bell" />
        <img src="https://via.placeholder.com/20" alt="Message" />
        <img src="https://via.placeholder.com/20" alt="Profile" />
      </div>
    </nav>
  )
}
