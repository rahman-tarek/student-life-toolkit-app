import { useState } from "react";
import AllTodos from "../components/todo/ALLTodos";
import TaskTracking from "../components/todo/TaskTracking";
import CreateTask from "../components/todo/CreateTask";

const ToDo = () => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className="w-full mt-16">
                <div className="p-4 md:p-8">
                    <div>
                        <h1 className="text-4xl font-bold">To-Do & Productivity</h1>
                        <p className="text-gray-600 text-lg">Manage your tasks and stay focused with the Pomodoro technique.</p>
                    </div>
                    <TaskTracking />
                    <AllTodos onClose={() => setIsOpen(!isOpen)} />
                    {/* Modal for new task */}
                    {
                        isOpen && CreateTask({ open: isOpen, onClose: () => setIsOpen(!isOpen) })
                    }
                </div>
            </div>
        </>
    )
}

export default ToDo;