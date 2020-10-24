import React from "react";
import IndustriesSearch from "../ui/IndustriesSearch";
import FunctionsSearch from "../ui/FunctionsSearch";
import LevelsSearch from "../ui/LevelsSearch";

const SideBar = (data,) => {
    return (
        <aside className="sr-sidebar">
            <h2>Specialties</h2>
            <IndustriesSearch filter={data.data['industries']}/>
            <br/><br/>
            <FunctionsSearch filter={data.data['functions']} />
            <br/><br/>
            <LevelsSearch filter={data.data["levels"]}/>
        </aside>
    );
};

export default SideBar;