import React from "react";
// import PropTypes from "prop-types";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const SignupRole = () => {
  return (
    <>
      <Header />
      <main className="signup search-page">
        <section className="search content" id="signup-role-01">
          <div className="container">
            <h1>Join now!</h1>
            <h2>Choose your role...</h2>
            <br />
            <br />
            <div className="signup-nav">
              <Link
                to={{
                  pathname: "/signup",
                  state: { role: "employer" },
                }}
              >
                <img src="../assets/img/placeholder.jpg" />
                Employer
              </Link>
              <Link
                to={{
                  pathname: "/signup",
                  state: { role: "recruiter" },
                }}
              >
                <img src="../assets/img/placeholder.jpg" />
                Recruiter
              </Link>
              <Link
                to={{
                  pathname: "/signup",
                  state: { role: "talent" },
                }}
              >
                <img src="../assets/img/placeholder.jpg" />
                Talent
              </Link>
            </div>
            <br />
            <br />
            <p style={{ textAlign: "center" }}>
              <small style={{ color: "red" }}>
                <b>(for external recruiters only)</b>
              </small>
            </p>
            <br />
            <br />
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

// SignupRole.propTypes = {
//   auth:PropTypes.func,
// };

export default SignupRole;
