import { Link } from 'react-router';
import {
    MdDashboard,
    MdAssignment,
    MdEvent,
    MdSchedule,
    MdSettings
} from 'react-icons/md';
import { useState } from 'react';
import ClassSchedules from './ClassSchedules';
import Upcoming from './Upcoming';
import Dashboard from '../pages/Dashboard';
import AssignmentManagement from '../pages/Assignments';
import AllNotes from './notes/AllNotes';
import Notes from '../pages/notes';
import ToDo from '../pages/ToDo';
import Resources from '../pages/Resources';

const DashboardNav = () => {
    const [isActive, setIsActive] = useState("Dashboard");

    const navItems = [
        { icon: <MdDashboard className="w-5 w-5" />, label: "Dashboard", path: '/dashboard' },
        { icon: <MdAssignment className="w-5 w-5" />, label: 'Assignments', path: '/assignments' },
        { icon: <MdAssignment className="w-5 w-5" />, label: 'Notes', path: '/notes' },
        { icon: <MdEvent className="w-5 w-5" />, label: 'ToDos', path: '/todos' },
        { icon: <MdSchedule className="w-5 w-5" />, label: 'Resources', path: '/resources' },
        { icon: <MdSettings className="w-5 w-5" />, label: 'Settings', path: '/settings' },
    ]
    return (
        <>
            <div className='flex flex-row gap-6'>
                <nav className='bg-white h-screen w-64 shadow-lg  left-0 top-16 hidden md:block lg:block'>
                    <div className='px-4 py-6'>
                        <ul className='space-y-5'>
                            {navItems.map((item, index) => (
                                <li key={index} onClick={() => setIsActive(item.label)}>
                                    <Link className='flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-green-900 hover:text-white rounded-lg transition-colors duration-200'>
                                        {item.icon}
                                        <span>{item.label}</span>
                                    </Link>

                                </li>
                            ))}
                        </ul>
                    </div>
                </nav>

                {/* Pages based on button click */}
                <div className='flex-1'>
                    {isActive === "Dashboard" && <Dashboard />}
                    {isActive === "Assignments" && <AssignmentManagement />}
                    {isActive === "Notes" && <Notes />}
                    {isActive === "ToDos" && <ToDo />}
                    {isActive === "Resources" && <Resources />}
                </div>
            </div>
        </>
    )
}
export default DashboardNav;