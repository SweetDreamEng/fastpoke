import React from "react";
import { useLocation, useHistory, Link } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";
import SocialButtons from "../components/auth/SocialButtons";

import { SERVER_URL } from "../config";

const Signup = (props) => {
  const location = useLocation();
  const history = useHistory();

  const role = location?.state?.role;

  const handleSuccessGoogleLogin = (res) => {
    window.location = `${SERVER_URL}/auth/google-sign-in/${role}/${res.accessToken}`;
  };

  const handleFailureGoogleLogin = (res) => {
    history.push(`/login/?error-message=${res.error}`);
  };

  return (
    <>
      <Header />
      <main className="search-page">
        <section className="search content" id="signup-01">
          <div className="container">
            <h1>Sign up with...</h1>
            <br />
            <br />
            <div className="signup-nav">
              <SocialButtons
                onSuccessGoogleLogin={handleSuccessGoogleLogin}
                onFailureGoogleLogin={handleFailureGoogleLogin}
              />
            </div>
            <br />
            <br />
            <p>
              <b style={{ fontSize: "140%" }}>or</b>
            </p>
            <br />
            <br />
            <Link
              to={{
                pathname: "/signup-form",
                state: {
                  role: location.state.role,
                },
              }}
              className="btn btn-primary signup-link"
            >
              Sign Up Manually
            </Link>
            <br />
            <br />
            <br />
            <br />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

// Signup.propTypes = {
//   auth:PropTypes.func,
// };

export default Signup;
