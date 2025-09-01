import ClassSchedules from "../components/ClassSchedules";
import Upcoming from "../components/Upcoming";

const Dashboard = () => {
    return (
        <>
            <div className='grid grid-cols-3 gap-4'>
                <div className="col-span-2">
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