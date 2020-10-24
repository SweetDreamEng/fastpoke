import React from "react";
import firm from "../../assets/img/firm.jpg";
import placeholder from "../../assets/img/placeholder.jpg";

const Banner = () => {
    return (
        <section className="banner profiles">
            <div className="container" style={{backgroundImage: `url(${firm})`}}>
                <div className="pro-image btn-raised" style={{backgroundImage: `url(${placeholder})`}}></div>
                <div className="pro-details">
                    <h1>Atlius Search</h1>
                </div>
            </div>
        </section>
    );
};

export default Banner;