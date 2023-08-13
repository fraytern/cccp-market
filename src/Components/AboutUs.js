import React from "react";
import "./AboutUs.css";
import image from "./store.jpg";

function AboutUs() {
  return (
    <div className="about-us">
      <div className="about-us-text">
        <h2>About Us</h2>
        <p>
          We are a Russian & Eastern European food store located in Plano, TX. Our mission is to bring the taste of authentic post-Soviet cuisine to the local community.
        </p>
        <p>
          All of our products are made with high-quality ingredients and prepared with care. We offer a wide variety of traditional Russian foods, including pelmeni, borscht, blini, and more.
        </p>
        <p>
        We are dedicated to providing our customers with the best possible experience. Can't wait to see you!
        </p>
      </div>
      <div className="about-us-image">
        <img src={image} alt="About Us" />
      </div>
    </div>
  );
}

export default AboutUs;
