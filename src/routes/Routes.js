import React, { useEffect } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
// Pages
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import SignupForm from "../pages/SignupForm";
import SignupNew from "../pages/SignupNew";
import SignupRole from "../pages/SignupRole";
import About from "../pages/About";
import Account from "../pages/Account";
import Candidates from "../pages/Candidates";
import Employers from "../pages/Employers";
import Firm from "../pages/Firm";
import Privacy from "../pages/Privacy";
import Recruiters from "../pages/Recruiters";
import Report from "../pages/Report";
import Search from "../pages/Search";
import Terms from "../pages/Terms";
import WriteReferral from "../pages/WriteReferral";
import ProfileEmployer from "../pages/Profile/Employer";
import ProfileRecruiter from "../pages/Profile/Recruiter";
import ProfileTalent from "../pages/Profile/Talent";
import ResetPassword from "../pages/ResetPassword";
import Message from "../pages/Message";

const Routes = ({ history }) => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/signup-new" component={SignupNew} />
      <Route exact path="/signup-form" component={SignupForm} />
      <Route exact path="/signup-role" component={SignupRole} />
      <Route exact path="/about" component={About} />
      <Route exact path="/account" component={Account} />
      <Route exact path="/candidates" component={Candidates} />
      <Route exact path="/employers" component={Employers} />
      <Route exact path="/firm" component={Firm} />
      <Route exact path="/privacy" component={Privacy} />
      <Route exact path="/recruiters" component={Recruiters} />
      <Route exact path="/report" component={Report} />
      <Route exact path="/search" component={Search} />
      <Route exact path="/terms" component={Terms} />
      <Route exact path="/writereferral" component={WriteReferral} />
      <Route exact path="/profile-employer" component={ProfileEmployer} />
      <Route path="/profile-recruiter" component={ProfileRecruiter} />
      <Route exact path="/profile-talent" component={ProfileTalent} />
      <Route exact path="/reset-password" component={ResetPassword} />
      <Route exact path="/message" component={Message} />
    </Switch>
  );
};

export default withRouter(Routes);

//https://fastpoke.com/reset-password/?uid=<SOME_UID>&token=<SOME_TOKEN>
