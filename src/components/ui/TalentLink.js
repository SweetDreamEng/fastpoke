import React from "react";
import { Link } from "react-router-dom";

const TalentLink = ({link, tag, description}) => {
    return (
        <Link
            to={{
                pathname: link,
                state: { role: tag },
            }}
            className="btn btn-raised btn-outline btn-icon"
        >
            {description}<i className="fad fa-long-arrow-right"></i>
        </Link>
    );
}

export default TalentLink;