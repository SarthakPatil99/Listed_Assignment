import React from 'react'
import { Link } from 'react-router-dom'

export default function Schedule() {
    return (
        <div className='h-[22rem] w-full bg-white py-8 rounded-3xl flex flex-col'>
            <div className='flex justify-between px-8'>
                <strong className='text-gray-700 text-xl font-bold'>Top Products</strong>
                <Link to="/dashboard/schedules" type="button" class="text-gray-600 text-sm text-center flex items-center">
                    <p className='me-2'>See All</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="5" height="8" viewBox="0 0 5 8" fill="none">
                        <path d="M0.255719 7.7814C-0.0722496 7.4807 -0.097987 7.06206 0.255719 6.69446L3.0111 3.99918L0.255719 1.3039C-0.0979873 0.936305 -0.0722499 0.516977 0.255719 0.218345C0.582952 -0.0823565 1.13594 -0.0630456 1.44332 0.218345C1.7507 0.498356 4.75389 3.4564 4.75389 3.4564C4.83173 3.52684 4.89364 3.61127 4.93592 3.70464C4.97821 3.79802 5 3.89843 5 3.99987C5 4.10132 4.97821 4.20173 4.93592 4.2951C4.89364 4.38848 4.83173 4.4729 4.75389 4.54334C4.75389 4.54334 1.7507 7.50001 1.44332 7.7814C1.13594 8.06348 0.582952 8.0821 0.255719 7.7814Z" fill="#858585" />
                    </svg>
                </Link>
            </div>
            <div className='h-full w-full flex flex-col justify-between px-10 pt-4'>
                <div className='h-[47%] w-full border-l-[7px] border-l-[#9BDD7C] flex flex-col justify-between p-3'>
                    <div className='font-bold text-gray-500'>Meeting with suppliers from Kuta Bali</div>
                    <div className='text-sm text-gray-400'>14.00-15.00</div>
                    <div className='text-sm text-gray-400'>at Sunset Road, Kuta, Bali</div>
                </div>

                <div className='h-[47%] w-full border-l-[7px] border-l-[#6972C3] flex flex-col justify-between p-3'>
                    <div className='font-bold text-gray-500'>Check operation at Giga Factory 1</div>
                    <div className='text-sm text-gray-400'>18.00-20.00</div>
                    <div className='text-sm text-gray-400'>at Central Jakarta </div>
                </div>
            </div>
        </div>
    )
}
