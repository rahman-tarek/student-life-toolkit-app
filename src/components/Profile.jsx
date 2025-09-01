import { FaUserCircle } from "react-icons/fa";

const Profile = () => {
    return (
        <div className="relative inline-block">
            <button className="p-2 text-gray-600 hover:text-gray-800 focus:outline-none transition-colors duration-200">
                <FaUserCircle className="w-6 h-6" />
            </button>
        </div>
    );
};

export default Profile;
