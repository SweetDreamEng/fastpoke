import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ProfileEmployerForm from "../../components/profile/employer/ProfileEmployerForm";
import ProfileImage from "../../components/ui/ProfileImage";
import ProfileEmployerVacancyList from "../../components/profile/employer/ProfileEmployerVacancyList";

import {
  getVacancies,
  createVacancy,
  editVacancy,
} from "../../actions/profileEmployerActions";

import person2 from "../../assets/img/person2.jpg";
import company from "../../assets/img/company.png";

import ProfileApi from "../../api/profile";
import VacancyApi from "../../api/vacancy";

const profileApi = new ProfileApi();
const vacancyApi = new VacancyApi();

const MOCKED_PROFILE_ID = 4;
const MOCKED_GOOGLE_PLACE_ID = "";

const ProfileEmployer = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [showNewVacancyForm, setShowNewVacancyForm] = useState(false);

  const [vacancyShareError, setVacancyShareError] = useState({
    message: "",
    vacancyId: null,
    isAllowToShareVacancies: true,
  });

  const vacancies = useSelector((state) => state.profileEmployer.vacancies);
  const dispatch = useDispatch();

  useEffect(() => {
    setIsLoading(true);

    const getProfileDetails = async () => {
      try {
        const res = await profileApi.getEmployerProfileDetails(
          MOCKED_PROFILE_ID
        );

        setIsLoading(false);

        if (res.data) {
          setData(res.data);
        } else {
          throw new Error("Something went wrong");
        }
      } catch (error) {
        console.log(error);
        setIsLoading(false);
        setError("Something went wrong");
      }
    };

    getProfileDetails();
  }, []);

  useEffect(() => {
    dispatch(getVacancies());
  }, []);

  useEffect(() => {
    if (showNewVacancyForm) {
      scroller.scrollTo("newVacancyForm", {
        duration: 1000,
        delay: 100,
        smooth: true,
        offset: -150,
      });
    }
  }, [showNewVacancyForm]);

  const renderProfileImage = () => {
    if (data?.profile_picture) {
      return (
        <div
          className="pro-image btn-raised"
          style={{ backgroundImage: data?.profile_picture }}
        ></div>
      );
    }

    return (
      <div className="pro-image btn-raised">
        <span>{`${data?.first_name[0]} ${data.last_name[0]}`}</span>
      </div>
    );
  };

  const handleCreateVacancyFormSubmit = (data) => {
    dispatch(createVacancy(data));
    setShowNewVacancyForm(false);
  };

  const handleVacancyShareClick = async (recId, vacId) => {
    try {
      const res = await vacancyApi.shareVacancy({
        vacancyId: vacId,
        recruiterProfileId: recId,
      });
    } catch (error) {
      if (error.response.status === 400) {
        if (error.response?.data?.non_field_errors) {
          setVacancyShareError((state) => ({
            ...state,
            message: "You have already shared the vacancy with this recruiter",
            vacancyId: vacId,
          }));
        } else {
          setVacancyShareError((state) => ({
            ...state,
            message: "Cannot share vacancy more than 3 times at a week",
            vacancyId: vacId,
            isAllowToShareVacancies: false,
          }));
        }
      }
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!data) {
    return null;
  }

  const firstName = data?.first_name ? data?.first_name : "";
  const lastName = data?.last_name ? data?.last_name : "";

  return (
    <>
      <Header />
      <main className="profile-page" id="profile-employer">
        <section className="banner profiles">
          <div className="container">
            <ProfileImage
              initials={`${firstName ? firstName[0] : ""} ${
                lastName ? lastName[0] : ""
              }`}
              url={data?.profile_picture}
            />

            <div className="pro-details">
              <h1>{`${firstName} ${lastName}`}</h1>
              <span className="pro-title">
                Account Executive at Chatterworks
              </span>
              <span className="pro-location">
                <i className="fad fa-map-marker-alt"></i> Stamford, Connecticut
              </span>
            </div>
          </div>
        </section>
        <section className="content" id="about-02">
          <div className="container">
            <div className="pro-about-left">
              <h2>About</h2>
              <p>{data?.about}</p>
            </div>
            <div className="pro-about-right">
              <h2>Company</h2>
              <ul className="schooling clean">
                <li>
                  <div
                    className="school-image"
                    style={{ backgroundImage: `url(${company})` }}
                  ></div>
                  <div className="school-details">
                    <b>Chatterworks</b>
                    Computer Software
                    <br />
                    <i>Los Angeles, CA</i>
                    <small>Startup - Founded 2019</small>
                  </div>
                </li>
              </ul>
            </div>
            <div className="pro-openings">
              <hr />
              <h2>Opening(s)</h2>
              {showNewVacancyForm && (
                <Element name="newVacancyForm">
                  <ProfileEmployerForm
                    onSubmit={(data) => dispatch(createVacancy(data))}
                    submitButtonText="Add"
                  />
                </Element>
              )}

              <ProfileEmployerVacancyList
                vacancies={vacancies}
                onVacancyUpdate={(id, data) => dispatch(editVacancy(id, data))}
                onShareVacancyClick={handleVacancyShareClick}
                vacancyShareError={vacancyShareError}
                onAddNewVacancyClick={() => {
                  setShowNewVacancyForm(true);

                  if (showNewVacancyForm) {
                    scroller.scrollTo("newVacancyForm", {
                      duration: 1000,
                      delay: 100,
                      smooth: true,
                      offset: -150,
                    });
                  }
                }}
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

// ProfileEmployer.propTypes = {
//   auth:PropTypes.func,
// };

export default ProfileEmployer;
