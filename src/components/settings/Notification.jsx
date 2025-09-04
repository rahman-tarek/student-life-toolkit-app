const Notifications = () => {
    return (
        <>
            <div className="p-6 mt-4 border border-gray-300 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-gray-700">Notifications</h3>
                <p className="text-gray-700">Manage your notification preferences</p>

                {/* Email notification */}
                <div className="py-6 flex flex-cols justify-between items-center border-b border-gray-300">
                    <div>
                        <h3 className="text-md font-bold text-gray-700">Email Notification</h3>
                        <p className="text-gray-700">Receive notifications via email</p>
                    </div>
                    <label className="inline-flex items-center cursor-pointer">
                        <input type="checkbox" value="" className="sr-only peer" />
                        <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none  dark:peer-focus:ring-green-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-800 dark:peer-checked:bg-green-800"></div>

                    </label>
                </div>
                {/* Push notification */}
                <div className="py-6 flex flex-cols justify-between items-center border-b border-gray-300">
                    <div>
                        <h3 className="text-md font-bold text-gray-700">Push Notification</h3>
                        <p className="text-gray-700">Receive push notifications in your browser</p>
                    </div>
                    <label className="inline-flex items-center cursor-pointer">
                        <input type="checkbox" value="" className="sr-only peer" />
                        <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none  dark:peer-focus:ring-green-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-800 dark:peer-checked:bg-green-800"></div>

                    </label>
                </div>
                {/* Assignment notification */}
                <div className="py-6 flex flex-cols justify-between items-center">
                    <div>
                        <h3 className="text-md font-bold text-gray-700">Assignment Reminder</h3>
                        <p className="text-gray-700">Get reminded about upcoming deadlines</p>
                    </div>
                    <label className="inline-flex items-center cursor-pointer">
                        <input type="checkbox" value="" className="sr-only peer" />
                        <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none  dark:peer-focus:ring-green-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-800 dark:peer-checked:bg-green-800"></div>

                    </label>
                </div>
            </div>
        </>
    )
}

export default Notifications;