import React from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import person_background from "../assets/img/person.jpg";

import { Link } from "react-router-dom";
import { logout } from "../actions/userActions";

const Header = ({ auth = false }) => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleLogoutClick = (e) => {
    e.preventDefault();

    dispatch(logout());
  };

  return (
    <header>
      <div className="container">
        <h1>
          <a href="/" className="logo">
            <img src="assets/img/logo.svg" alt="Fastpoke Logo" />
          </a>
        </h1>
        <a href="/search" className="btn btn-outline">
          <b>
            Browse <span>Recruiters</span>
          </b>
        </a>
        <span className="tagline"></span>
        <nav>
          {user.isLoggedIn ? (
            <ul class="clean logged-in">
              <li>
                <a href="/message">
                  <i className="fad fa-comments-alt"></i>
                  <span>Messaging</span>
                </a>
              </li>
              <li>
                <a href="resume.html">
                  <i className="fad fa-file-user"></i>
                  <span>Resume</span>
                </a>
              </li>
              <li>
                <a className="acc-dropdown">
                  <i
                    className="profile"
                    style={{ backgroundImage: `url(${person_background})` }}
                  ></i>
                  <span>Brian G.</span>
                </a>
                <ul className="clean dd-menu">
                  <li>
                    <a href="#" onClick={handleLogoutClick}>
                      Logout
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          ) : (
            <ul className="clean">
              <li>
                <Link className="btn btn-signin" to="/login">
                  <i className="fad fa-sign-in-alt"></i>
                  <span>Sign In</span>
                </Link>
              </li>
              <li>
                <Link className="btn btn-primary btn-signin" to="/signup-role">
                  <i className="fad fa-sign-in-alt"></i>
                  <span>Sign Up</span>
                </Link>
              </li>
            </ul>
          )}
        </nav>
      </div>
    </header>
  );
};

Header.propTypes = {
  auth: PropTypes.func,
};

export default Header;
