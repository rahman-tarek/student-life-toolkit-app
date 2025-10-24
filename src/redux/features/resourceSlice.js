import { createSlice } from "@reduxjs/toolkit";

// Sample resources data
const initialResources = [
    {
        id: 1,
        title: "Calculus Study Guide",
        description: "Comprehensive guide covering derivatives, integrals, and limits with practice problems.",
        link: "https://example.com/calculus-guide.pdf",
        type: "PDF",
        tags: ["Mathematics", "Calculus", "Study Guide"],
        dateAdded: "2024-12-10",
    },
    {
        id: 2,
        title: "Physics Lab Techniques",
        description: "Video tutorial on proper laboratory techniques and safety procedures.",
        link: "https://youtube.com/watch?v=example",
        type: "Video",
        tags: ["Physics", "Laboratory", "Safety"],
        dateAdded: "2024-12-08",
    },
    {
        id: 3,
        title: "Khan Academy - Organic Chemistry",
        description: "Free online course covering organic chemistry fundamentals and reactions.",
        link: "https://khanacademy.org/chemistry",
        type: "Link",
        tags: ["Chemistry", "Organic", "Online Course"],
        dateAdded: "2024-12-05",
    },
    {
        id: 4,
        title: "Research Paper Template",
        description: "APA format template for academic research papers with citation examples.",
        link: "https://example.com/research-template.docx",
        type: "PDF",
        tags: ["Writing", "Research", "APA", "Template"],
        dateAdded: "2024-12-03",
    },
    {
        id: 5,
        title: "Linear Algebra Lectures",
        description: "MIT OpenCourseWare lectures on linear algebra and matrix operations.",
        link: "https://ocw.mit.edu/linear-algebra",
        type: "Video",
        tags: ["Mathematics", "Linear Algebra", "MIT"],
        dateAdded: "2024-12-01",
    },
    {
        id: 6,
        title: "Programming Practice Problems",
        description: "Collection of coding challenges and solutions for computer science students.",
        link: "https://leetcode.com/studyplan",
        type: "Link",
        tags: ["Programming", "Computer Science", "Practice"],
        dateAdded: "2024-11-28",
    },
]

export const resourceSlice = createSlice({
    name: "resource",
    initialState: initialResources,
    reducers: {
        addResource: (state, action) => {
            const newResource = {
                id: initialResources.length + 1,
                title: action.payload.title,
                description: action.payload.description,
                link: action.payload.link,
                type: action.payload.type,
                tags: action.payload.tags,
                dateAdded: new Date().toISOString().split('T')[0]
            }
            state.push(newResource);
        }
    }
})

export const { addResource } = resourceSlice.actions;
export default resourceSlice.reducer;
