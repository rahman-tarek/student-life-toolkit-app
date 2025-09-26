import { FaSearch } from "react-icons/fa";
import AllNotes from "../components/notes/AllNotes";
import { FiPlus } from "react-icons/fi";
import { useSelector } from "react-redux";
import AddNewNotes from "../components/AddNewNotes";
import { useState } from "react";

const Notes = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className="flex flex-col items-center p-6">
                <div>
                    <h1 className="text-4xl font-bold text-center">My Note</h1>
                    <p className="text-gray-600 text-md">Organize and manage your study notes</p>
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
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-6 right-6 p-4 rounded-full bg-green-800 text-white cursor-pointer">
                <FiPlus size={25} />
            </button>
            {/* Modal for adding new note */}
            {
                isOpen && <AddNewNotes onClose={() => setIsOpen(!isOpen)} />
            }
        </>
    )
}

export default Notes;