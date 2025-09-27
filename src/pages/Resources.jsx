import ResourcesCard from "../components/resources/ResourcesCard";
import { FaSearch } from "react-icons/fa";

const Resources = () => {
    return (
        <>
            <div className="mt-16">
                <div className="p-8">
                    <h1 className="text-4xl font-bold">Resources Hub</h1>
                    <p className="text-gray-600 text-lg">Organize and access your study materials, links, and references.</p>
                    <div className="flex flex-col md:flex-row justify-between  items-center pt-8">
                        <div className="">
                            <form action="">
                                <div className="relative flex items-center">
                                    <FaSearch className="absolute left-3 text-gray-600 text-sm" />
                                    <input type="text"
                                        placeholder="Search..."
                                        className="pl-10 pr-4 py-2 text-gray-600 rounded-lg shadow-xs focus:outline-none focus:border-green-900"
                                    />
                                </div>
                            </form>
                        </div>
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
                    <ResourcesCard />
                </div>
            </div>
        </>
    )
}
export default Resources;