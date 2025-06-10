"use client"
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Image from 'next/image';
const data = [
  {
    name: 'Mon',
    Present: 60,
    Absent: 40,
    
  },
  {
    name: 'Tue',
    Present: 30,
    Absent: 70,
    
  },
  {
    name: 'Wed',
    Present: 50,
    Absent: 50,
    
  },
  {
    name: 'Thu',
    Present: 100,
    Absent: 0,
     
  },
  {
    name: 'Fri',
    Present: 90,
    Absent: 10,
     
  },
  {
    name: 'Sat',
    Present: 80,
    Absent: 20,
     
  },
  {
    name: 'Sun',
    Present: 65,
    Absent: 35,
    
  },
];

const AttendanceChart = () => {
  return (
    <div className="h-full bg-white rounded-lg md p-4">
      <div className="flex items-center justify-between mb-4">
      <h2 className="text-xl font-semibold mb-4">Attendance Chart</h2>
      <Image src="/moreDark.png" alt="Attendance" width={20} height={20} className="rounded-full" />
      </div>
         <ResponsiveContainer width="100%" height="90%">
        <BarChart
          width={500}
          height={300}
          data={data}
          barSize={20}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke='#fff' />
          <XAxis dataKey="name" axisLine={false} tick={{fill:"#d1d5db"}} tickLine={false}/>
          <YAxis axisLine={false}/>
          <Tooltip  contentStyle={{borderRadius: "10px", borderColor:"lightgray"}}/>
          <Legend  align='left' verticalAlign='top' wrapperStyle={{paddingTop: "20px", paddingBottom: "40px"}}/>
          <Bar dataKey="Present" fill="#A8E6A3" activeBar={<Rectangle fill="#D32F2F" stroke="white" />}
          legendType="circle"
          radius={[10,10,0,0]}
           />
          <Bar dataKey="Absent" fill="#D32F2F" activeBar={<Rectangle fill="#A8E6A3" stroke="green" />} 
          legendType="circle"
          radius={[10,10,0,0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
   
  )
}

export default AttendanceChart