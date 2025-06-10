"use client";
import Image from 'next/image';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Jan',
    Income: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Feb',
    Income: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Mar',
    Income: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Apr',
    Income: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'May',
    Income: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Jun',
    Income: 2390,
    Expenses: 3800,
    amt: 2500,
  },
  {
    name: 'Jul',
    Income: 3490,
    Expenses: 4300,
    amt: 2100,
  },
  {
    name: 'Aug',
    Income: 3490,
    Expenses: 4300,
    amt: 2100,
  },
  {
    name: 'Sep',
    Income: 3490,
    Expenses: 4300,
    amt: 2100,
  },
  {
    name: 'Oct',
    Income: 3490,
    Expenses: 4300,
    amt: 2100,
  },
  {
    name: 'Nov',
    Income: 3490,
    Expenses: 4300,
    amt: 2100,
  },
  {
    name: 'Dec',
    Income: 3490,
    Expenses: 4300,
    amt: 2100,
  },
];

const FinanceChart = () => {
  return (
    <div className="h-full w-full">
     <div className='flex justify-between items-center'>
                 <h1 className='text-lg font-semibold'>Finance Chart</h1>
                 <Image src="/moreDark.png" alt="" width={20} height={20}/>
             </div>
             <ResponsiveContainer width="100%" height="100%">
        <LineChart
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
          <Line type="monotone" dataKey="Income" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="Expense" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
export default FinanceChart;