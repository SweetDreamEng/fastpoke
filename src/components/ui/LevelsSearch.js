import React from "react";

const LevelsSearch = (filter) => {
    const filters = filter.filter;
    return (
        <>
            <p><b>Levels</b></p>
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

export default LevelsSearch;