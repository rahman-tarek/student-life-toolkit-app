import { useState } from "react";
import { FaSearch } from "react-icons/fa";

const Search = ({ onSearch }) => {

    // Passing search term to parent as a callback
    const handleSearch = (e) => {
        onSearch(e.target.value);
    }
    return (
        <>
            <div className="search">
                <form action="">
                    <div className="search-wrapper">
                        <FaSearch className="search-icon" />
                        <input type="text" placeholder="Search..." onChange={handleSearch} />
                    </div>
                </form>
            </div>
        </>
    )
}

export default Search;