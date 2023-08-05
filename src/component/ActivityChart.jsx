import React from 'react'
import { ResponsiveContainer, LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Line } from 'recharts'

const data = [
    {
        week: 'week1',
        Guests: 200,
        Users: 100,
    },
    {
        week: 'week2',
        Guests: 600,
        Users: 1200,
    },
    {
        week: 'week3',
        Guests: 300,
        Users: 250,
    },
    {
        week: 'week4',
        Guests: 50,
        Users: 1500,
    },
]

export default function ActivityChart() {
    return (
        <div className='h-[22rem] bg-white p-8 rounded-3xl flex flex-col flex-1'>
            <strong className='text-gray-700 text-xl font-bold'>Activities</strong>
            <div className='flex justify-between mt-2'>
                <div className='mb-2'>
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
                <div className='sm:w-[50%] lg:w-[14%] flex justify-between'>
                    <div className='w-[50%] flex'>
                        <div className='w-[10px] h-[10px] bg-[#E9A0A0] mt-1 rounded-full'></div>
                        <p className='text-sm  ms-2'>Guest</p>
                    </div>
                    <div className='w-[50%] flex'>
                        <div className='w-[10px] h-[10px] bg-[#9BDD7C] mt-1 rounded-full'></div>
                        <p className='text-sm  ms-2'>User</p>
                    </div>
                </div>
            </div>
            <div className='w-full h-full mt-3 flex-1 text-xs'>
                <ResponsiveContainer width='100%' aspect={3}>
                    <LineChart width={730} height={500} data={data}
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="week" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line dataKey="Guests" stroke="#E9A0A0" dot={false} strokeLinecap='round' strokeWidth={2.5} />
                        <Line dataKey="Users" stroke="#9BDD7C" dot={false} strokeLinecap='round' strokeWidth={2.5} />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}
