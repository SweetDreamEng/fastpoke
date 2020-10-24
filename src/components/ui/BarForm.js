import React from "react";
import Select from "./Select";
import SubmitButton from "./SubmitButton";

const BarForm = (data) => {
    return (
        <div className="bar-form">
            <Select options={data.data['industries']} />
            <br />
            <Select options={data.data['functions']} />
            <br />
            <SubmitButton text={'GO'} />
        </div>
    );
}

export default BarForm;