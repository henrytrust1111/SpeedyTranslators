import React from "react";
import "./AboutUs.css";
import ScrollToTop from "../scrollToTop/ScrollToTop";


const AboutUs = () => {
  return (
    <>
    <ScrollToTop />
      <div className="aboutUs">
        <div class="aboutHero-section">
          <div class="hero-overlay">
            <h1 class="aboutHero__overlay--text">About Us</h1>
          </div>
        </div>

        <div className="card__container card2">
          <div className="card__container--right gap--10px">
            <span className="fitness__strength">ABOUT US</span>
            <span className="eating__for__impact aligned__self--start">
              OUR MISSION AND ETHIC Our High Quality Translation
            </span>
            <p className="small__content aligned__self--start">
              Many commercial services exist that will interpret spoken language
              via telephone. There is also at least one custom-built mobile
              device that does the same thing. The device connects users to
              human interpreters who can translate between English and 180 other
              languages.
            </p>
            <div className="aboutbtn">Contact Us</div>
           
          </div>
          <div className="card__container--left about__cardImage">
            <img
              src="https://translang.axiomthemes.com/wp-content/uploads/2017/03/img_promo2.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
