"use client"
// calendar from react
// https://www.npmjs.com/package/react-calendar
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Image from 'next/image';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const events = [
    {
        id:1,
        title:"event 1",
        time:"9:00am - 12:00am",
        description:"description3",
    },
    {
        id:2,
        title:"event 2",
        time:"11:00am - 14:00am",
        description:"description2",
    },
    {
        id:3,
        title:"event 3",
        time:"13:00am - 17:00am",
        description:"description3",
    },
]

const EventCalendar = () => {
    const [value, onChange] = useState<Value>(new Date());
  return (
    <div className='bg-white p-4 rounded-md '>
        <Calendar onChange={onChange} value={value} />
        <div className='flex items-center justify-between'>
            <h1 className='text-xl font-semibold my-4 '>Events</h1>
            <Image src="/moreDark.png" alt="" width={20} height={20}/>
        </div>
        <div className='flex flex-col gap-4 '>
            {events.map(events=>(
                <div className='p-5 rounded-md border-2 border-gray-100 border-t-4 odd:border-t-xSky even:border-t-xPurple' 
                key={events.id}
                >
                    <div className='flex items-center justify-between'>
                        <h1 className='font-semibold text-gray-600'>{events.title}</h1>
                        <span className='text-xs text-gray-400'>{events.time}</span>
                    </div>
                    <p className='mt-2 text-gray-500 text-sm'>{events.description}</p>
                </div>
            ))}     
        </div>
    </div>
  )
}

export default EventCalendar
