const ClassSchedules = () => {
    const classDetails = [
        { subject: "Mathmetics", time: "9:00 PM", room: "409", lecturer: "Dr. Smith" },
        { subject: "Mathmetics", time: "9:00 PM", room: "409", lecturer: "Dr. Smith" },
        { subject: "Mathmetics", time: "9:00 PM", room: "409", lecturer: "Dr. Smith" },
    ]


    return (
        <>
            <div className="rounded-lg shadow-lg border border-gray-300">
                <div className="px-10 py-10">
                    <div>
                        <h2 className="font-bold">Today's Classes</h2>
                    </div>
                    <ul className="space-y-4 mt-2">
                        {classDetails.map((item, index) => (
                            <li
                                key={index}
                                className="flex items-center md:flex-rows justify-between p-4 border border-gray-300 rounded-lg"
                            >
                                <div className="flex flex-col gap-2">
                                    <p className="font-bold">{item.subject}</p>
                                    <p>{item.lecturer} . {item.room}</p>
                                </div>
                                <div className="items-center text-xs px-2 border border-gray-300 rounded-md">
                                    {item.time}
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}
export default ClassSchedules;