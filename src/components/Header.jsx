import { useState } from "react";
import Notifications from "./Notifications";
import Profile from "./Profile";
import Search from "./Search";
import Dashboard from "../pages/Dashboard";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    return (
        <>
            <header className="fixed top-0 left-0 z-50 w-full bg-white/30 backdrop-blur-md border-b border-white/20 h-16 shadow-sm">
                <div className="px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center md:flex-row lg:flex-row justify-between h-16">
                        <div className="title">
                            <h1 className="text-xl sm:text-2xl md:text-2xl font-bold text-green-800 hover:text-green-700 transition-colors duration-200">Student Life Toolkit</h1>
                        </div>

                        {/* Search and actions */}
                        <div className="hidden profile md:flex items-center gap-4">
                            <div className="hidden md:block">
                                <Search />
                            </div>
                            <Notifications />
                            <Profile />
                        </div>
                        {/* Mobile view */}
                        {/* <div className="md:hidden">
                            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                                <Profile />
                            </button>
                        </div> */}
                    </div>
                    <div>
                        {isMenuOpen && (
                            <nav className='bg-white h-screen w-64 shadow-lg  left-0 top-16 hidden sm:hidden md:hidden lg:block'>
                                <div className='px-4 py-6'>
                                    <ul className='space-y-5'>
                                        {navItems.map((item, index) => (
                                            <li key={index} onClick={() => setIsActive(item.label)}>
                                                <Link className={`flex items-center gap-2 px-4 py-2 ${isActive === item.label ? "text-white bg-green-900" : "text-gray-700 bg-white"} hover:bg-green-900 hover:text-white rounded-lg transition-colors duration-200`}>
                                                    {item.icon}
                                                    <span>{item.label}</span>
                                                </Link>

                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </nav>
                        )}
                    </div>
                </div>
            </header>
        </>
    )
}
export default Header;