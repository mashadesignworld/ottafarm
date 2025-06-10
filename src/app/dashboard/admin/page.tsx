import CountChart from '@/components/CountChart';
import UserCard from '@/components/UserCard'
import AttendanceChart from '@/components/AttendanceChart';
import FinanceChart from '@/components/FinanceChart';
import React from 'react'
import EventCalendar from '@/components/EventCalendar';

const AdminPage = () => {
  return (
    <div className='p-4 flex gap-4 flex-col md:flex-row'>
      {/* Left */}
      <div className='w-full lg:w-2/3 flex flex-col gap-8'>
          {/* User Card */}
          <div className='flex gap-4 justify-between flex-wrap'>
            <UserCard type="Employee" />
            <UserCard type="Manager" />
            <UserCard type="Admin" />
            <UserCard type="Supervisor" />
          </div>
          {/* Middle Charts */}
          <div className='flex gap-4 flex-col lg:flex-row'>
             {/* Count Charts */}
             <div className='w-full lg:w-1/3 h-[450px]'> 
              <CountChart />
             </div>
             {/* Attendance charts */}
             <div className='w-full lg:w-2/3 h-[450px]'> 
                <AttendanceChart /> 
             </div>
          </div>
           {/* Bottom Charts */}
          <div className='w-full h-[500px]'>
            <FinanceChart />
          </div>
            </div>
      {/* Right */}
      <div className='w-full lg:w-1/3 flex flex-col gap-8'>
      <EventCalendar />
      </div>
      </div>
  )
}

export default AdminPage;