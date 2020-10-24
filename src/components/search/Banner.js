import React from "react";
import LocationSearchInput from "../ui/PlaceAutoComplete";

const Banner = () => {
    return (
        <section className="banner" id="banner-search-01">
            <div className="container">
                <h2>Connect with top, specialized recruiters.</h2>
                <div className="form-row">
                    <div className="fr-50 search-box">
                        <i className="fad fa-search"></i>
                        <input type="search" placeholder="Search by firm name..." />
                    </div>
                    <div className="fr-spacer"></div>
                    <div className="fr-location search-box">
                        <i className="fad fa-map-marker-alt"></i>
                        <input id="pac-input" type="search" className={"controls"} placeholder="City, State, or Zip Code" />
                    </div>
                    <div className="fr-spacer"></div>
                    <div className="fr-search">
                        <button className="btn btn-outline btn-light">Search</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;