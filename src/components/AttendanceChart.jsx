"use client"
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Mon',
    Present: 4000,
    Absent: 2400,
    
  },
  {
    name: 'Tue',
    Present: 3000,
    Absent: 1398,
    
  },
  {
    name: 'Wed',
    Present: 2000,
    Absent: 9800,
    
  },
  {
    name: 'Thu',
    Present: 2780,
    Absent: 3908,
     
  },
  {
    name: 'Fri',
    Present: 1890,
    Absent: 4800,
     
  },
  {
    name: 'Sat',
    Present: 2390,
    Absent: 3800,
     
  },
  {
    name: 'Sun',
    Present: 3490,
    Absent: 4300,
    
  },
];

const AttendanceChart = () => {
  return (
    <div className="w-full h-64 bg-red-200 rounded-lg shadow-md p-4">
      <h2 className="text-xl font-semibold mb-4">Attendance Chart</h2>
         <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Present" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
          <Bar dataKey="Absent" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default AttendanceChart