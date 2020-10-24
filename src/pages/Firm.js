import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Banner from "../components/firms/Banner";
import Overview from "../components/firms/Overview";
import Content from "../components/firms/Content";
import Specialties from "../components/firms/Specialties";
import Locations from "../components/firms/Locations";

const Firm = () => {
  
  return (
    <>
        <Header />
        <main className="single-page" id="firm-single">
          <Banner/>
          <Overview/>
          <Content/>
          <Specialties/>
          <Locations/>
        </main>
        <Footer />
    </>
  );
};

// Firm.propTypes = {
//   auth:PropTypes.func,
// };

export default Firm;
