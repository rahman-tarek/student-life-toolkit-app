import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

// Sample notes data
const initialNotes = {
    notes: [
        {
            id: 1,
            title: "Calculus Integration Notes",
            description: "Key formulas and techniques for integration by parts, substitution methods...",
            content:
                "# Integration Techniques\n\n## Integration by Parts\nFormula: ∫u dv = uv - ∫v du\n\n## Substitution Method\nWhen we have composite functions...",
            subject: "Mathematics",
            lastUpdated: "2024-01-15",
            createdAt: "2024-01-10",
        },
        {
            id: 2,
            title: "Physics Lab Report Template",
            description: "Standard template for physics lab reports including methodology and analysis...",
            content:
                "# Lab Report Template\n\n## Objective\n[State the purpose of the experiment]\n\n## Materials\n- List all equipment used\n\n## Procedure\n1. Step by step instructions...",
            subject: "Physics",
            lastUpdated: "2024-01-14",
            createdAt: "2024-01-08",
        },
        {
            id: 3,
            title: "Chemistry Periodic Trends",
            description: "Notes on atomic radius, ionization energy, and electronegativity trends...",
            content:
                "# Periodic Trends\n\n## Atomic Radius\n- Increases down a group\n- Decreases across a period\n\n## Ionization Energy\n- Decreases down a group\n- Increases across a period...",
            subject: "Chemistry",
            lastUpdated: "2024-01-13",
            createdAt: "2024-01-05",
        },
        {
            id: 4,
            title: "History Essay Outline",
            description: "Outline for World War II causes and consequences essay...",
            content:
                "# WWII Essay Outline\n\n## Introduction\n- Hook: The war that changed the world\n- Thesis: Multiple factors led to WWII...\n\n## Body Paragraphs\n1. Economic factors\n2. Political tensions\n3. Social conditions...",
            subject: "History",
            lastUpdated: "2024-01-12",
            createdAt: "2024-01-01",
        },
        {
            id: 5,
            title: "Programming Algorithms",
            description: "Common sorting and searching algorithms with time complexity analysis...",
            content:
                "# Algorithms Cheat Sheet\n\n## Sorting Algorithms\n\n### Bubble Sort\n- Time Complexity: O(n²)\n- Space Complexity: O(1)\n\n### Quick Sort\n- Time Complexity: O(n log n) average\n- Space Complexity: O(log n)...",
            subject: "Computer Science",
            lastUpdated: "2024-01-11",
            createdAt: "2023-12-28",
        },
    ]
}

const tasksSlice = createSlice({
    name: "notes",
    initialState: initialNotes,
    reducers: {
        addNote: (state, action) => {
            const newNote = {
                id: state.notes.length + 1,
                title: action.payload.title,
                description: action.payload.content,
                content: action.payload.content,
                subject: action.payload.subject,
                lastUpdated: action.payload.updateDate,
                createdAt: action.payload.createDate,
            }
            state.notes.push(newNote);
        },
        updateNote: (state, action) => {
            const { id, title, description, content, subject, lastUpdated } = action.payload;
            const note = state.notes.find((item) => item.id === id);
            if (note) {
                note.title = title;
                note.description = description;
                note.content = content;
                note.subject = subject;
                note.lastUpdated = lastUpdated;
            }
        },
        deleteNote: (state, action) => {
            const id = action.payload;
            state.notes = state.notes.filter((item) => item.id !== id);
        }
    }
})

export const { addNote, updateNote, deleteNote } = tasksSlice.actions;
export default tasksSlice.reducer;

