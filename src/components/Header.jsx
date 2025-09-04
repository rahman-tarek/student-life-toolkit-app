import Notifications from "./Notifications";
import Profile from "./Profile";
import Search from "./Search";

const Header = () => {
    return (
        <>
            <header className="sticky top-0 z-50 bg-white shadow-sm">
                <div className="px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center md:flex-row lg:flex-row justify-between h-16">
                        <div className="title">
                            <h1 className="text-xl sm:text-2xl md:text-2xl font-bold text-green-800 hover:text-green-700 transition-colors duration-200">Student Life Toolkit</h1>
                        </div>

                        {/* Search and actions */}
                        <div className="profile flex items-center gap-4">
                            <div className="hidden md:block">
                                <Search />
                            </div>
                            <Notifications />
                            <Profile />
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
export default Header;