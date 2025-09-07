import { useState } from "react";
import { FaSearch } from "react-icons/fa";

// Sample assignments data
const assignmentsData = [
    {
        id: 1,
        title: "Calculus Problem Set 5",
        subject: "Mathematics",
        dueDate: "2024-12-15",
        status: "pending",
        type: "Assignment",
    },
    {
        id: 2,
        title: "Physics Lab Report",
        subject: "Physics",
        dueDate: "2024-12-12",
        status: "submitted",
        type: "Report",
    },
    {
        id: 3,
        title: "Chemistry Final Exam",
        subject: "Chemistry",
        dueDate: "2024-12-20",
        status: "pending",
        type: "Exam",
    },
    {
        id: 4,
        title: "History Research Paper",
        subject: "History",
        dueDate: "2024-12-10",
        status: "overdue",
        type: "Assignment",
    },
    {
        id: 5,
        title: "English Literature Essay",
        subject: "English",
        dueDate: "2024-12-18",
        status: "pending",
        type: "Essay",
    },
    {
        id: 6,
        title: "Biology Quiz",
        subject: "Biology",
        dueDate: "2024-12-14",
        status: "submitted",
        type: "Quiz",
    },
]

const AssignmentTable = () => {
    const [selectedSub, setSelectedSub] = useState("All");
    const [selectedStatus, setSelectedStatus] = useState("All");

    // Extract unique 
    const uniqueSubjects = ["All", ...new Set(assignmentsData.map((item) => item.subject))];
    const extractedStatus = ["All", ...new Set(assignmentsData.map(item => item.status))]

    // Filtering Logics
    const filteredAssignments = assignmentsData.filter((item) => {
        const statusMatch = selectedStatus === "All" || item.status === selectedStatus;
        const subjectMatch = selectedSub === "All" || item.subject === selectedSub;
        return statusMatch && subjectMatch;
    })

    return (
        <>
            <div className="flex flex-col md:flex-row p-4 rounded-lg shadow-sm border border-gray-300">
                <div className="search">
                    <form action="">
                        <div className="search-wrapper">
                            <FaSearch className="search-icon" />
                            <input type="text" placeholder="Search..." />
                        </div>
                    </form>
                </div>
                {/* Select status */}
                <div className="p-4">
                    <select
                        value={selectedStatus}
                        onChange={(e) => setSelectedStatus(e.target.value)}
                        className="w-60 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-800"
                    >

                        {extractedStatus.map((item, index) => (
                            <option value={item} key={index}>{item}</option>
                        ))}
                    </select>
                </div>
                {/* Select subject */}
                <div className="p-4">
                    <select
                        value={selectedSub}
                        onChange={(e) => setSelectedSub(e.target.value)}
                        className="w-60 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-800"
                    >

                        {uniqueSubjects.map((item, index) => (
                            <option value={item} key={item.id}>{item}</option>
                        ))}
                    </select>
                </div>
                <div className="p-4">
                    <p>Showing {filteredAssignments.length} of {assignmentsData.length} assignments</p>
                </div>
            </div>

            {/* Table */}
            <div className="p-6 mt-4  rounded-lg shadow">
                <div className="">
                    <h3 className="text-xl font-bold">Your Assignments</h3>
                    <p className="text-gray-600 text-md">Track all your academic tasks and deadlines</p>
                </div>
                <div className="w-full  mt-4 rounded-lg border border-gray-300">
                    <table className="w-full">
                        <thead className="p-2">
                            <tr className="p-2 overflow-x-auto bg-gray-100 text-gray-700 text-left">
                                <th className="p-2">Assignment</th>
                                <th className="p-2">Subject</th>
                                <th className="p-2">Type</th>
                                <th className="p-2">Due Date</th>
                                <th className="p-2">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredAssignments.map((item, index) => (
                                <tr className="border-b">
                                    <td className="p-3 border-b border-gray-300">{item.title}</td>
                                    <td className="p-3 border-b border-gray-300">{item.subject}</td>
                                    <td className="p-3 border-b border-gray-300 text-xs font-bold text-gray-700 px-1 rounded-sm">
                                        <p className="">{item.type}</p>
                                    </td>
                                    <td className="p-3 border-b border-gray-300">{item.dueDate}</td>
                                    <td className={`p-3 border font-semibold ${item.status === "pending"
                                        ? "text-yellow-600"
                                        : item.status === "submitted"
                                            ? "text-green-600 bg-green-100"
                                            : "text-red-600 bg-red-100"
                                        }`}>{item.status.charAt(0).toUpperCase() + item.status.slice(1)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default AssignmentTable;