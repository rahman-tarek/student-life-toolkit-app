import { useState } from "react";
import Notifications from "./Notifications";
import Profile from "./Profile";
import Search from "./Search";
import Dashboard from "../pages/Dashboard";
import { IoBookOutline } from "react-icons/io5";
import MobileNavbar from "./MobileNavbar";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    return (
        <>
            <header className="fixed top-0 left-0 z-50 w-full bg-white/30 backdrop-blur-md border-b border-white/20 h-16 shadow-sm">
                <div className="px-4 sm:px-6 lg:px-8">
                    {/* Desktop View */}
                    <div className="flex items-center md:flex-row lg:flex-row justify-between h-16">
                        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            <IoBookOutline className="md:hidden w-5 h-5" />
                        </button>
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
                            <MobileNavbar onClose={() => setIsMenuOpen(!isMenuOpen)} />
                        )}
                    </div>
                </div>
            </header>
        </>
    )
}
export default Header;