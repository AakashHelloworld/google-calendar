import React from 'react'

const DaysComponent = ({dates, startDate, monthNames, days}) => {
  return (
    <>
    {dates.map((date, index) => (
        <div key={index} className={`border border-gray-300 h-[80px] flex flex-col items-center`}>
          <span className={`${date.getDate() === startDate.getDate() ? 'text-[#1a73e8]' : ''}`}>{days[date.getDay()]} </span>
         <div className='flex flex-col items-center'>
          <span className={`${date.getDate() === startDate.getDate() ? 'rounded-full w-10 h-10 bg-[#1a73e8] flex justify-center items-center text-white	' : ''}`}>{date.getDate()}</span>
          <span>{date.getDate() === 1 ? ` ${monthNames[date.getMonth()]}` : ''}</span>
          </div>
        </div>
      ))}
    </>
  )
}

export default DaysComponent