import React from "react";

const Features = () => {
    return (
        <section
            className="banner content bar-dk-gray features"
            id="features-01"
        >
            <div className="container">
                <div className="pane pane-image">
                    <img src="assets/img/screens/employer.png" />
                </div>
                <div className="pane pane-content">
                    <h3>Looking to hire?</h3>
                    <ul className="clean">
                        <li href="#">
                            <i className="fad fa-street-view"></i> Read real referrals
                            written by clients and candidates.
                        </li>
                        <br />
                        <li href="#">
                            <i className="fad fa-users-className"></i> Select up to 3
                            recruiters to send your opening to.
                        </li>
                        <br />
                        <li href="#">
                            <i className="fad fa-users-crown"></i> Collaborate and build
                            relationships with top recruiters.
                        </li>
                        <br />
                        <li href="#">
                            <i className="fad fa-user-chart"></i> Reduce turnover by
                            hiring the right talent.
                        </li>
                    </ul>
                    <a href="#" className="btn btn-tertiary btn-raised">
                        Learn More
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Features;