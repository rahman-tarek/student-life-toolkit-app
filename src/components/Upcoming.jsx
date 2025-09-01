const Upcoming = () => {
    const classDetails = [
        { subject: "Math assignment", date: "Tomorrow", topic: "Assignment" },
        { subject: "Lab Report", date: "Sep 03", topic: "Report" },
        { subject: "Math assignment", date: "Sep 03", topic: "Assignment" },
        { subject: "Math assignment", date: "Sep 03", topic: "Assignment" },
        { subject: "Math assignment", date: "Sep 03", topic: "Assignment" },
    ]


    return (
        <>
            <div className="rounded-lg shadow-lg border border-gray-300">
                <div className="px-10 py-10">
                    <div>
                        <h2 className="font-bold">Upcoming deadlines</h2>
                    </div>
                    <ul className="space-y-1 mt-2">
                        {classDetails.map((item, index) => (
                            <li
                                key={index}
                                className="flex items-center md:flex-rows justify-between p-1 rounded-lg"
                            >
                                <div className="flex flex-col">
                                    <p className="font-bold">{item.subject}</p>
                                    <p className="text-xs">{item.topic}</p>
                                </div>
                                <div className="items-center text-xs text-white font-bold px-3 py-1 bg-red-600 rounded-md">
                                    {item.date}
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}
export default Upcoming;