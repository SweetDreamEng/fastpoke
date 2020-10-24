import React from "react";

const FunctionsSearch = (filter) => {
    const filters = filter.filter;
    return (
        <>
            <p><b>Functions</b></p>
            <input type="search" placeholder="Search functions..." />
            <ul className="filter-box clean">
                {(filters) && filters.map((filter) => {
                    return (
                        <li key={filter.id}><input type="checkbox" /> {filter.speciality_name}</li>
                    );
                })}
            </ul>
        </>
    );
};

export default FunctionsSearch;