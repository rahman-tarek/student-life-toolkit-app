import ResourcesCard from "../components/resources/ResourcesCard";
import { FaSearch } from "react-icons/fa";
import Search from "../components/Search"
import { useState } from "react";
import { useSelector } from "react-redux";

const Resources = () => {
    const [selectedSub, setSelectedSub] = useState("All");
    const [isOpen, setIsOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");

    // Get all resources from state
    const resources = useSelector(state => state.resources);

    // Extract unique subjects
    const extractedSubjects = ["All", ...new Set(resources.map(item => item.tags[0]))];

    // Filtering logics
    // const filteredResources = resources.filter((item) => {
    //     const subjectMatch = selectedSub === "All" || item.tags.includes(selectedSub);
    //     const searched = item.title.toLowerCase().includes(searchTerm.toLowerCase());

    // })

    // Callback for search
    const handleSearch = (term) => {
        setSearchTerm(term);
    }
    return (
        <>
            <div className="mt-16">
                <div className="p-8">
                    <h1 className="text-4xl font-bold">Resources Hub</h1>
                    <p className="text-gray-600 text-lg">Organize and access your study materials, links, and references.</p>
                    <div className="flex flex-col md:flex-row justify-between  items-center pt-8">
                        {/* Search */}
                        <Search onSearch={handleSearch} />
                        <div className="flex flex-col md:flex-row flex-between items-center gap-2">
                            {/* Select subject */}
                            <div className="p-4">
                                <select
                                    value={selectedSub}
                                    onChange={(e) => setSelectedSub(e.target.value)}
                                    className="w-60 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-800"
                                >

                                    {extractedSubjects.map((item, index) => (
                                        <option value={item} key={index}>{item}</option>
                                    ))}
                                </select>
                            </div>
                            {/* Add new resources */}
                            <button className="flex flex-row justify-between items-center gap-2 py-1 px-4 rounded-md bg-green-800 text-white cursor-pointer">
                                <span className="text-lg">+</span>
                                <p>Add Assignment</p>
                            </button>
                        </div>
                    </div>
                    <ResourcesCard searchValue={{ searchTerm, selectedSub }} />
                </div>
            </div>
        </>
    )
}
export default Resources;