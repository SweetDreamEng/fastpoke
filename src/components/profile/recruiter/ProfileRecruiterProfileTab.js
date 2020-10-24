import React from "react";

const ProfileRecruiterProfileTab = () => {
  return (
    <div className="wm-content">
      <h2>About</h2>
      <p>some infod</p>
      <hr />
      <h2>My Specialties</h2>
      <h3>Industries Served</h3>
      <ul className="certs clean">
        <li>CPG</li>
        <li>Logistics & Supply Chain</li>
        <li>Hospitality</li>
      </ul>
      <br />
      <h3>Industries Served</h3>
      <ul className="certs clean">
        <li>Supply Chain</li>
        <li>Manufacturing</li>
      </ul>
      <hr />
      <div className="pro-details">
        <div className="pd-experience">
          <h2>Experience</h2>
          <ul className="chrono education clean">
            <li>
              <span
                className="pde-logo"
                // style={{ backgroundImage: `url(${tulane})` }}
              ></span>
              <b>Account Executive</b>
              <i>Fastpoke - Full-Time</i>
              <small>Sep 2019 - Present</small>
            </li>
            <li>
              <span
                className="pde-logo"
                // style={{ backgroundImage: `url(${tulane})` }}
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
      </div>
      <hr />
      <h2>Services</h2>
      <ul className="certs services clean">
        <li>Direct Hire</li>
        <li>Contract</li>
        <li>Contract-to-Hire</li>
      </ul>
    </div>
  );
};

export default ProfileRecruiterProfileTab;
