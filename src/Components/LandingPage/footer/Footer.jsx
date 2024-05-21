import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer__container">
      <div className="footer__wrapper">
        <div className="footer__top">
          <div className="footer__top--container">
            <div className="footer__title">What We Offer</div>
            <div className="footer__content">
              <p className="footer__content--text">
                Business and Legal Translation
              </p>
              <p className="footer__content--text">Technical Translation</p>
              <p className="footer__content--text">Personal Documents</p>
              <p className="footer__content--text">
                Apostille and Legalization
              </p>
              <p className="footer__content--text">Hands-on Learning</p>
              {/* <p className="footer__content--text">Community Suppor</p>
              <p className="footer__content--text">
                Accessible Anytime, Anywhere
              </p> */}
            </div>
          </div>

          <div className="footer__top--container">
            <div className="footer__title">More Info</div>
            <div className="footer__content">
              <a href="/contactUs" className="footer__content--text">
                Contact Us
              </a>
              <a href="/aboutUs" className="footer__content--text">
                About Us
              </a>
              <a href="/blog" className="footer__content--text">
                Blog
              </a>
              {/* <p className="footer__content--text"></p> */}
            </div>
          </div>

          <div className="footer__top--container">
            <div className="footer__title">Other Links</div>
            <div className="footer__content">
              <a href="/privacy&policy" className="footer__content--text">Privacy And Policy</a>
              <p className="footer__content--text">Terms And conditions</p>
            </div>
          </div>
        </div>
        <div className="footer__down">
          <a href="/" className="footer__logo">
            <p className="speedyTrans__newLogo">SpeedyTranslator</p>
            {/* <img
              src="https://translang.axiomthemes.com/wp-content/uploads/2017/03/logo.png"
              className="Mainheaderlogoimag"
            /> */}
          </a>
        </div>
        <div className="footer__footer">
          <p className="footer__footer--text">© 2023 TransLang.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
