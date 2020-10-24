import React from "react";
import PropTypes from "prop-types";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AboutBanner from "../components/about/Banner";
import Mission from "../components/about/Mission";
import Origin from "../components/about/Origin";
import Platform from "../components/about/Platform";
import JoinCommunity from "../components/about/JoinCommunity";

const About = () => {
  
  return (
    <>
        <Header />
        <main>
            <AboutBanner/>
            <Mission/>
            <Origin/>
            <Platform/>
            <JoinCommunity/>
            </main>
        <Footer />
    </>
  );
};

About.propTypes = {
  auth:PropTypes.func,
};

export default About;
