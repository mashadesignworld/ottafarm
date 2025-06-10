import BigCalendar from '@/components/BigCalendar'
import Announcements from '@/components/Announcements'
import React from 'react'

const ManagerPage = () => {
  return (
    <div className=' flex-1 p-4 flex gap-4 flex-col xl:flex-row'>
      <div className='w-full xl:w-2/3'>
<div className='h-full bg-white rounded-md p-4 flex flex-col gap-4'>
  
  <h1 className='text-xl font-semibold'>Schedule</h1>
 
  <BigCalendar />

  </div>
      </div>
        <div className='w-full xl:w-1/3 flex flex-col gap-8'>
        <Announcements />
        
      </div>
      </div>
  )
}

export default ManagerPage