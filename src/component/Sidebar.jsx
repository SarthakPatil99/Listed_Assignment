import React from 'react'
import { DASHBOARD_SIDEBAR_LINKS, DASHBOARD_SIDEBAR_BOTTOM_LINKS } from '../lib/constants/navigation'
import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames';

const linkClasses = "flex gap-2 hover:text-white hover:font-bold"

export default function Sidebar() {
    return (
        <div id="default-sidebar" className="col-span-3 hidden sm:flex flex-col md:col-span-3 lg:col-span-2 bg-stone-950 w-full h-[94%] text-white rounded-3xl transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
            <div className='mx-auto h-full overflow-auto'>
                <div className="text-white text-4xl font-bold py-12">Board.</div>
                <div className='h-[75%] flex flex-col justify-between'>
                    <div>
                        {DASHBOARD_SIDEBAR_LINKS.map((item) => (
                            <SidebarLinks key={item.key} item={item} />
                        ))}
                    </div>
                    <div>
                        {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((item) => (
                            <SidebarBottomLinks key={item.key} item={item} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

function SidebarLinks({ item }) {
    const { pathname } = useLocation()
    return (
        <Link to={item.path} className={classNames(pathname === item.path ? 'font-bold' : linkClasses, linkClasses, 'py-3')}>
            {item.icon}
            {item.label}
        </Link>
    )
}

function SidebarBottomLinks({ item }) {
    return (
        <Link to={item.path} className={classNames(linkClasses, 'py-2 text-xs')}>
            {item.label}
        </Link>
    )
}