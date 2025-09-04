const ProfileInformation = () => {
    return (
        <>
            <div className="p-6 mt-4 rounded-lg border border-gray-300 shadow-sm">
                <h3 className="text-xl font-bold text-gray-700">Profile Information</h3>
                <p className="text-gray-700">Update your personal information</p>
                <div className="mt-4">
                    <form action="" className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        <div className="flex flex-col gap-1">
                            <label htmlFor="Fullname" className="font-bold text-gray-800">Full Name</label>
                            <input type="text"
                                className="px-2 py-1 outline-none rounded-md border border-gray-300 focus:border-green-800"
                                placeholder="Full Name" />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="Fullname" className="font-bold text-gray-800">Email</label>
                            <input type="email"
                                className="px-2 py-1 outline-none border border-gray-300 rounded-md focus:border focus:border-green-800"
                                placeholder="Email" />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="Fullname" className="font-bold text-gray-800">University</label>
                            <input type="text"
                                className="px-2 py-1 outline-none rounded-md border border-gray-300 focus:border-green-700"
                                placeholder="Stanford University" />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="Fullname" className="font-bold text-gray-800">Major</label>
                            <input type="text"
                                className="px-2 py-1 outline-none rounded-md border border-gray-300 focus:border-green-700"
                                placeholder="Computer Science" />
                        </div>

                        <button className="py-1 mt-2 rounded-md outline-none bg-green-800 text-white"><span></span> Save Changes</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default ProfileInformation;