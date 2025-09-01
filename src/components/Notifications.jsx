import { IoNotifications } from "react-icons/io5";
const Notifications = () => {
    const notifications = 5;

    return (
        <>
            <div className="notifications relative inline-block">
                <button className="p-2 ">
                    <IoNotifications className="w-5 h-5" />
                    {
                        notifications > 0 && (
                            <span className="absolute -top-1 -right-1 inline-flex items-center justify-center w-5 h-5 text-xs font-bold bg-green-700 text-white rounded-full">
                                {notifications > 99 ? '99+' : notifications}
                            </span>
                        )
                    }
                </button>
            </div>
        </>
    )
}

export default Notifications;