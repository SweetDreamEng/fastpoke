import React, { useState, useEffect } from "react";
import {
  Link,
  Route,
  Switch,
  useLocation,
  useRouteMatch,
} from "react-router-dom";
import { useSelector } from "react-redux";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ProfileImage from "../../components/ui/ProfileImage";
import ProfileRecruiterProfileTab from "../../components/profile/recruiter/ProfileRecruiterProfileTab";
import ProfileRecruiterReferralsTab from "../../components/profile/recruiter/ProfileRecruiterReferralsTab";

import { USER_TYPE_RECRUITER } from "../../constants";

import person from "../../assets/img/person.jpg";
import tulane from "../../assets/img/tulane.jpg";

import ProfileApi from "../../api/profile";
import ReferralApi from "../../api/referral";

const profileApi = new ProfileApi();
const referralApi = new ReferralApi();

const MOCKED_PROFILE_ID = 5;

const ProfileRecruiter = ({}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState({});
  const [error, setError] = useState("");

  const [referralsLoading, setReferralsLoading] = useState(false);
  const [referralsError, setReferralsError] = useState("");
  const [referrals, setReferrals] = useState({
    clientList: [],
    candidateList: [],
  });

  const user = useSelector((state) => state.user);

  const match = useRouteMatch();
  const location = useLocation();

  useEffect(() => {
    const getProfileDetails = async () => {
      setIsLoading(true);

      try {
        const res = await profileApi.getRecruiterProfileDetails(
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
    const getReferrals = async () => {
      const { getClientReferrals, getCandidateReferrals } = referralApi;

      setReferralsLoading(true);

      try {
        const responses = await Promise.all([
          getClientReferrals(),
          getCandidateReferrals(),
        ]);

        const [clientReferrals, candidateReferrals] = responses.map((res) => {
          if (res?.data) {
            return res.data;
          }

          throw new Error("Something went wrong");
        });

        setReferrals({
          clientList: clientReferrals,
          candidateList: candidateReferrals,
        });

        setReferralsLoading(false);
      } catch (error) {
        console.log(error);
        setReferralsLoading(false);
        setReferralsError("Something went wrong");
      }
    };

    getReferrals();
  }, []);

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

  const referralsNumber =
    referrals.clientList.length + referrals.candidateList.length;

  return (
    <>
      <Header />
      <main className="profile-page" id="profile-recruiter">
        <section className="banner profiles">
          <div className="container">
            <span className="pgc-ref">{referralsNumber}</span>
            <ProfileImage
              initials={`${firstName ? firstName[0] : ""} ${
                lastName ? lastName[0] : ""
              }`}
              url={data?.profile_picture}
            />
            <div className="pro-details">
              <h1>{`${firstName} ${lastName}`}</h1>
              <span className="pro-title">
                <i className="fad fa-map-marker-alt"></i> Stamford, Connecticut
              </span>
              <span className="pro-location">
                <i className="fad fa-award"></i> 10 years in the industry
              </span>
            </div>
            {user.userType === USER_TYPE_RECRUITER ? (
              <>
                <div
                  href="#"
                  class="btn btn-display btn-secondary btn-icon-left btn-msg btn-views"
                >
                  <i class="fad fa-eye"></i>
                  <b class="view-count">36</b>
                </div>
                <a
                  href="#"
                  class="btn btn-tertiary btn-icon-left btn-ref btn-raised"
                >
                  <i class="fad fa-paper-plane"></i>
                  <span>Request referral</span>
                </a>
              </>
            ) : (
              <>
                <a
                  href="#"
                  className="btn btn-primary btn-icon-left btn-msg btn-raised"
                >
                  <i className="fad fa-envelope"></i> <span>Message</span>
                </a>
                <a
                  href="#"
                  className="btn btn-tertiary btn-icon-left btn-ref btn-raised"
                >
                  <i className="fad fa-edit"></i> <span>Write a referral</span>
                </a>
              </>
            )}
          </div>
        </section>
        <section className="waside content" id="about-01">
          <div className="container">
            <aside className="waside-bar">
              <div className="background">
                <span
                  className="wab-logo"
                  style={{ backgroundImage: `url(${tulane})` }}
                ></span>
                <b className="wab-name">Fastpoke</b>
                <small>
                  <i className="fad fa-map-marker-alt"></i> Stamford, CT
                </small>
                <small>
                  <i className="fad fa-users"></i> 1-10 Recruiters
                </small>
                <hr />
                <b>Placement Levels</b>
                <br />
                <br />
                <ul className="clean chrono">
                  <li>Executive</li>
                  <li>Director</li>
                  <li>Managerial</li>
                </ul>
              </div>
            </aside>
            <div className="waside-main">
              <nav className="page-menu">
                <ul className="clean">
                  <li
                    className={`pm-profile ${
                      location.pathname === match.url ? "active" : ""
                    }`}
                  >
                    <Link to={`${match.url}`}>
                      <i className="fad fa-user-circle"></i> Profile
                    </Link>
                  </li>
                  <li
                    className={`pm-referrals ${
                      location.pathname === `${match.url}/referrals`
                        ? "active"
                        : ""
                    }`}
                  >
                    <Link to={`${match.url}/referrals`}>
                      <i className="fad fa-bullhorn"></i> Referrals{" "}
                      <span>{referralsNumber}</span>
                    </Link>
                  </li>
                </ul>
              </nav>
              <Switch>
                <Route
                  path={`${match.path}/`}
                  exact
                  component={ProfileRecruiterProfileTab}
                />
                <Route
                  path={`${match.path}/referrals`}
                  exact
                  render={(props) => {
                    return (
                      <ProfileRecruiterReferralsTab
                        {...props}
                        referrals={referrals}
                      />
                    );
                  }}
                />
              </Switch>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

// ProfileRecruiter.propTypes = {
//   auth:PropTypes.func,
// };

export default ProfileRecruiter;
