import React from 'react'
import DashboardGrid from './DashboardGrid'
import ActivityChart from './ActivityChart'
import TopProducts from './TopProducts'
import Schedule from './Schedule'

export default function Dashboard() {
    return (
        <div className='flex flex-col gap-4'>
            <DashboardGrid/>
            <ActivityChart/>
            <div className='flex flex-col md:flex lg:flex-row justify-between gap-4 lg:gap-6 w-full py-6'>
                <TopProducts />
                <Schedule/>
            </div>
        </div>
    )
}
