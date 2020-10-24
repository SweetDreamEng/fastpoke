import React from "react";

const Content = () => {
    return (
        <section className="content" id="firm-02">
            <div className="container">
                <div className="pro-about-left">
                    <h3>Headquarters</h3>
                    <p>Stamford, Connecticut</p>
                    <h3>Size</h3>
                    <p>1-10 Recruiters</p>
                    <h3>Website</h3>
                    <p>www.altimussearch.com</p>
                </div>
                <div className="pro-about-right">
                    <h3>Founded</h3>
                    <p>2010</p>
                    <h3>Services</h3>
                    <ul className="certs services clean">
                        <li>Direct Hire</li>
                        <li>Contract</li>
                        <li>Contract-to-Hire</li>
                    </ul>
                </div>
                <div className="pro-openings">
                    <hr/>
                    <h2>Specialties</h2>
                    <h3>Industries We Serve</h3>
                    <ul className="certs clean">
                        <li>CPG</li>
                        <li>Logistics & Supply Chain</li>
                        <li>Construction</li>
                    </ul>
                    <br/><br/>
                    <h3>Functions We Fill</h3>
                    <ul className="certs clean">
                        <li>Operations</li>
                        <li>Supply Chain</li>
                    </ul>
                    <hr/>
                </div>
            </div>
        </section>
    );
};

export default Content;