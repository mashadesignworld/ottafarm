import Image from 'next/image';

const Announcements = () => {
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

    return (
       <div className='flex flex-col'> {/* This parent div will arrange everything vertically */}
    <div className='flex items-center justify-between'> {/* This div holds the title and image */}
        <h1 className='text-xl font-semibold my-4'>Events</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
    </div>

    {/* This div holds the actual list of events */}
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
    )
}
export default  Announcements