import React from "react";
import "./Hero.css";
import AnchorLink from "react-anchor-link-smooth-scroll";
import resume from "../../assets/Tarun_Basediya_Job_Resume.pdf";

const Hero = () => {
  return (
    <div className="hero" id="home">
      <div className="hero-title">
        <h1>I'M Tarun Basediya</h1>
        <span>Full Stack Developer</span>
        <p>
          Welcome to my portfolio! I'm Tarun Basediya, a Full Stack Developer
          turning ideas into reality through innovative web and mobile
          solutions.
        </p>
      </div>
      <div className="hero-action">
        <div className="hero-connect">
          {" "}
          <AnchorLink className="anchor-link" href="#contact">
            Contact with me
          </AnchorLink>
        </div>
        <div className="hero-resume">
          <a href={resume} download="resume.pdf">
            My resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
