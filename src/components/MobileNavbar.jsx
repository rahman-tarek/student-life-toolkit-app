import React, { useState } from 'react'
import { Link } from 'react-router';
import {
    MdDashboard,
    MdAssignment,
    MdEvent,
    MdSchedule,
    MdSettings
} from 'react-icons/md';
import { IoBookOutline } from "react-icons/io5";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';


const MobileNavbar = ({ onClose }) => {
    const [isActive, setIsActive] = useState("")
    return (
        <div className='mt-16 bg-white'>
            <Modal
                open={onClose}
                onClose={onClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className="absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2">
                    <nav className='bg-white h-screen w-64 shadow-lg  left-0 top-16 hidden sm:hidden md:hidden lg:block'>
                        <div className='px-4 py-6'>
                            <ul className='space-y-5'>

                                <li>
                                    <Link to='/' className={`flex items-center gap-2 px-4 py-2 ${isActive === '' ? "text-white bg-green-900" : "text-gray-700 bg-white"} hover:bg-green-900 hover:text-white rounded-lg transition-colors duration-200`}>
                                        <IoBookOutline className='w-5 h-5' />
                                        <span>Dashboard</span>
                                    </Link>

                                </li>
                                <li>
                                    <Link to="/assignments" className={`flex items-center gap-2 px-4 py-2 ${isActive === '' ? "text-white bg-green-900" : "text-gray-700 bg-white"} hover:bg-green-900 hover:text-white rounded-lg transition-colors duration-200`}>
                                        <MdAssignment className='w-5 h-5' />
                                        <span>Assignments</span>
                                    </Link>

                                </li>
                                <li>
                                    <Link to="/notes" className={`flex items-center gap-2 px-4 py-2 ${isActive === '' ? "text-white bg-green-900" : "text-gray-700 bg-white"} hover:bg-green-900 hover:text-white rounded-lg transition-colors duration-200`}>
                                        <MdAssignment className='w-5 h-5' />
                                        <span>Notes</span>
                                    </Link>

                                </li>
                                <li>
                                    <Link to="/todos" className={`flex items-center gap-2 px-4 py-2 ${isActive === '' ? "text-white bg-green-900" : "text-gray-700 bg-white"} hover:bg-green-900 hover:text-white rounded-lg transition-colors duration-200`}>
                                        <MdAssignment className='w-5 h-5' />
                                        <span>ToDos</span>
                                    </Link>

                                </li>
                                <li>
                                    <Link to="/resources" className={`flex items-center gap-2 px-4 py-2 ${isActive === '' ? "text-white bg-green-900" : "text-gray-700 bg-white"} hover:bg-green-900 hover:text-white rounded-lg transition-colors duration-200`}>
                                        <MdAssignment className='w-5 h-5' />
                                        <span>Resources</span>
                                    </Link>

                                </li>
                                <li>
                                    <Link to="/settings" className={`flex items-center gap-2 px-4 py-2 ${isActive === '' ? "text-white bg-green-900" : "text-gray-700 bg-white"} hover:bg-green-900 hover:text-white rounded-lg transition-colors duration-200`}>
                                        <MdSettings className='w-5 h-5' />
                                        <span>Settings</span>
                                    </Link>

                                </li>

                            </ul>
                        </div>
                    </nav>
                </Box>
            </Modal>
        </div>
    )
}

export default MobileNavbar