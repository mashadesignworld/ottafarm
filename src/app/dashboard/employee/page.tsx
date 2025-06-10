import BigCalendar from '@/components/BigCalendar'
import EventCalendar from '@/components/EventCalendar'
import React from 'react'

const EmployeePage = () => {
  return (
    <div className='p-4 flex gap-4 flex-col xl:flex-row'>
      <div className='w-full xl:w-2/3'>
<div className='h-full bg-white rounded-md p-4 flex flex-col gap-4'>
  
  <h1 className='text-xl font-semibold'>Schedule</h1>
 
  <BigCalendar />

  </div>
      </div>
        <div className='w-full xl:w-1/3 flex flex-col gap-8'>
        <EventCalendar />
        
      </div>
      </div>
  )
}

export default EmployeePage