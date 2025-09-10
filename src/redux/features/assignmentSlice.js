import { createSlice } from "@reduxjs/toolkit";

// Sample assignments data
const assignmentsData = [
    {
        id: 1,
        title: "Calculus Problem Set 5",
        subject: "Mathematics",
        dueDate: "2024-12-15",
        status: "pending",
        type: "Assignment",
    },
    {
        id: 2,
        title: "Physics Lab Report",
        subject: "Physics",
        dueDate: "2024-12-12",
        status: "submitted",
        type: "Report",
    },
    {
        id: 3,
        title: "Chemistry Final Exam",
        subject: "Chemistry",
        dueDate: "2024-12-20",
        status: "pending",
        type: "Exam",
    },
    {
        id: 4,
        title: "History Research Paper",
        subject: "History",
        dueDate: "2024-12-10",
        status: "overdue",
        type: "Assignment",
    },
    {
        id: 5,
        title: "English Literature Essay",
        subject: "English",
        dueDate: "2024-12-18",
        status: "pending",
        type: "Essay",
    },
    {
        id: 6,
        title: "Biology Quiz",
        subject: "Biology",
        dueDate: "2024-12-14",
        status: "submitted",
        type: "Quiz",
    },
]

export const assignmentSlice = createSlice({
    name: "assignment",
    initialState: assignmentsData,
    reducers: {
        addAssignment: (state, action) => {
            const newAssignment = {
                id: assignmentsData.length + 1,
                title: action.payload,
                subject: action.payload,
                dueDate: action.payload,
                status: action.payload,
                type: action.payload,
            }
            state.push(newAssignment);
        }
    }
})

export const { addAssignment } = assignmentSlice.actions;
export default assignmentSlice.reducer;