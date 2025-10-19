import ClassSchedules from "../components/ClassSchedules";
import PomodoroTimer from "../components/PomodoroTimer";
import ToDoProgress from "../components/ToDoProgress";
import Upcoming from "../components/Upcoming";

const Dashboard = () => {
    return (
        <>
            <div className="mt-16 w-full">
                <div className="p-4">
                    <h1 className="text-xl md:text-3xl font-bold">Welcome back, John!</h1>
                    <p className="text-gray-800 font-semibold">Here's what's happening with your studies today.</p>
                </div>
                <div className='p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
                    <div className="col-span-2">
                        <ClassSchedules />
                    </div>
                    <PomodoroTimer />
                </div>
                <div className='p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
                    <Upcoming />
                    <ToDoProgress />
                    <ClassSchedules />
                </div>
            </div>
        </>
    )
}

export default Dashboard;