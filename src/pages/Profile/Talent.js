import React, { useState, useEffect } from "react";
// import PropTypes from "prop-types";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ProfileImage from "../../components/ui/ProfileImage";

import person from "../../assets/img/person.jpg";
import tulane from "../../assets/img/tulane.jpg";

import ProfileApi from "../../api/profile";

const profileApi = new ProfileApi();

const MOCKED_PROFILE_ID = 5;

const ProfileTalent = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);

    const getProfileDetails = async () => {
      try {
        const res = await profileApi.getTalentProfileDetails(MOCKED_PROFILE_ID);

        setIsLoading(false);

        if (res.data) {
          setData(res.data);
        } else {
          throw new Error("Something went wrong");
        }
      } catch (error) {
        console.log(error);
        setIsLoading(false);
        setError("Something went wrong");
      }
    };

    getProfileDetails();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!data) {
    return null;
  }

  const firstName = data?.first_name ? data?.first_name : "";
  const lastName = data?.last_name ? data?.last_name : "";

  return (
    <>
      <Header />
      <main className="profile-page" id="profile-talent">
        <section className="banner profiles">
          <div className="container">
            <ProfileImage
              initials={`${firstName ? firstName[0] : ""} ${
                lastName ? lastName[0] : ""
              }`}
              url={data?.profile_picture}
            />
            <div className="pro-details">
              <h1>{`${firstName} ${lastName}`}</h1>
              <span className="pro-title">Account Executive at Fastpoke</span>
              <span className="pro-location">
                <i className="fad fa-map-marker-alt"></i> Stamford, Connecticut
              </span>
            </div>
          </div>
        </section>
        <section className="content" id="about-01">
          <div className="container">
            <h2>About</h2>
            <p>{data?.about}</p>
            <hr />
            <div className="pro-details">
              <div className="pd-experience">
                <h2>Experience</h2>
                <ul className="chrono education clean">
                  <li>
                    <span
                      className="pde-logo"
                      style={{ backgroundImage: `url(${tulane})` }}
                    ></span>
                    <b>Account Executive</b>
                    <i>Fastpoke - Full-Time</i>
                    <small>Sep 2019 - Present</small>
                  </li>
                  <li>
                    <span
                      className="pde-logo"
                      style={{ backgroundImage: `url(${tulane})` }}
                    ></span>
                    <b>Account Executive</b>
                    <i>Fastpoke - Full-Time</i>
                    <small>Sep 2019 - Present</small>
                    <p>
                      Managed one of twitters strategy teams and aided in sales
                      development.
                    </p>
                  </li>
                </ul>
              </div>
              <hr className="pd-hr" />
              <div className="pd-education">
                <h2>Education</h2>
                <ul className="schooling clean">
                  <li>
                    <div
                      className="school-image"
                      style={{ backgroundImage: `url(${tulane})` }}
                    ></div>
                    <div className="school-details">
                      <b>Tulane University</b>
                      <i>Finance</i>
                      <small>2016-2020</small>
                    </div>
                  </li>
                  <li>
                    <div
                      className="school-image"
                      style={{ backgroundImage: `url(${tulane})` }}
                    ></div>
                    <div className="school-details">
                      <b>Tulane University</b>
                      <i>Business</i>
                      <small>2014-2016</small>
                    </div>
                  </li>
                </ul>
                <h2>Certifications</h2>
                <ul className="certs clean">
                  <li>CPA</li>
                  <li>Salesforce</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

// ProfileTalent.propTypes = {
//   auth:PropTypes.func,
// };

export default ProfileTalent;
