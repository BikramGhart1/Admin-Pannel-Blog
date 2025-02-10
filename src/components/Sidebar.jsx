import { Link } from 'react-router-dom'

export default function Sidebar({}) {
    return (
        <aside className={`w-2/12 md:w-1/5 bg-gray-0 border-r border-solid border-gray-300 z-10 h-[calc(100vh-4rem)] pt-6 sticky top-16 flex flex-col  overflow-hidden `}>
            <Link to="/" className='sidebarNav'>
                <i className="fa fa-home sidebarNavIcon" aria-hidden="true"></i>
                <button className='sidebarNavButton'>HOME</button>
            </Link>
            <Link to="/create" className='sidebarNav'>
                <i className="fa fa-plus sidebarNavIcon" aria-hidden="true"></i>
                <button className='sidebarNavButton'>CREATE</button>
            </Link>
            <Link to="/comments" className='sidebarNav'>
                <i className="fa fa-comments sidebarNavIcon" aria-hidden="true"></i>
                <button className='sidebarNavButton'>COMMENTS</button>
            </Link>
        </aside>
    )
}
