"use client"

import { time } from 'console';
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Image from 'next/image';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const events =[

    {
        id:1,
        title:"Meeting with John",
        time:"10:00 AM - 11:00 AM",
        description:"Discuss project updates and next steps.",
    },
    
    {
        id:1,
        title:"Meeting with Valerie",
        time:"11:00 AM - 12:00 AM",
        description:"Discuss project updates and next steps.",
    },
    
    {
        id:1,
        title:"Meeting with Shadrack",
        time:"1:00 PM - 2:00 PM",
        description:"Discuss project updates and next steps.",
    },
]


const EventCalendar = () => {
    const [value, onChange] = useState<Value>(new Date());

  return (
    <div className="p-4 bg-white rounded-md shadow-md">
   
            <Calendar onChange={onChange} value={value} />
    
            <div className="flex flex-col gap-4">
                {events.map(event => (
                    <div className='p-5 rounded-md border-2 border-gray-100 border-t-4
                 odd:border-t-red-300 even:border-t-green-300' key={event.id}>
                        <div className='flex items-center justify-between'>
                            <h1 className='semi-bold text-gray-600'>{event.title}</h1>
                            <span className='text-gray-300 text-xs'>{event.time}</span>
                        </div>
                        <p className='mt-2 text-gray-400 text-sm'>{event.description}</p>
                         </div>
                ))}

            </div>
    </div>
  );
}
export default EventCalendar;