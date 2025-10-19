import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

const GPATracker = () => {
    const data = [
        { semester: "1st", gpa: 3.85 },
        { semester: "2nd", gpa: 2.90 },
        { semester: "3rd", gpa: 3.75 },
        { semester: "4th", gpa: 2.95 },
        { semester: "5th", gpa: 3.80 },
        { semester: "6th", gpa: 2.88 },
        { semester: "7th", gpa: 3.92 },
        { semester: "8th", gpa: 3.97 },
    ];
    return (
        <>
            <div className="rounded-lg shadow-lg border border-gray-300">
                <div className="px-2 py-10">
                    <div>
                        <h2 className="font-bold text-center">GPA Tracker</h2>
                        <p className="text-gray-700 text-center">Monitor your academic performance</p>
                    </div>
                    <ResponsiveContainer width="100%" height={300}>
                        <LineChart data={data}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="semester" />
                            <YAxis domain={[0, 4]} />
                            <Tooltip />
                            <Line
                                type="monotone"
                                dataKey="gpa"
                                stroke="#166534"
                                strokeWidth={3}
                                dot={{ r: 5 }}
                                activeDot={{ r: 8 }}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </>
    )
}

export default GPATracker;