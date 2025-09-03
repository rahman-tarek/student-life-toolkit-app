import { useState } from "react";
import { FiEdit2, FiShare2, FiTrash2 } from "react-icons/fi";
import { MdDateRange, MdEvent } from "react-icons/md";

// Sample notes data
const initialNotes = [
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

const AllNotes = () => {
    const [show, setShow] = useState(null);
    return (
        <>
            <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {initialNotes.map((item, index) => (
                    <div
                        onMouseEnter={() => setShow(item.id)}
                        onMouseLeave={() => setShow(null)}
                        key={index}
                        className="p-6 rounded-lg hover:shadow-lg border border-gray-300 transition-all duration-500 ease-in-out  h-82 md:h-72 overflow-hidden">
                        <div>
                            <h2 className="text-xl font-bold">{item.title}</h2>
                            <p className="mt-4 inline-block items-center text-center py-1 px-2 bg-green-800 text-xs text-white rounded-md">{item.subject}</p>
                            <p className="mt-4 text-gray-700">{item.description}</p>
                            <p className="mt-4 flex flex-row gap-2 text-gray-800"><span><MdEvent size={24} /></span>Updated {item.lastUpdated}</p>
                        </div>
                        {show === item.id && <div className="flex justify-between items-center gap-2 p-4 mt-4  transition-all duration-300">
                            <button className="flex gap-2 px-3 py-1 bg-white rounded-md border border-gray-300">
                                <FiEdit2 size={20} />
                                Edit
                            </button>
                            <button className="bg-white px-3 py-1 rounded-md border border-gray-300">
                                <FiShare2 size={20} />
                            </button>
                            <button className="bg-white px-3 py-1 rounded-md border border-gray-300">
                                <FiTrash2 size={20} />
                            </button>
                        </div>}
                    </div>
                ))}
            </div>
        </>
    )
}
export default AllNotes;