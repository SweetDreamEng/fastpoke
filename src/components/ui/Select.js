import React from "react";

const Select = ({options}) => {
    return (
        <select>
            {options && options.map((option) => {
                return (
                    <option>{option.speciality_name}</option>
                );
            })}
        </select>
    );
};

export default Select;