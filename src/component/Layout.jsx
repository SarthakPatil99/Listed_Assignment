import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import Header from './Header'

export default function Layout() {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-12 h-screen w-full font-montserrat bg-neutral-100 overflow-hidden p-6'>
            <Sidebar />
            <div className="h-screen col-span-9 md:col-span-9 lg:col-span-10 flex flex-col flex-1 text-left sm:ps-2 lg:ps-7 sm:p-0 lg:p-2">
                <Header />
                <div className='p-1 pt-0 min-h-0 overflow-x-hidden overflow-y-scroll no-scrollbar pb-6'>
                    {<Outlet />}
                </div>
            </div>
        </div>
    )
}
