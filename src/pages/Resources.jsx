import ResourcesCard from "../components/resources/ResourcesCard";
import { FaSearch } from "react-icons/fa";
import Search from "../components/Search"
import { useState } from "react";

const Resources = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");

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
                            {/* Select status */}
                            <div className="p-4">
                                <select
                                    value={"All"}
                                    onChange={(e) => e.target.value}
                                    className="w-60 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-800"
                                >
                                    All
                                </select>
                            </div>
                            {/* Add new resources */}
                            <button className="flex flex-row justify-between items-center gap-2 py-1 px-4 rounded-md bg-green-800 text-white cursor-pointer">
                                <span className="text-lg">+</span>
                                <p>Add Assignment</p>
                            </button>
                        </div>
                    </div>
                    <ResourcesCard searchValue={searchTerm} />
                </div>
            </div>
        </>
    )
}
export default Resources;