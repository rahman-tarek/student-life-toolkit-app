import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const initialTasks = [
    {
        id: "1",
        title: "Complete Math Assignment",
        description: "Solve problems 1-20 from Chapter 5",
        deadline: "2024-12-15",
        priority: "High",
        completed: false,
        createdAt: "2024-12-10",
    },
    {
        id: "2",
        title: "Study for Physics Exam",
        description: "Review chapters 8-12, focus on thermodynamics",
        deadline: "2024-12-20",
        priority: "High",
        completed: false,
        createdAt: "2024-12-10",
    },
    {
        id: "3",
        title: "Write History Essay",
        description: "2000 words on World War II impact",
        deadline: "2024-12-22",
        priority: "medium",
        completed: true,
        createdAt: "2024-12-08",
    },
    {
        id: "4",
        title: "Chemistry Lab Report",
        description: "Document experiment results and analysis",
        deadline: "2024-12-18",
        priority: "Medium",
        completed: false,
        createdAt: "2024-12-09",
    },
    {
        id: "5",
        title: "Read Literature Chapter",
        description: "Chapter 15-17 for next class discussion",
        deadline: "2024-12-16",
        priority: "Low",
        completed: true,
        createdAt: "2024-12-07",
    },
]

const tasksSlice = createSlice({
    name: "tasks",
    initialState: {
        initialTasks: initialTasks,
    },
    reducers: {
        addTask: (state, action) => {
            const newTask = {
                id: state.initialTasks.length + 1,
                title: action.payload.title,
                description: action.payload.description,
                deadline: action.payload.deadline,
                priority: action.payload.priority,
                completed: action.payload.completed || false,
                createdAt: new Date().toISOString().split("T")[0],
            };
            state.initialTasks.push(newTask);
        }
    }
})

export const { addTask } = tasksSlice.actions;
export default tasksSlice.reducer;