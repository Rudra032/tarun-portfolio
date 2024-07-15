import React from "react";
import "./Footer.css";
import footer_logo from "../../assets/tarun_logo.PNG";
import user_icon from "../../assets/user_icon.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <AnchorLink className="anchor-link" href="#home">
            <img src={footer_logo} alt="" />
          </AnchorLink>

          <p>I am fullstack developer from India.</p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={user_icon} alt="" />
            <input type="email" placeholder="Enter your email" />
          </div>
          <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">
          &copy; 2024 Tarun Basediya. All rights reserved.
        </p>

        <div className="footer-bottom-right">
          <p>Term of Services</p>
          <p>Privacy Policy</p>

          <AnchorLink href="#contact" className="anchor-link">
            <p>Connect with me</p>
          </AnchorLink>
        </div>
      </div>
    </div>
  );
};

export default Footer;
