import { useState } from "react";
import { FiEdit2, FiShare2, FiTrash2 } from "react-icons/fi";
import { MdDateRange, MdEvent } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { deleteNote } from "../../redux/features/notesSlice";
import UpdateNote from "./UpDateNote";



const AllNotes = ({ searchValue }) => {
    const [show, setShow] = useState(null);
    const [isOpen, setIsOpen] = useState(false)
    const dispatch = useDispatch()

    // Get all notes from state
    const notes = useSelector((state) => state.notes.notes);

    // Filter notes based on search value
    const filteredNotes = notes.filter((note) =>
        note.title.toLowerCase().includes(searchValue.toLowerCase()) || note.description.toLowerCase().includes(searchValue.toLowerCase()) || note.subject.toLowerCase().includes(searchValue.toLowerCase()))

    const deleteNoteHandle = (id) => {
        dispatch(deleteNote(id));
    }
    const editHandler = (id) => {
        setIsOpen(!isOpen);
    }
    return (
        <>
            <div className="p-4 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {filteredNotes.map((item, index) => (
                    <div
                        onMouseEnter={() => setShow(item.id)}
                        onMouseLeave={() => setShow(null)}
                        key={index}
                        className="p-6 rounded-lg hover:shadow-lg border border-gray-300 transition-all duration-500 ease-in-out  h-82 md:h-72 overflow-hidden">
                        <div>
                            <h2 className="text-xl font-bold">{item.title}</h2>
                            <p className="mt-4 inline-block items-center text-center py-1 px-2 bg-green-800 text-xs text-white rounded-md">{item.subject}</p>
                            <p className="mt-4 text-gray-700">{item.description}</p>
                            <p className="mt-4 flex flex-row gap-2 text-gray-800"><span><MdEvent size={24} /></span>Updated {item.lastUpdated}</p>
                        </div>
                        {show === item.id && <div className="flex justify-between items-center gap-2 p-4 mt-4  transition-all duration-300">
                            <button
                                onClick={() => editHandler(item.id)}
                                className="flex gap-2 px-3 py-1 bg-white rounded-md border border-gray-300">
                                <FiEdit2 size={20} />
                                Edit
                            </button>
                            <button className="bg-white px-3 py-1 rounded-md border border-gray-300">
                                <FiShare2 size={20} />
                            </button>
                            <button
                                onClick={() => deleteNoteHandle(item.id)}
                                className="bg-white px-3 py-1 rounded-md border border-gray-300">
                                <FiTrash2 size={20} />
                            </button>
                        </div>}
                    </div>
                ))}
            </div>
            {
                isOpen && <UpdateNote onData={() => { setIsOpen(!isOpen), id }} />
            }
        </>
    )
}
export default AllNotes;