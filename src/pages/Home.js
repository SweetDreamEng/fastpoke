import React, { useState } from "react";
import PropTypes from "prop-types";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Banner from "../components/home/Banner";
import CtaBar from "../components/home/CtaBar";
import Testimonials from "../components/home/Testimonials";
import BannerContent from "../components/home/BannerContent";
import Features from "../components/home/Features";
import Career from "../components/home/Career";
import JoinCommunity from "../components/home/JoinCommunity";

import HomeApi from "../api/home";

const homeApi = new HomeApi();

const Home = ({ history }) => {

    const [specialties, GetSpecialties] = useState(0);
    const GetParams = async () => {
        const data = await homeApi.getSpecialties();
        GetSpecialties(data.data);
    };
  return (
    <>
      <Header />
      <main onLoad={GetParams}>
        <Banner />
        <CtaBar data={specialties} />
        <Testimonials />
        <BannerContent />
        <Features />
        <Career />
        <JoinCommunity />
      </main>
      <Footer />
    </>
  );
};

Home.propTypes = {
  auth: PropTypes.func,
};

export default Home;
