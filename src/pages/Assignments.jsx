import { useState } from "react";
import AssignmentTable from "../components/AssignmentTable";
import AddNewAssignment from "../components/AddNewAssignment";

const AssignmentManagement = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <>
            <div className="flex flex-col md:flex-row justify-between items-center p-6 items-center">
                <div>
                    <h1 className="text-2xl md:text-4xl font-bold">Assignments & Exams</h1>
                    <p className="text-gray-600 text-lg">Manage your academic tasks and deadlines</p>
                </div>
                <div>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="flex flex-row justify-between items-center mt-2 gap-2 py-1 px-4 rounded-md bg-green-800 text-white cursor-pointer">
                        <span className="text-lg">+</span>
                        <p>Add Assignment</p>
                    </button>
                </div>
            </div>
            <AssignmentTable />
            {
                isOpen && <AddNewAssignment isOpen={isOpen} />
            }
        </>
    )
}

export default AssignmentManagement;