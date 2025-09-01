import { useState } from "react";
import { FaSearch } from "react-icons/fa";

const Search = () => {
    const [searchTerm, setSearchTerm] = useState("");

    // Handle Search Term
    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    }
    return (
        <>
            <div className="search">
                <form action="">
                    <div className="search-wrapper">
                        <FaSearch className="search-icon" />
                        <input type="text" placeholder="Search..." value={searchTerm} onChange={handleSearch} />
                    </div>
                </form>
            </div>
        </>
    )
}

export default Search;