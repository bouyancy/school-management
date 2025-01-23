"use client"
import Image from 'next/image';
// charts from https://recharts.org/en-US/examples/SimpleBarChart
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Monday',
    attendance: 4100,
    absent: 400,
  },
  {
    name: 'Tuesday',
    attendance: 3000,
    absent: 600,
  },
  {
    name: 'Wednesday',
    attendance: 3400,
    absent: 800,
  },
  {
    name: 'Thursday',
    attendance: 3200,
    absent: 2700,
  },
  {
    name: 'Friday',
    attendance: 4800,
    absent: 1400,
  },
  {
    name: 'Saturday',
    attendance: 6900,
    absent: 800,
  },
  {
    name: 'Sunday',
    attendance: 5200,
    absent: 990,
  },
];


const AttendanceChart = () => {
  return (
    <div className='bg-white rounded-lg w-full h-full p-4'>
      <div className='flex items-center justify-between'>
        <h1 className='text-lg font-semibold mx-2'>Attendance</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>
      <ResponsiveContainer width="100%" height="90%">
        <BarChart
          width={500}
          height={300}
          data={data}
          barSize={20}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke='#ddd'/>
          <XAxis dataKey="name" axisLine={false} tick={{fill:"#d0d0db"}} tickLine={false}/>
          <YAxis axisLine={false} tick={{fill:"#d0d0db"}} tickLine={false}/>
          <Tooltip />
          <Legend align="left" verticalAlign='top' wrapperStyle={{paddingTop:"20px", paddingBottom:"40px"}}/>
          <Bar 
            dataKey="attendance" 
            fill="#CFCEFF" 
            legendType='circle' 
            activeBar={<Rectangle fill="#CFCEFF" stroke="blue" />} 
            radius={[10,10,0,0]}
          />
          <Bar
            dataKey="absent" 
            fill="#FAE27C" 
            legendType='circle' 
            activeBar={<Rectangle fill="#FAE27C" stroke="purple" />} 
            radius={[10,10,0,0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default AttendanceChart