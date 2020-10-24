import React from "react";
import { GoogleLogin } from "react-google-login";
import { useHistory } from "react-router-dom";

import { GOOGLE_CLIENT_ID } from "../../config";

const SocialButtons = ({ onSuccessGoogleLogin, onFailureGoogleLogin }) => {
  return (
    <div>
      <GoogleLogin
        clientId={GOOGLE_CLIENT_ID}
        buttonText="Google"
        onSuccess={onSuccessGoogleLogin}
        onFailure={onFailureGoogleLogin}
      />
    </div>
  );
};

export default SocialButtons;
