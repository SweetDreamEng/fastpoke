import React from "react";

const BannerContent = () => {
    return (
        <section className="banner content" id="banner-02">
            <div className="container">
                <h3>
                    <wrap>Are you a recruiter?</wrap>
                </h3>
                <p className="subtitle">
                    <wrap>Fastpoke is exclusively for boutique-firm recruiters.</wrap>
                </p>
                <ul className="clean" style={{ marginTop: 0 }}>
                    <li href="#" className="btn btn-raised btn-icon">
                        <i className="fad fa-info-circle"></i> Track profile exposure
                        through analytics.
                    </li>
                    <br />
                    <li href="#" className="btn btn-raised btn-icon">
                        <i className="fad fa-pen-nib"></i> Market yourself through
                        written referrals.
                    </li>
                    <br />
                    <li href="#" className="btn btn-raised btn-icon">
                        <i className="fad fa-people-arrows"></i> Receive job
                        requisitions directly.
                    </li>
                </ul>
                <a href="/recruiters" className="btn btn-primary btn-raised">
                    Learn More
                </a>
            </div>
        </section>
    );
};

export default BannerContent;