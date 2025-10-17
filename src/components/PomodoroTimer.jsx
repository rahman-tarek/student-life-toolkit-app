import { useEffect, useRef, useState } from "react";
import { FaPlay, FaPause, FaRedo } from "react-icons/fa";

const PomodoroTimer = () => {
    const totalTime = 25 * 60; // Total time in seconds
    const [leftTime, setLeftTime] = useState(totalTime);
    const [isRunning, setIsRunning] = useState(false);
    const timerRef = useRef(null);

    // Converts seconds to MM:SS format
    const formatTime = (seconds) => {
        const m = Math.floor(seconds / 60);
        const s = seconds % 60;
        return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`
    }

    // Progress bar anticlock wise
    const progress = (leftTime / totalTime) * 100;

    useEffect(() => {
        if (isRunning) {
            timerRef.current = setInterval(() => {
                setLeftTime(prev => {
                    if (prev <= 1) {
                        clearInterval(timerRef.current);
                        setIsRunning(false);
                        return 0;
                    }
                    return prev - 1;
                })
            }, [1000])
        }
        return () => clearInterval(timerRef.current);
    }, [isRunning])


    // Pause time stamp
    const handlePauseResume = () => {
        setIsRunning(prev => !prev);
    }

    // Reset timer
    const handleReset = () => {
        clearInterval(timerRef.current);
        setIsRunning(false);
        setLeftTime(totalTime);
    }

    return (
        <>
            <div className="rounded-lg shadow-lg border border-gray-300">
                <div className="px-10 py-10">
                    <div>
                        <h2 className="font-bold text-center">Pomodoro Timer</h2>
                        <p className="text-gray-700 text-center">Focus Time</p>
                    </div>
                    <h1 className="mt-10 text-4xl font-bold text-center text-green-800">{formatTime(leftTime)}</h1>
                    <div className="mt-4 w-full bg-green-200 h-2 rounded-full mb-6">
                        <div
                            className="h-2 bg-green-800 rounded-full transition-all duration-500"
                            style={{ width: `${progress}%` }}
                        ></div>
                    </div>
                    {/* Buttons */}
                    <div className="flex justify-center gap-4">
                        <button
                            onClick={handlePauseResume}
                            className="px-4 py-2 text-white rounded-lg bg-green-800 hover:bg-green-700 transition-all"
                        >
                            {isRunning ? <FaPause /> : <FaPlay />}
                        </button>
                        <button
                            onClick={handleReset}
                            className="px-4 py-2 text-white rounded-lg bg-green-800 hover:bg-green-700 transition-all"
                        >
                            <FaRedo />
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PomodoroTimer;