import React from "react";
import TalentLink from "../ui/TalentLink";

const Links = [
    {
        link: "/signup",
        tag: 'employer',
        description: "Hire the right talent"
    },
    {
        link: "/signup",
        tag: 'recruiter',
        description: "Find employment opportunities"
    },
    {
        link: "/signup",
        tag: 'talent',
        description: "Receive the attention you deserve"
    }
]

const Banner = () => {
    return (
        <section className="banner" id="banner-01">
            <div className="container">
                <h2>
                    <wrap>
                        Welcome to Fastpoke!
                        <br />
                        Connect with top, specialized recruiters.
                    </wrap>
                </h2>
                {Links.map((link, index) => {
                    return (
                        <>
                            <TalentLink link={link.link} tag={link.tag} description={link.description}></TalentLink>
                            {(index !== Links.length - 1) &&
                                <br />
                            }
                        </>
                    );
                })}
            </div>
        </section>
    );
}

export default Banner;