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

const TaskTracking = () => {

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
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-8">
                <div className="p-6 rounded-md border border-gray-300">
                    <p className="text-gray-700">Total Tasks</p>
                    <p className="py-6 mt-4 text-3xl font-bold">{total}</p>
                </div>
                <div className="p-6 rounded-md border border-gray-300">
                    <p className="text-gray-700">Completed</p>
                    <p className="py-6 mt-4 text-3xl font-bold text-green-700">{completed}</p>
                </div>
                <div className="p-6 rounded-md border border-gray-300">
                    <p className="text-gray-700">Pending</p>
                    <p className="py-6 mt-4 text-3xl font-bold text-red-700">{pending}</p>
                </div>
                <div className="p-6 rounded-md border border-gray-300">
                    <p className="text-gray-700">Completion Rate</p>
                    <p className="pt-6 pb-2 mt-4 text-3xl font-bold text-green-700">{completionRate}%</p>
                    <div className="w-full h-2 rounded-full bg-gray-200">
                        <div className={`bg-green-700 h-2 rounded-full transition-all duration-500 ease-in-out`} style={{ width: `${completionRate}%` }}>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TaskTracking;