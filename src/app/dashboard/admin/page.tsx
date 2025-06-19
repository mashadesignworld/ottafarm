import CountChart from '@/components/CountChart';
import UserCard from '@/components/UserCard';
import AttendanceChart from '@/components/AttendanceChart';
import FinanceChart from '@/components/FinanceChart';
import EventCalendar from '@/components/EventCalendar';
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import React from 'react';

export default async function AdminPage() {
  const session = await getServerSession(authOptions);

  if (!session || session.role !== "admin") {
    redirect("/unauthorized"); // or redirect("/login")
  }

  return (
    <div className='p-4 flex gap-4 flex-col md:flex-row'>
      {/* Left */}
      <div className='w-full lg:w-2/3 flex flex-col gap-8'>
        {/* User Cards */}
        <div className='flex gap-4 justify-between flex-wrap'>
          <UserCard type="Employee" />
          <UserCard type="Manager" />
          <UserCard type="Admin" />
          <UserCard type="Supervisor" />
        </div>

        {/* Middle Charts */}
        <div className='flex gap-4 flex-col lg:flex-row'>
          <div className='w-full lg:w-1/3 h-[450px]'>
            <CountChart />
          </div>
          <div className='w-full lg:w-2/3 h-[450px]'>
            <AttendanceChart />
          </div>
        </div>

        {/* Bottom Chart */}
        <div className='w-full h-[500px]'>
          <FinanceChart />
        </div>
      </div>

      {/* Right */}
      <div className='w-full lg:w-1/3 flex flex-col gap-8'>
        <EventCalendar />
      </div>
    </div>
  );
}
