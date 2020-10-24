import React from "react";
// import PropTypes from "prop-types";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Banner from "../components/recruites/Banner";
import Exposure from "../components/recruites/Exposure";
import Referrals from "../components/recruites/Referrals";
import Requisitions from "../components/recruites/Requisitions";
import Community from "../components/recruites/Community";

const Recruiters = () => {
  
  return (
    <>
        <Header />
        <main id="recruiters">
          <Banner/>
          <Exposure/>
          <Referrals/>
          <Requisitions/>
          <Community/>
        </main>
        <Footer />
    </>
  );
};

// Recruiters.propTypes = {
//   auth:PropTypes.func,
// };

export default Recruiters;
