import ClassSchedules from "../components/ClassSchedules";
import Upcoming from "../components/Upcoming";

const Dashboard = () => {
    return (
        <>
            <div className='p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
                <div className="">
                    <ClassSchedules />
                </div>
                <ClassSchedules />
                <Upcoming />
                <ClassSchedules />
                <ClassSchedules />
            </div>
        </>
    )
}

export default Dashboard;