import React, { useLayoutEffect, useState } from "react";
import "./Header.css";
import { useLocation, useNavigate } from "react-router-dom";
import HeaderBurgerPopUp from "../../BurgerMenu/HeaderBurgerPopUp";

const Header = () => {
  const nav = useNavigate();
  const [navigate,setNavigate] = useState("/")
  const [menuPop, setMenuPop] = useState(false);
  const {pathname} = useLocation()
  const newNav = pathname.substring(1)
console.log(newNav);
useLayoutEffect(()=>{
  if(newNav){
    setNavigate(newNav)
  }
},[])
  const handleNav = (navValue) => {
    setNavigate(navValue)
    if (navValue === "/") {
      nav("/");
    } else if (navValue === "blog") {
      nav("/blog");
    } else if (navValue === "aboutUs") {
      nav("/aboutUs");
    } else if (navValue === "contactUs") {
      nav("/contactUs");
    }else if (navValue === "checkout") {
      nav("/checkout");
    }
  };

  return (
    <>
      <div className="mainHeader">
        <div className="mainHeaderWrapper">
          <div className="Mainheaderlogo" onClick={() => handleNav("/")}>
            <h3 className="speedyTrans__newLogo">SpeedyTranslator</h3>
            {/* <img
              src="https://translang.axiomthemes.com/wp-content/uploads/2017/03/logo.png"
              className="Mainheaderlogoimag"
            /> */}
          </div>
          <div className="headerhome">
            <nav className={navigate==="/"? "navActive":"nav"} onClick={() => handleNav("/")}>Home</nav>
            <nav className={navigate==="aboutUs"? "navActive":"nav"} onClick={() => handleNav("aboutUs")}>About Us</nav>
            <nav className={navigate==="blog"? "navActive":"nav"} onClick={() => handleNav("blog")}>Blog</nav>
            <nav className={navigate==="contactUs"? "navActive":"nav"} onClick={() => handleNav("contactUs")}>Contact Us</nav>
          </div>
          <div className="registerbody">
            <button className="headlogin" onClick={() => handleNav("checkout")}>GET STARTED</button>
          </div>
          <div
            className="landingPageBurgerMenu"
            onClick={() => setMenuPop(true)}
          >
            <img src="/icons/menu.png" alt="" />
          </div>
        </div>
      </div>
      {menuPop ? <HeaderBurgerPopUp setMenuPop={setMenuPop} /> : null}
    </>
  );
};

export default Header;
