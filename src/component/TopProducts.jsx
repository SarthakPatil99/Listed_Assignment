import React from 'react'
import { ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'

const data = [
    {
        "name": "Basic Tees",
        "value": 400
    },
    {
        "name": "Custom Short Pants",
        "value": 300
    },
    {
        "name": "Super Hoodies",
        "value": 300
    }
];

const REDIAN = Math.PI / 180;
const COLORS = ['#00C49F', '#FFBB28', '#FF8042'];

const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5
    const x = cx + radius * Math.cos(-midAngle * REDIAN)
    const y = cy + radius * Math.sin(-midAngle * REDIAN)
    // let tempPercentage = (percent * 100).toFixed(0);
    // if (!percentage.includes(tempPercentage)) {
    //     percentage.push(tempPercentage);
    // }

    return (
        <text x={x} y={y} fill='white' textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${(percent * 100).toFixed(0)}%`}
        </text>
    )
}

export default function TopProducts() {

    return (
        <div className='h-[22rem] w-full bg-white py-8 rounded-3xl flex flex-col'>
            <div className='flex justify-between'>
                <strong className='text-gray-700 text-xl font-bold px-8'>Top Products</strong>
                <div className='mb-2 me-8 mt-2'>
                    <select id="countries" class="text-back text-sm rounded-lg block w-full bg-white active:border-none">
                        <option value="JF">Jan - Feb 2021</option>
                        <option value="FA">Feb - April 2021</option>
                        <option value="AM">April - May 2021</option>
                        <option selected value="MJ">May - June 2021</option>
                        <option value="JJ">June - July 2021</option>
                        <option value="JA">July - Aug 2021</option>
                        <option value="AS">Aug - Sep 2021</option>
                        <option value="SO">Sep - Oct 2021</option>
                        <option value="ON">Oct - Nov 2021</option>
                        <option value="ND">Nov - Dec 2021</option>
                    </select>
                </div>
            </div>
            <div className='h-full w-full flex flex-col md:flex-row lg:flex-row justify-between py-6 px-10'>
                <div className='w-full h-full flex-1 text-xs'>
                    <ResponsiveContainer width='100%' height='100%'>
                        <PieChart width={730} height={270}>
                            <Pie data={data}
                                label={renderCustomizedLabel}
                                nameKey="name"
                                cx="50%"
                                cy="50%"
                                labelLine={false}
                                outerRadius={105}
                                dataKey="value"
                                fill="#8884d8">
                                {data.map((_, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                        </PieChart>
                    </ResponsiveContainer>
                </div>
                <div className='flex-col h-full'>
                    <div className='mt-5 flex  gap-2'>
                        <div className='w-[15px] h-[15px] bg-[#00C49F] mt-1 rounded-full'></div>
                        <div className='flex-col'>
                            <p>Basic Tees</p>
                            <p className='text-xs text-gray-500'>{`40%`}</p>
                        </div>
                    </div>
                    <div className='mt-6 flex gap-2'>
                        <div className='w-[15px] h-[15px] bg-[#FFBB28] mt-1 rounded-full'></div>
                        <div className='flex-col'>
                            <p>Custom Short Pants</p>
                            <p className='text-xs text-gray-500'>{`30%`}</p>
                        </div>
                    </div>
                    <div className='mt-6 flex gap-2'>
                        <div className='w-[15px] h-[15px] bg-[#FF8042] mt-1 rounded-full'></div>
                        <div className='flex-col'>
                            <p>Super Hoodies</p>
                            <p className='text-xs text-gray-500'>{`30%`}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
