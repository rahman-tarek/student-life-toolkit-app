import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { MdDateRange, MdEvent } from "react-icons/md";
import Search from "../Search";

const initialTasks = [
    {
        id: "1",
        title: "Complete Math Assignment",
        description: "Solve problems 1-20 from Chapter 5",
        deadline: "2024-12-15",
        priority: "High",
        completed: false,
        createdAt: "2024-12-10",
    },
    {
        id: "2",
        title: "Study for Physics Exam",
        description: "Review chapters 8-12, focus on thermodynamics",
        deadline: "2024-12-20",
        priority: "High",
        completed: false,
        createdAt: "2024-12-10",
    },
    {
        id: "3",
        title: "Write History Essay",
        description: "2000 words on World War II impact",
        deadline: "2024-12-22",
        priority: "medium",
        completed: true,
        createdAt: "2024-12-08",
    },
    {
        id: "4",
        title: "Chemistry Lab Report",
        description: "Document experiment results and analysis",
        deadline: "2024-12-18",
        priority: "Medium",
        completed: false,
        createdAt: "2024-12-09",
    },
    {
        id: "5",
        title: "Read Literature Chapter",
        description: "Chapter 15-17 for next class discussion",
        deadline: "2024-12-16",
        priority: "Low",
        completed: true,
        createdAt: "2024-12-07",
    },
]
const AllTodos = () => {
    const [priority, setPriority] = useState("All");
    const [status, setStatus] = useState("All");
    const [searchTerm, setSearchTerm] = useState("");

    // Callback for child
    const handleSearch = (term) => {
        setSearchTerm(term);
    }

    // Filter tasks
    const filteredTasks = initialTasks.filter((item) => {
        const priorityTasks = priority === "All" || priority == item.priority;
        const newStatus = status === "Pending" ? false : true;
        const statusTasks = status === "All" || newStatus === item.completed;
        const searchedTasks = item.title.toLowerCase().includes(searchTerm.toLowerCase()) || item.description.toLowerCase().includes(searchTerm.toLowerCase());
        return priorityTasks && statusTasks && searchedTasks;
    })

    return (
        <>
            <div className="md:p-4 mt-8 rounded-lg border border-gray-300">
                <div className="flex flex-col md:flex-row justify-between items-center p-6 items-center">
                    <div>
                        <p className="text-gray-700 font-bold text-2xl">Tasks</p>
                    </div>
                    <div>
                        <button className="flex flex-col md:flex-row justify-between items-center gap-2 py-1 px-4 rounded-md bg-green-800 text-white cursor-pointer">
                            <span className="text-lg">+</span>
                            <p>Create Task</p>
                        </button>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row p-4 justify-center">
                    <Search onSearch={handleSearch} />
                    {/* Select status */}
                    <div className="p-4">
                        <select
                            value={status}
                            onChange={(e) => setStatus(e.target.value)}
                            className="w-60 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-800"
                        >
                            <option value="All">
                                All
                            </option>
                            <option value="Pending">
                                Pending
                            </option>
                            <option value="Completed">
                                Completed
                            </option>
                        </select>
                    </div>
                    {/* Select Priority */}
                    <div className="p-4">
                        <select
                            value={priority}
                            onChange={(e) => setPriority(e.target.value)}
                            className="w-60 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-800"
                        >
                            <option value="All">All</option>
                            <option value="High">
                                High
                            </option>
                            <option value="Medium">
                                Medium
                            </option>
                            <option value="Low">
                                Low
                            </option>
                        </select>
                    </div>
                </div>

                {/* Lists */}
                <div className="p-6 mt-4">
                    {filteredTasks.map((item, index) => (
                        <div className="w-full p-5 mt-4 rounded-lg border border-gray-300 hover:shadow-md">
                            <h3 className="text-gray-900 text-lg font-semibold">{item.title}</h3>
                            <p>{item.description}</p>
                            <div className="flex flex-row items-center gap-2 mt-2">
                                <p className="text-xsm bg-red-600 px-3 py-0.5 rounded-md text-xs text-white">{item.priority}</p>
                                <p className=" flex flex-row items-center gap-2 text-gray-800 rounded-md px-3 py-0.5 border border-gray-300 text-xs"><span><MdEvent size={18} /></span>Updated {item.deadline}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default AllTodos;