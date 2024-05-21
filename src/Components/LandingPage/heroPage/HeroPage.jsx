import React from "react";
import "./HeroPage.css";

const HeroPage = () => {
  return (
    <>
      <div className="HeroPage__container">
        <p className="hero__text">
          Your Professional <br /> Translation Services
        </p>
        <a href='https://speedytranslators.org/checkout' className="hero__btn">Get a translator now</a>
      </div>
    </>
  );
};

export default HeroPage;
