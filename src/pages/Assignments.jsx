import { useState } from "react";
import AssignmentTable from "../components/AssignmentTable";
import AddNewAssignment from "../components/AddNewAssignment";

const AssignmentManagement = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <>
            <div className="mt-10 p-2">
                <div className="flex flex-col justify-between items-center p-6">
                    <div className="w-full py-4 flex md:flex-row flex-col justify-between items-center">
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
                </div>
                {isOpen && <AddNewAssignment onClose={() => setIsOpen(!isOpen)} />}
            </div>
        </>
    )
}

export default AssignmentManagement;