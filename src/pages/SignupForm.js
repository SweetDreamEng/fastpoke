import React, { useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
// import PropTypes from "prop-types";
import Header from "../components/Header";
import Footer from "../components/Footer";

import AuthApi from "../api/auth";

const authApi = new AuthApi();

const SignupForm = () => {
  const [formFields, setFormFields] = useState({
    firstName: "test",
    lastName: "test",
    email: "test@gmail.com",
    password: "Admin123",
    confirmPassword: "Admin123",
    location: "location",
  });

  const history = useHistory();
  const location = useLocation();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormFields((state) => ({
      ...state,
      [name]: value,
    }));
  };

  const handleFormSubmit = async () => {
    try {
      const res = await authApi.registerUser({
        ...formFields,
        userType: location.state.role,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Header />
      <main className="search-page">
        <section className="search content" id="signup-form-01">
          <div className="container">
            <div className="account-box">
              <h1>Sign Up</h1>
              <div className="form-row">
                <div className="fr-50">
                  <label>First Name</label>
                  <input
                    type="name"
                    value={formFields.firstName}
                    name="firstName"
                    onChange={handleChange}
                  />
                </div>
                <div className="fr-50">
                  <label>Last Name</label>
                  <input
                    type="name"
                    value={formFields.lastName}
                    name="lastName"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="fr-100">
                  <label>Email</label>
                  <input
                    type="email"
                    value={formFields.email}
                    name="email"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="fr-100">
                  <label>Password</label>
                  <input
                    type="password"
                    name="password"
                    value={formFields.password}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="fr-100">
                  <label>Confirm Password</label>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={formFields.confirmPassword}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="fr-100">
                  <label>Location</label>
                  <input
                    value={formFields.location}
                    type="name"
                    name="location"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <p className="save-box">
                <Link
                  onClick={() => history.goBack()}
                  to={{
                    pathname: "/signup",
                    state: {
                      role: location.state.role,
                    },
                  }}
                  style={{ float: "left", padding: "12px" }}
                >
                  <i className="fad fa-arrow-square-left"></i> Go Back
                </Link>
                <button
                  type="submit"
                  onClick={handleFormSubmit}
                  className="btn btn-primary btn-save"
                >
                  Continue
                </button>
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

// SignupForm.propTypes = {
//   auth:PropTypes.func,
// };

export default SignupForm;
