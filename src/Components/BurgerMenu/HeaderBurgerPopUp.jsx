import React, { useState } from "react";
import "./HeaderBurgerPopUp.css";
import { ImCancelCircle } from "react-icons/im";
import { useNavigate } from "react-router-dom";

const HeaderBurgerPopUp = ({ setMenuPop }) => {
  const nav = useNavigate()

  const handleNavClick = (navItem) => {
    if (navItem === "home") {
      nav("/");
      setMenuPop(false);
    } else if (navItem === "about") {
      nav("/aboutUs");
      setMenuPop(false);
    } else if (navItem === "contact") {
      nav("/contactUs");
      setMenuPop(false);
    } else if (navItem === "blog") {
      nav("/blog");
      setMenuPop(false);
    }
  };
  return (
    <div className="burgerMenu">
      <div className="burgerMenu__cancelIcon" onClick={() => setMenuPop(false)}>
        <ImCancelCircle />
      </div>
      <div className="burgerMenu__content--container">
        {/* <p>Home</p>
            <p>Blog</p>
            <p>Contact us</p>
            <p>About us</p> */}
        <p onClick={() => handleNavClick("home")}>Home</p>
        <p onClick={() => handleNavClick("about")}>About Us</p>
        <p onClick={() => handleNavClick("blog")}>Blog</p>
        <p onClick={() => handleNavClick("contact")}>Contact Us</p>
        <p className="burgerMenu__getStarted">Get Started</p>
      </div>
    </div>
  );
};

export default HeaderBurgerPopUp;
