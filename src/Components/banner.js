import React from "react";
import bannerImage from "./banner-image1.jpg";
import "./banner.css";

function Banner() {
  return (
    <div className="banner-container">
      <div className="banner-content">
        <h1 className="banner-header">Serving Dallas a Taste of Eastern Europe</h1>
      </div>
      <div className="banner-image" style={{ backgroundImage: `url(${bannerImage})` }} />
    </div>
  );
}

export default Banner;
