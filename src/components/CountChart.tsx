"use client"
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';
import Image from 'next/image';

const data = [
     {
    name: 'total',
    count: 100,
    fill: 'white',
  },
  {
    name: 'Contract',
    count: 45,
    fill: '#A8E6A3',
  },
  {
    name: 'Casual',
    count: 65,
     fill: '#D32F2F',
  },
  
];

const CountChart = () => {
  return (
    <div className='bg-white rounded-xl p-4 w-full h-full'>
        {/* Title */}
        <div className='flex justify-between items-center'>
            <h1 className='text-lg font-semibold'>Employees</h1>
            <Image src="/moreDark.png" alt="" width={20} height={20}/>
        </div>
        {/* Chart */}
        <div className='relative w-full h-[75%]'>
           <ResponsiveContainer>
        <RadialBarChart cx="50%" cy="50%" innerRadius="40%" outerRadius="100%" barSize={32} data={data}>
          <RadialBar
      
            background
           dataKey="count"
          />
          
        </RadialBarChart>
      </ResponsiveContainer> 
      <Image src="/maleFemale.png"  alt='' width={50} height={50} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        </div>
        {/* Bottom */}
        <div className='flex justify-center gap-16'>
            <div className='flex flex-col gap-1'>
             <div className='w-5 h-5 rounded-full bg-lamaRed'/>
               <h1 className='font-bold'> 1234</h1>
               <h2 className='text-xs text-grey'> Contract 25%</h2>
            </div>
               <div className='flex flex-col gap-1'>
             <div className='w-5 h-5 rounded-full bg-lamaGreen'/>
                 <h1 className='font-bold'> 1234</h1>
               <h2 className='text-xs text-grey'> Casual (75%)</h2>
            </div>
            </div>
            </div>
      
    
  );
};

export default CountChart;