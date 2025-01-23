"use client";
import Image from "next/image";
// chart from https://recharts.org/en-US/examples/SimpleRadialBarChart
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'Total',
        count: 3000,
        fill: 'white',
        },
    {
        name: 'Boys',
        count: 1700,
        fill: '#CFCEFF',
    },
    {
        name: 'Girls',
        count: 1300,
        fill: '#FAE27C',
    },

];

const CountChart = () => {
  return (
    <div className='bg-white rounded-xl w-full h-full p-4 '>
        {/* Title */}
        <div className='flex items-center justify-between'>
            <h1 className='text-lg font-semibold'>Students</h1>
            <Image src="/moreDark.png" alt="" width={20} height={20} />
        </div>
        {/* Chart */}
        <div className='relative w-full h-[70%]'>
            <ResponsiveContainer >
                <RadialBarChart cx="50%" cy="50%" innerRadius="40%" outerRadius="100%" barSize={30} data={data}>
                    <RadialBar
                        // label={{ position: 'insideStart', fill: '#fff' }}
                        background
                        dataKey="count"
                    />
                    {/* <Legend iconSize={10} layout="vertical" verticalAlign="middle"  /> */}
                </RadialBarChart>
            </ResponsiveContainer>
            <Image src="/maleFemale.png" alt="" width={50} height={50} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"/> 
        </div>
        {/* Bottom chart */}
        <div className='flex justify-center gap-16'>
            <div className="flex flex-col gap-1">
                <div className="w-5 h-5 bg-xSky rounded-full" />
                <h1 className="font-bold">1,234</h1>
                <h1 className="text-sx text-gray-300">boy 55%</h1>
            </div>
            <div className="flex flex-col gap-1">
                <div className="w-5 h-5 bg-xYellow rounded-full" />
                <h1 className="font-bold">1,534</h1>
                <h1 className="text-sx text-gray-300">girl 45%</h1>
            </div>
        </div>
    </div>
  )
}

export default CountChart