import React from "react";
import dayjs from "dayjs";

import RelativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(RelativeTime);

const ProfileRecruiterReferral = ({
  description,
  positionFilled,
  companySize,
  industry,
  firstName,
  date,
  googlePlaceId,
  imageUrl,
}) => {
  const renderDate = () => {
    return dayjs(dayjs(date)).fromNow();
  };

  return (
    <>
      <p>{description}</p>
      <br />
      <div className="pro-details">
        <span className="pd-date">{renderDate()}</span>
        <div className="pd-experience">
          <ul className="chrono education clean">
            <li>
              <span
                className="pde-logo"
                style={{ backgroundImage: `url(${imageUrl})` }}
              ></span>
              <b>{firstName} | Chief of Operations</b>
              <small>
                <span>Position Filled</span>: {positionFilled}
              </small>
              <small>
                <span>Company Size</span>: {companySize}
              </small>
              <small>
                <span>Industry</span>: {industry}
              </small>
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <br />
    </>
  );
};

export default ProfileRecruiterReferral;
