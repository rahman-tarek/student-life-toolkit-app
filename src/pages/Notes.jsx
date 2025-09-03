import { FaSearch } from "react-icons/fa";
import AllNotes from "../components/notes/AllNotes";
import { FiPlus } from "react-icons/fi";

const Notes = () => {
    return (
        <>
            <div className="flex flex-col items-center p-6">
                <div>
                    <h1 className="text-4xl font-bold">Assignments & Exams</h1>
                    <p className="text-gray-600 text-lg">Manage your academic tasks and deadlines</p>
                </div>

                <div className="search">
                    <form action="">
                        <div className="search-wrapper">
                            <FaSearch className="search-icon" />
                            <input type="text" placeholder="Search..." />
                        </div>
                    </form>
                </div>
                <AllNotes />


            </div>
            {/* Add new notes */}
            <button className="fixed bottom-6 right-6 p-4 rounded-full bg-green-800 text-white cursor-pointer">
                <FiPlus size={25} />
            </button>
        </>
    )
}

export default Notes;