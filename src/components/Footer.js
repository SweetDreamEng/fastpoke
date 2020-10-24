import React from "react";
// import PropTypes from "prop-types";

const Footer = () => {
  
  return (
    <footer>
        <div className="container">
            <div className="foot-left">
            <a href="#" className="btn btn-outline btn-light">Get in touch</a><br/><br/>
            <img src="assets/img/logo-white.svg" width="200" />
            </div>
            <div className="foot-right">
            <nav>
                <ul className="clean">
                <li><a href="/about">About Us</a></li>
                <li><a href="/blog">Blog</a></li>
                <li><a href="/help">Help</a></li>
                <li><a href="/terms">Terms</a></li>
                <li><a href="/privacy">Privacy</a></li>
                </ul>
            </nav>
            <ul className="clean foot-social">
                <li>Follow us on</li>
                <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                <li><a href="#"><i className="fab fa-instagram"></i></a></li>
            </ul>
            </div>
            <div className="foot-copyright">
            &copy;2020 Fastpoke, LLC
            </div>
        </div>
    </footer>
  );
};

// Footer.propTypes = {
//   auth:PropTypes.func,
// };

export default Footer;
