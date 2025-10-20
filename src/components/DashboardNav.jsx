import { NavLink } from 'react-router';
import {
    MdDashboard,
    MdAssignment,
    MdEvent,
    MdSchedule,
    MdSettings
} from 'react-icons/md';
import { FaBook } from "react-icons/fa";

import { IoBookOutline } from "react-icons/io5";
import { act, useState } from 'react';
import ClassSchedules from './ClassSchedules';
import Upcoming from './Upcoming';
import Dashboard from '../pages/Dashboard';
import AssignmentManagement from '../pages/Assignments';
import AllNotes from './notes/AllNotes';
import Notes from '../pages/notes';
import ToDo from '../pages/ToDo';
import Resources from '../pages/Resources';
import Settings from '../pages/Settings';

const DashboardNav = () => {
    const activeLink = ({ isActive }) => `flex items-center gap-2 px-4 py-2 hover:bg-green-900 hover:text-white rounded-lg transition-colors duration-200 ${isActive ? "bg-green-800 text-white" : "hover:bg-gray-700"
        }`;

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
            <div className='pt-16'>
                <nav className='bg-white h-screen w-64 shadow-lg  left-0 top-16 hidden sm:hidden md:hidden lg:block'>
                    <div className='px-4 py-6'>
                        <ul className='space-y-5'>

                            <li>
                                <NavLink to='/' end className={activeLink}>
                                    <IoBookOutline className='w-5 h-5' />
                                    <span>Dashboard</span>
                                </NavLink>

                            </li>
                            <li>
                                <NavLink to="/assignments" className={activeLink}>
                                    <MdAssignment className='w-5 h-5' />
                                    <span>Assignments</span>
                                </NavLink>

                            </li>
                            <li>
                                <NavLink to="/notes" className={activeLink}>
                                    <MdEvent className='w-5 h-5' />
                                    <span>Notes</span>
                                </NavLink>

                            </li>
                            <li>
                                <NavLink to="/todos" className={activeLink}>
                                    <MdSchedule className='w-5 h-5' />
                                    <span>To-Do</span>
                                </NavLink>

                            </li>
                            <li>
                                <NavLink to="/resources" className={activeLink}>
                                    <FaBook className='w-5 h-5' />
                                    <span>Resources</span>
                                </NavLink>

                            </li>
                            <li>
                                <NavLink to="/settings" className={activeLink}>
                                    <MdSettings className='w-5 h-5' />
                                    <span>Settings</span>
                                </NavLink>

                            </li>

                        </ul>
                    </div>
                </nav>

                {/* Pages based on button click */}
                {/* <div className='flex-1'>
                    {isActive === "Dashboard" && <Dashboard />}
                    {isActive === "Assignments" && <AssignmentManagement />}
                    {isActive === "Notes" && <Notes />}
                    {isActive === "ToDos" && <ToDo />}
                    {isActive === "Resources" && <Resources />}
                    {isActive === "Settings" && <Settings />}
                </div> */}
            </div>
        </>
    )
}
export default DashboardNav;