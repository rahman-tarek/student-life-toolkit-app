import AllTodos from "../components/todo/ALLTodos";
import TaskTracking from "../components/todo/TaskTracking";

const ToDo = () => {
    return (
        <>
            <div className="p-4">
                <div>
                    <h1 className="text-4xl font-bold">To-Do & Productivity</h1>
                    <p className="text-gray-600 text-lg">Manage your tasks and stay focused with the Pomodoro technique.</p>
                </div>
                <TaskTracking />
                <AllTodos />
            </div>
        </>
    )
}

export default ToDo;