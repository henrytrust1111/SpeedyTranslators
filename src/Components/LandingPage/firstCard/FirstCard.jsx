import React from "react";
import "./FirstCard.css";

const FistCard = () => {
  return (
   <>
    <div className="card__container">
      <div className="card__container--right">
        <span className="fitness__strength">we work for you</span>
        <span className="eating__for__impact aligned__self--start">
          Order Professional Translations in Just a Few Clicks
        </span>
        <p className="small__content aligned__self--start">
          Many commercial services exist that will interpret spoken language via
          telephone. There is also at least one custom-built mobile device that
          does the same thing. The device connects users to human interpreters
          who can translate
        </p>
        {/* <p className="small__content">
        If you’ve been feeling extra sluggish or want to steady the highs and
        lows that hit you throughout the day, try these energy-boosting tips.
      </p> */}
      </div>
      <div className="card__container--left">
        <img
          src="https://translang.axiomthemes.com/wp-content/uploads/2017/03/img_promo2.png"
          alt=""
        />
      </div>
    </div>



    <div className="card__container card2">
    <div className="card__container--left card2__img--holder">
        <img
          src="https://translang.axiomthemes.com/wp-content/uploads/2017/03/img_promo1.jpg"
          alt=""
        />
      </div>
      <div className="card__container--right gap--10px">
        <span className="fitness__strength">WHAT TO EXPECT?</span>
        <span className="eating__for__impact aligned__self--start">
        Professional Translation Services
        </span>
        <p className="small__content aligned__self--start">
          Many commercial services exist that will interpret spoken language via
          telephone. There is also at least one custom-built mobile device that
          does the same thing. The device connects users to human interpreters
          who can translate
        </p>
        {/* <p className="small__content">
        If you’ve been feeling extra sluggish or want to steady the highs and
        lows that hit you throughout the day, try these energy-boosting tips.
      </p> */}
      </div>
    </div>
   </>
  );
};

export default FistCard;
