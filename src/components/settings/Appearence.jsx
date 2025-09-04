const Appearance = () => {
    return (
        <>
            <div className="p-6 mt-4 border border-gray-300 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-gray-700">Security</h3>
                <p className="text-gray-700">Customize your interface preferences</p>

                <div className="py-6 flex flex-cols justify-between items-center">
                    <div>
                        <h3 className="text-md font-bold text-gray-700">Dark Mode</h3>
                        <p className="text-gray-700">Switch between light and dark themes</p>
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

export default Appearance;