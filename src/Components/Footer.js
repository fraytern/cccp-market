import React from "react";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-location">
        <h3>Location</h3>
        <p>2304 Coit Road Suite 660</p>
        <p>Plano, TX 75075</p>
      </div>
      <div className="footer-hours">
        <h3>Hours</h3>
        <p>Everyday</p>
        <p>10am - 8pm</p>
      </div>
      <div className="footer-contact">
        <h3>Contact</h3>
        <p>info@cccpmarket.com</p>
        <p>+1-972-758-1200</p>
      </div>
    </footer>
  );
}

export default Footer;
