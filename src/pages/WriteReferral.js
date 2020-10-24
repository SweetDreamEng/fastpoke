import React from "react";
// import PropTypes from "prop-types";

const WriteReferral = () => {
  
  return (
    <div className="reset">
      <header>
        <div className="container">
          <h1>
            <a href="/" className="logo">
              <img src="../assets/img/logo.svg" alt="Fastpoke Logo" />
            </a>
          </h1>
        </div>
      </header>
      <main className="access-page">
        <section className="access content" id="reset-01">
          <div className="container">
            <p>Hi Darren,<br/><br/>
              You have received an invitation to write a referral for <a href="#">Allen Harper</a>. To write
              the referral please click the link below:</p>
              <a href="#" className="btn btn-primary btn-icon-left"><i className="fad fa-edit"></i> Write Referral</a>
              <p>If you do not wish to write one, please ignore this email or contact
                us at <a href="mailto:help@fastpoke.com">help@fastpoke.com</a>.<br/><br/>
                We thank you for your willingness to share your experience and knowledge with the rest of the community!
                <br/><br/><br/><br/>
                Thanks,<br/>
                <b>The Fastpoke Team</b></p>
          </div>
          <p className="copy">&copy;<b>2020 Fastpoke, LLC</b><br/>All rights reserved.</p>
        </section>
      </main>
    </div>
  );
};

// WriteReferral.propTypes = {
//   auth:PropTypes.func,
// };

export default WriteReferral;
