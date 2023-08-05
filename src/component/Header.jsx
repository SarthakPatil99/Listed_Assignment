import React from 'react'
import profile from '../assets/img/profile.png'

export default function Header() {
    return (
        <div className='flex justify-between h-[55px] min-h-[55px]'>
            <div className='flex justify-between w-[50%]'>
                <button data-drawer-target="#default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" className="inline-flex items-center text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                    <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                    </svg>
                </button>
                <div className='text-2xl font-bold mt-2'>Dashboard</div>
            </div>
            <div className='flex justify-between gap-7'>
                <div className='relative'>
                    <form>
                        <div className="hidden sm:flex relative">
                            <input type="search" id="default-search" className="text-sm h-7 w-[12rem] rounded-xl p-4 mt-1 bg-white text-gray-900" placeholder="Search..." required />
                            <button type="submit" className="text-black text-lg absolute font-medium right-0 bottom-0 rounded-xl px-4 py-2 bg-white">
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 13 12" fill="none">
                                    <circle cx="5" cy="5" r="4.5" stroke="#858585" />
                                    <line x1="8.35355" y1="7.64645" x2="12.3536" y2="11.6464" stroke="#858585" />
                                </svg>
                            </button>
                        </div>
                    </form>
                </div>
                <div className='flex flex-col mt-3'>
                    <button type="button" class="text-gray-600 text-sm text-center items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" viewBox="0 0 18 20" fill="none">
                            <path d="M16 11.586V8C16 4.783 13.815 2.073 10.855 1.258C10.562 0.52 9.846 0 9 0C8.154 0 7.438 0.52 7.145 1.258C4.185 2.074 2 4.783 2 8V11.586L0.293001 13.293C0.199958 13.3857 0.126171 13.4959 0.0758854 13.6172C0.0256001 13.7386 -0.000189449 13.8687 1.04767e-06 14V16C1.04767e-06 16.2652 0.105358 16.5196 0.292894 16.7071C0.480431 16.8946 0.734785 17 1 17H17C17.2652 17 17.5196 16.8946 17.7071 16.7071C17.8946 16.5196 18 16.2652 18 16V14C18.0002 13.8687 17.9744 13.7386 17.9241 13.6172C17.8738 13.4959 17.8 13.3857 17.707 13.293L16 11.586ZM16 15H2V14.414L3.707 12.707C3.80004 12.6143 3.87383 12.5041 3.92412 12.3828C3.9744 12.2614 4.00019 12.1313 4 12V8C4 5.243 6.243 3 9 3C11.757 3 14 5.243 14 8V12C14 12.266 14.105 12.52 14.293 12.707L16 14.414V15ZM9 20C9.6193 20.0008 10.2235 19.8086 10.7285 19.4502C11.2335 19.0917 11.6143 18.5849 11.818 18H6.182C6.38566 18.5849 6.76648 19.0917 7.27151 19.4502C7.77654 19.8086 8.3807 20.0008 9 20Z" fill="black" />
                        </svg>
                    </button>
                </div>
                <div>
                    <img src={profile} alt="" srcset="no img" className='w-[2.5rem] h-[2.5rem] rounded-3xl object-cover' />
                </div>
            </div>
        </div>
    )
}
