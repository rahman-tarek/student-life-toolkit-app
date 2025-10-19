const initialTasks = [
    {
        id: "1",
        title: "Complete Math Assignment",
        description: "Solve problems 1-20 from Chapter 5",
        deadline: "2024-12-15",
        priority: "high",
        completed: false,
        createdAt: "2024-12-10",
    },
    {
        id: "2",
        title: "Study for Physics Exam",
        description: "Review chapters 8-12, focus on thermodynamics",
        deadline: "2024-12-20",
        priority: "high",
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
        priority: "medium",
        completed: false,
        createdAt: "2024-12-09",
    },
    {
        id: "5",
        title: "Read Literature Chapter",
        description: "Chapter 15-17 for next class discussion",
        deadline: "2024-12-16",
        priority: "low",
        completed: true,
        createdAt: "2024-12-07",
    },
]

const ToDoProgress = () => {
    // total task
    const total = initialTasks.length;
    // completed tasks
    const completed = initialTasks.filter(item => item.completed === true).length;
    // not completed tasks
    const pending = initialTasks.filter(item => item.completed === false).length;
    // Percentage of completed tasks
    const completionRate = (completed / total) * 100;
    return (
        <>
            <div className="rounded-lg shadow-lg border border-gray-300">
                <div className="px-10 py-10">
                    <div>
                        <h2 className="font-bold">To-Do Progress</h2>
                        <p className="text-gray-700">{completed} of {total} tasks completed</p>
                    </div>

                    {/* tasks completion ratio bar */}
                    <div className="mt-4 w-full bg-green-200 h-2 rounded-full mb-6">
                        <div
                            className="h-2 bg-green-800 rounded-full transition-all duration-500"
                            style={{ width: `${completionRate}%` }}
                        ></div>
                    </div>
                    <div className="flex justify-between items-center">
                        <p className="text-gray-700">Completed: <span className="font-bold text-green-700">{completed}</span></p>
                        <p className="text-gray-700">Pending: <span className="font-bold text-red-700">{pending}</span></p>
                    </div>
                    <div className="mt-8">
                        <button className="w-full py-2 cursor-pointer outline-none rounded-md border border-gray-300 hover:border-green-800 hover:bg-green-800 hover:text-white">View All Tasks</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ToDoProgress;