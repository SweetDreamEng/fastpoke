import React from "react";

const IndustriesSearch = (filter) => {
    const filters = filter.filter;
    return (
        <>
            <p><b>Industries</b></p>
            <input type="search" placeholder="Search industries..." />

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

export default IndustriesSearch;