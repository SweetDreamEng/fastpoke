import React from "react";

const Career = () => {
    return (
        <section className="banner content features" id="features-02">
            <div className="container">
                <div className="pane pane-content">
                    <h3>Seeking career opportunities?</h3>
                    <ul className="clean">
                        <li href="#">
                            <i className="fad fa-user-circle"></i> Create a profile and
                            contact recruiters in your space.
                        </li>
                        <br />
                        <li href="#">
                            <i className="fad fa-shield-check"></i> Confidentially send
                            your resume.
                        </li>
                        <br />
                        <li href="#">
                            <i className="fad fa-file-user"></i> Increase your access to
                            career opportunities.
                        </li>
                        <br />
                        <li href="#">
                            <i className="fad fa-star"></i> Build lasting relationships
                            with top recruiters!
                        </li>
                    </ul>
                    <a href="#" className="btn btn-primary btn-raised">
                        Learn More
                    </a>
                </div>
                <div className="pane pane-image">
                    <img src="assets/img/screens/message.png" />
                </div>
            </div>
        </section>
    );
};

export default Career;