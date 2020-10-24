import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import queryString from "query-string";

import Header from "../components/Header";
import Footer from "../components/Footer";
import PasswordResetForm from "../components/auth/PasswordResetForm";
import SocialButtons from "../components/auth/SocialButtons";

import { login } from "../actions/userActions";
import { SERVER_URL } from "../config";

const Login = () => {
  const [showResetPassword, setShowResetPassword] = useState(false);
  const [error, setError] = useState();
  const [formFields, setFormFields] = useState({
    password: "",
    email: "",
  });

  const dispatch = useDispatch();
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
    dispatch(login(formFields));
  };

  const handleForgotPasswordClick = (e) => {
    e.preventDefault();

    setShowResetPassword(true);
  };

  const handleSuccessGoogleLogin = (res) => {
    window.location = `${SERVER_URL}/auth/google-sign-in/registered/${res.accessToken}`;
  };

  const handleFailureGoogleLogin = (res) => {
    history.push(`/login/?error-message=${res.error}`);
  };

  useEffect(() => {
    const parsedQuery = queryString.parse(location.search);

    if (parsedQuery?.["error-message"]) {
      setError(parsedQuery?.["error-message"]);
    }
  }, [location.search, history]);

  if (showResetPassword) {
    return <PasswordResetForm />;
  }

  return (
    <>
      <Header />
      <main className="search-page">
        <section className="search content">
          <div className="container">
            <div className="account-box">
              <h1>Login</h1>
              <div className="form-row">
                <div className="fr-100">
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    value={formFields.email}
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="fr-100">
                  <label>Password</label>
                  <input
                    type="password"
                    name="password"
                    onChange={handleChange}
                    value={formFields.password}
                  />
                </div>
              </div>
              <div className="form-row">
                <a
                  onClick={handleForgotPasswordClick}
                  className="form-row-link"
                >
                  Forgot password?
                </a>
              </div>
              <div className="form-row">
                <div className="fr-100">
                  <p className="save-box">
                    <button
                      onClick={handleFormSubmit}
                      className="btn btn-primary login-link"
                    >
                      Login
                    </button>
                  </p>
                </div>
              </div>
            </div>
            <p style={{ textAlign: "center" }}>
              <b style={{ fontSize: 140 + "%" }}>or</b>
            </p>
            <br />
            <div className="signup-nav">
              <SocialButtons
                onSuccessGoogleLogin={handleSuccessGoogleLogin}
                onFailureGoogleLogin={handleFailureGoogleLogin}
              />
            </div>
            <div className="login-error">{error}</div>
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

export default Login;
