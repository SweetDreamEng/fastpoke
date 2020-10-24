import React from "react";
import BarForm from "../ui/BarForm";

const CtaBar = (data) => {
    return (
        <section className="bar-cta bar-lt-blue">
            <div className="container">
                <div className="bar-content">
                    <p>
                        Are you looking for career opportunities?
                        <br />
                        In need of talent acquisition?
                        <br />
                        Seeking career advice?
                    </p>
                    <p>
                        <b>Find the right recruiter, fast!</b>
                    </p>
                </div>
                <BarForm data={data.data} />
            </div>
        </section>
    );
};

export default CtaBar;