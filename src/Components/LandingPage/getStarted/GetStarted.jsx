import React from "react";
import "./GetStarted.css"

const GetStarted = () => {
  return (
    <div className="getStarted__container">
      <div className="getStarted__content--holder">
       <div className="getStarted__logo">
       <img
          src="https://translang.axiomthemes.com/wp-content/uploads/2017/03/GLOBAL-CONTACT_512x512-370x370.png"
          alt=""
        />
       </div>
        <h1 className="getStarted__title">Ready to Get Started?</h1>
        <p className="getStarted__subtitle">
          Our professional translators are native speakers who have work
          experience in this industry
        </p>
        <a href='https://speedytranslators.org/checkout' className="getStarted__btn">Get a translator now</a>
      </div>
    </div>
  );
};

export default GetStarted;
