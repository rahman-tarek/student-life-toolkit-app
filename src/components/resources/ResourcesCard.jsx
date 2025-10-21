import { FaTag } from "react-icons/fa";
import { FaFilePdf, FaVideo } from "react-icons/fa";
import { MdOndemandVideo } from "react-icons/md";
import { FaLink } from "react-icons/fa";
import { Link } from "react-router";

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

const filteredTags = Array.from(new Map(initialResources.map((item, index) => [item.id, item])).values());

const ResourcesCard = ({ searchValue }) => {
    const filteredResources = initialResources.filter((item) =>
        item.title.toLowerCase().includes(searchValue.toLowerCase()) ||
        item.description.toLowerCase().includes(searchValue.toLowerCase()) ||
        item.tags.some(tag => tag.toLowerCase().includes(searchValue.toLowerCase()))
    )
    return (
        <>
            <div className="py-4">
                <div className="flex flex-wrap gap-2 items-start">

                    <div className="flex-1 flex flex-wrap gap-2">
                        <div className="flex items-center gap-2">
                            <FaTag className="text-blue-500 text-xl" />
                            <span>Filter by Tags:</span>
                        </div>
                        {filteredTags.map((item, index) =>
                        (
                            item.tags.map((tag, index) => (
                                <button key={index} className="px-3 py-1 text-sm bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-green-800 hover:text-white transition">
                                    {tag}
                                </button>
                            ))
                        )
                        )}
                    </div>
                </div>

                {/* Resources cards */}
                <div className="py-6 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {filteredResources.map((item, index) => (
                        <div className="p-6 border border-gray-300 rounded-lg" key={index}>
                            <div className="flex flex-row items-center gap-2">
                                {item.type === "PDF" ?
                                    <FaFilePdf className="text-red-500 text-xl" /> : item.type === "Video" ?
                                        <FaVideo className="text-blue-500 text-xl" /> : item.type === "Link" ?
                                            <FaLink className="text-green-500 text-xl" /> : null}
                                <button className="px-3 py-0.5 text-xsm bg-green-800 text-white rounded-md">{item.type}</button>
                            </div>
                            <h2 className="py-4 font-bold">{item.title}</h2>
                            <p className="py-2 text-gray-700">{item.description}</p>
                            <div className="py-4 flex flex-wrap gap-2">
                                {item.tags.map((tag, index) => (
                                    <button className="px-3 py-1 text-xs bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-green-800 hover:text-white transition" key={index}>
                                        {tag}
                                    </button>
                                ))}
                            </div>
                            <div className="py-2 flex  justify-between items-center">
                                <p>Added {item.dateAdded}</p>
                                <Link to={item.link} className="px-3 py-1 bg-green-800 text-white rounded-md">Open</Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default ResourcesCard;