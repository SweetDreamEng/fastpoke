import React from "react";
// import PropTypes from "prop-types";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Banner from "../components/candidates/Banner";
import Opportunities from "../components/candidates/Opportunities";
import CareerAdvice from "../components/candidates/CareerAdvice";
import Market from "../components/candidates/Market";
import Community from "../components/candidates/Community";

const Candidates = () => {

  return (
    <>
        <Header />
        <main id="candidates" className="vector-images">
          <Banner />
          <Opportunities />
          <CareerAdvice />
          <Market />
          <Community/>
        </main>
        <Footer />
    </>
  );
};

// Candidates.propTypes = {
//   auth:PropTypes.func,
// };

export default Candidates;
