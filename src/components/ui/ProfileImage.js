import React from "react";

const ProfileImage = ({ url, initials }) => {
  if (url) {
    return (
      <div
        className="pro-image btn-raised"
        style={{ backgroundImage: `url(${url})` }}
      ></div>
    );
  }

  return (
    <div className="pro-image btn-raised">
      <span>{initials}</span>
    </div>
  );
};

export default ProfileImage;
