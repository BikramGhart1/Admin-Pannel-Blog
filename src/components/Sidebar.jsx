import React from 'react'

export default function Sidebar() {
    return (
        <aside className='w-1/5 bg-gray-100 border-r border-solid border-gray-300 z-10 h-[calc(100vh-4rem)] pt-6 sticky top-16 max-md:hidden flex flex-col  overflow-hidden'>
            <div className='sidebarNav'>
                <i className="fa fa-home sidebarNavIcon" aria-hidden="true"></i>
                <button className='sidebarNavButton'>HOME</button>
            </div>
            <div className='sidebarNav'>
                <i className="fa fa-plus sidebarNavIcon" aria-hidden="true"></i>
                <button className='sidebarNavButton'>CREATE</button>
            </div>
            <div className='sidebarNav'>
                <i className="fa fa-comments sidebarNavIcon" aria-hidden="true"></i>
                <button className='sidebarNavButton'>COMMENTS</button>
            </div>
            <div className='sidebarNav'>
                <i className="fa fa-trash sidebarNavIcon" aria-hidden="true"></i>
                <button className='sidebarNavButton'>DELETE</button>

            </div>
            <div className='sidebarNav'>
                <i className="fa fa-eye sidebarNavIcon" aria-hidden="true"></i>
                <button className='sidebarNavButton'>PREVIEW</button>
            </div>
        </aside>
    )
}
