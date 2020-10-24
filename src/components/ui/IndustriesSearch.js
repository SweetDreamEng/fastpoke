import { getRoles } from "@testing-library/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeIndustry, getRecruiters } from "../../actions/searchActions";

const IndustriesSearch = (filter) => {
    
    const dispatch = useDispatch();
    const [filterString, setFilterString] = useState('');

    let propFilter = filter.filter;
    if (propFilter) {
        propFilter = propFilter.filter(item => item.speciality_name.toLowerCase().includes(filterString.toLowerCase()));
    }    

    const {
        industries,
        functions,
        levels,
        keyword,
        place_id
    } = useSelector((state) => state.searchRecruiter);

    const handleClick = async (event) => {    
        const change = {
            name: event.target.name,
            value: event.target.checked,
        };
        await dispatch(changeIndustry(change));
        
        await dispatch(getRecruiters({
            industries,
            functions,
            level: levels,
            keyword,
            "place-id": place_id,
        }));
    }

    const handleChange = (event) => {
        setFilterString(event.target.value);       
    }

    return (
        <>
            <p><b>Industries</b></p>
            <input type="search" placeholder="Search industries..." onChange={handleChange}/>
            <ul className="filter-box clean">
                {(propFilter) && propFilter.map((filter) => {
                    return (
                        <li key={filter.id}><input type="checkbox" name={filter.speciality_name} onClick={handleClick}/> {filter.speciality_name}</li>
                    );
                })}
            </ul>
        </>
    );
};

export default IndustriesSearch;