import React from "react";
// import PropTypes from "prop-types";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Banner from "../components/employers/Banner";
import Referrals from "../components/employers/Referrals";
import Connect from "../components/employers/Connect";
import Requisition from "../components/employers/Requisition";
import Community from "../components/employers/Community";

const Employers = () => {
  
  return (
    <>
        <Header />
        <main id="recruiters">
          <Banner/>
          <Referrals/>
          <Connect/>
          <Requisition/>
          <Community/>
        </main>
        <Footer />
    </>
  );
};

// Employers.propTypes = {
//   auth:PropTypes.func,
// };

export default Employers;
