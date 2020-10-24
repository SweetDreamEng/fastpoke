import React from "react";
// import PropTypes from "prop-types";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Account = () => {
  return (
    <>
      <Header auth={true} />
      <main className="search-page" id="account">
        <section className="search content" id="account-01">
          <div className="container">
            <div className="account-box">
              <h1>Account & Settings</h1>
              <label>
                Email<i className="fad fa-edit"></i>
              </label>
              <input
                type="email"
                placeholder="Search by firm name..."
                value="gene.yuss425@gmail.com"
              />
              <label>
                Password<i className="fad fa-edit"></i>
              </label>
              <input type="password" value="XXXXXXXXX" />
              <hr />
              <label>
                Account Type<i className="fad fa-edit"></i>
              </label>
              <select>
                <option>Talent</option>
              </select>
              <label>
                Default Location (for search)<i className="fad fa-edit"></i>
              </label>
              <input type="name" value="Stamford, Connecticut" />
              <label>
                Who can see my profile?<i className="fad fa-edit"></i>
              </label>
              <select>
                <option>Me and recruiters I contact</option>
              </select>
              <hr />
              <p className="setting">
                <b>Account Status:</b> <span>Active</span>
              </p>
              <p className="setting">
                <b>Blocked Users:</b> <span>0</span>
              </p>
              <p className="save-box">
                <button type="submit" className="btn btn-primary btn-save">
                  Save
                </button>
              </p>
              <br />
              <br />
              <p>
                <a href="#" style={{ color: "red" }}>
                  Deactivate Account
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

// Account.propTypes = {
//   auth:PropTypes.func,
// };

export default Account;
