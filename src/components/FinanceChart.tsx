"use client"
import Image from "next/image";
// charts from https://recharts.org/en-US/examples/SimpleLineChart
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Jan',
    income: 3000,
    expense: 1500,
  },
  {
    name: 'Feb',
    income: 4000,
    expense: 2000,
  },
  {
    name: 'Mar',
    income: 5000,
    expense: 2500,
  },
  {
    name: 'Apr',
    income: 4500,
    expense: 2250,
  },
  {
    name: 'May',
    income: 3800,
    expense: 1900,
  },
  {
    name: 'Jun',
    income: 4200,
    expense: 2100,
  },
  {
    name: 'Jul',
    income: 3700,
    expense: 1850,
  },
  {
    name: 'Aug',
    income: 4300,
    expense: 2150,
  },
  {
    name: 'Sep',
    income: 4500,
    expense: 2250,
  },
  {
    name: 'Oct',
    income: 5500,
    expense: 2750,
  },
  {
    name: 'Nov',
    income: 6000,
    expense: 3000,
  },
  {
    name: 'Dec',
    income: 6900,
    expense: 5350,
  },
  
];

const FinanceChart = () => {
  return (
    <div className="bg-white rounded-xl w-full h-full p-4">
        {/* Title */}
        <div className='flex items-center justify-between gap-4 '>
            <h1 className='text-lg font-semibold'>Financial Chart</h1>
            <Image src="/moreDark.png" alt="" width={20} height={20} />
        </div>
        {/* Chart */}
        <div className="flex h-full">
        <ResponsiveContainer width="100%" height="90%">
            <LineChart
                width={500}
                height={300}
                data={data}
                >
                <CartesianGrid strokeDasharray="3 3" stroke="#ddd" />
                <XAxis dataKey="name" axisLine={false} tick={{fill:"#D0D0D0"}} tickLine={false} tickMargin={10}/>
                <YAxis axisLine={false} tick={{fill:"#D0D0D0"}} tickLine={false} tickMargin={20}/>
                <Tooltip />
                <Legend align="center" verticalAlign='top' wrapperStyle={{paddingTop:"10px", paddingBottom:"30px"}}/>
                <Line type="monotone" dataKey="income" stroke="#CFCEFF" strokeWidth={3} />
                <Line type="monotone" dataKey="expense" stroke="#DDDDDD" strokeWidth={3}/>
            </LineChart>
        </ResponsiveContainer>
        </div>
    </div>
  )
}

export default FinanceChart