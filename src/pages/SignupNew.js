import React from "react";
// import PropTypes from "prop-types";
import Header from "../components/Header";
import Footer from "../components/Footer";

const SignupNew = () => {
  
  return (
    <>
        <Header />
        <main className="search-page">
          <section className="search content" id="signup-form-01">
            <div className="container">
              <div className="account-box">
                <h3 className="h4" style={{color: "#3691ed"}}>Build your Business. Build your career.  Join today!</h3>
                <br/>
                <p style={{opacity: ".4"}}><b>Sign up with...</b></p>
                <div className="signup-nav">
                  <a href="#">[Replace]</a>
                  <a href="#">[Replace]</a>
                  <a href="#">[Replace]</a>
                </div>
                <br/><br/>
                <hr className="or-hr" />
                <div className="form-row">
                  <div className="fr-50">
                    <label>First Name</label>
                    <input type="name" />
                  </div>
                  <div className="fr-50">
                    <label>Last Name</label>
                    <input type="name" />
                  </div>
                </div>
                <div className="form-row">
                  <div className="fr-100">
                    <label>Email</label>
                    <input type="email" />
                  </div>
                </div>
                <div className="form-row">
                  <div className="fr-100">
                    <label>Password</label>
                    <input type="password" />
                  </div>
                </div>
                <p className="save-box">
                  <a href="signup.html" style={{float: "left", padding: "12px"}}>
                    <i className="fad fa-arrow-square-left"></i> Back
                  </a>
                  <button type="submit" className="btn btn-primary btn-save">GO</button>
                </p>
                <br/><br/>
              </div>
            </div>
          </section>
        </main>
        <Footer />
    </>
  );
};

// SignupNew.propTypes = {
//   auth:PropTypes.func,
// };

export default SignupNew;
