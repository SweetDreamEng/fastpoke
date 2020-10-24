import React from "react";
import Slider from "react-slick";
import person_background from "../../assets/img/person.jpg";
import client_logo from "../../assets/img/client-logo.jpg";
import client_placeholder from "../../assets/img/client-placeholder.jpg";
import tulane from "../../assets/img/tulane.jpg";

const Testimonials = () => {

    const settings = {
        dots: true,
        arrows: false,
        autoplay: true,
        position: "relative",
    };

    const sliderItems = [
        {
            image: person_background,
            name: "Bruce Goldstein",
            comapny: "Newgold Search",
            location: "Stamford, CN",
            description: "Bruce is a fantastic recruiter. He really knows what he is\n" +
                "doing. Bruce placed an associate in our organization and he\n" +
                "found the right person for the job and for our company. He\n" +
                "is truly the definition of professional and takes the time\n" +
                "to understand his clients' needs. He interviewed candidates\n" +
                "before directing them to us and he placed a few resumes on\n" +
                "our desk. Without him we would have been lost and I'm so\n" +
                "grateful we finally have found ourselves a trustworthy\n" +
                "recruiter!",
            logo: client_logo,
            employee: "Jeff | Account Manager",
            job: "A-Z Company",
            tag: "Insurance",
            address: "Seattle, WA"
        },
        {
            image: client_placeholder,
            name: "Mike Holdrich",
            comapny: "Seven Persons",
            location: "Seattle, WA",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.\n" +
                "Tempora voluptate nam praesentium facilis molestias enim\n" +
                "quas iure vero ratione nesciunt aspernatur, inventore a,\n" +
                "harum, consectetur eaque. Odio tenetur distinctio similique?",
            logo: tulane,
            employee: "Lucas | Manager",
            job: "Ace Holdings",
            tag: "Government",
            address: "Los Angeles, CA"
        },
        {
            image: tulane,
            name: "Janet Zeltir",
            comapny: "Agrite Miners",
            location: "Hellsinki, BT",
            description: "Tempora voluptate nam praesentium facilis molestias enim\n" +
                "quas, inventore a, harum, consectetur eaque. Odio tenetur\n" +
                "distinctio similique? Lorem ipsum dolor sit amet consectetur\n" +
                "adipisicing elit. Vero aut ea veniam animi? Beatae obcaecati\n" +
                "voluptas deserunt aspernatur laudantium. Autem?",
            logo: client_placeholder,
            employee: "Vergil | Hari Management",
            job: "Drake LLC",
            tag: "Fashion",
            address: "Medrica, AZ"
        }
    ];

    return (
        <section className="testimonials" id="test-01">
            <div className="container">
                <h3>Real client and candidate referrals.</h3>
                <Slider {...settings} className="test-list">
                    {(sliderItems) && sliderItems.map(sliderItem => {
                        return (
                            <div>
                                <div className="test-item">
                                    <div className="ti-profile">
                                        <span
                                            className="tip-image"
                                            style={{ backgroundImage: `url(${sliderItem.image})` }}
                                        ></span>
                                        <span className="tip-name">{sliderItem.name}</span>
                                        <span className="tip-company">
                                          <i className="fad fa-building"></i>
                                            {sliderItem.comapny}
                                        </span>
                                        <span className="tip-location">
                                          <i className="fad fa-map-marker-alt"></i>
                                            {sliderItem.location}
                                        </span>
                                    </div>
                                    <div className="ti-test">
                                        <i className="fad fa-quote-left"></i>
                                        {sliderItem.description}
                                        <i className="fad fa-quote-right"></i>
                                    </div>
                                    <div className="ti-client">
                                        <span
                                            className="tic-logo"
                                            style={{ backgroundImage: `url(${sliderItem.logo})` }}
                                        ></span>
                                        <span className="tic-employee">
                                          <b>{sliderItem.employee}</b>
                                            {sliderItem.job}
                                          <br />
                                          <i>{sliderItem.tag}</i>
                                          <small>{sliderItem.address}</small>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </Slider>
            </div>
        </section>
    );
};

export default Testimonials;