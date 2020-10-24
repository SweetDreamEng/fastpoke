import React, { useState } from "react";
// import PropTypes from "prop-types";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Banner from "../components/search/Banner";
import SideBar from "../components/search/SideBar";
import Results from "../components/search/Results";

import HomeApi from "../api/home";

const homeApi = new HomeApi();

const Search = ({history}) => {

    const [specialties, GetSpecialties] = useState('');

    const GetSpecialtyData = async () => {
        const data = await homeApi.getSpecialties();
        GetSpecialties(data.data);
    };

    if (specialties === "") {
        GetSpecialtyData();
    }

    return (
    <>
        <Header />
        <main className="search-page" onLoad={GetSpecialtyData}>
          <Banner/>
          <section className="search results" id="search-results-01">
            <br/><br/>
            <div className="container">
              <SideBar data={specialties}/>
              <Results />
            </div>
          </section>
        </main>
        <Footer />
    </>
  );
};

// Search.propTypes = {
//   auth:PropTypes.func,
// };

export default Search;
