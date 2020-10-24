import React from "react";

const SubmitButton = ({text}) => {
    return (
        <button type="submit" href="#" className="btn btn-secondary">
            {text}
        </button>
    );
};

export default SubmitButton;