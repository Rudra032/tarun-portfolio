import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about" id="about">
      <div className="about-title">
        <h1>About</h1>
      </div>
      <div className="about-sections">
        {/* <div className="about-left">
          <h2>Education</h2>
        </div> */}
        <div className="about-right">
          <div className="about-para">
            <p>
              Hello! I'm Tarun Basediya, a skilled web developer with a master's
              degree in computer science. I'm passionate about creating engaging
              web experiences and leveraging technology to solve real-world
              problems.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>

              <hr style={{ width: "75%" }} />
            </div>
            <div className="about-skill">
              <p>Bootstrap</p>
              <hr style={{ width: "65%" }} />
            </div>
            <div className="about-skill">
              <p>JavaScript</p>
              <hr style={{ width: "65%" }} />
            </div>
            <div className="about-skill">
              <p>React JS</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>React Native</p>
              <hr style={{ width: "55%" }} />
            </div>

            <div className="about-skill">
              <p>Node Js</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>Express Js</p>
              <hr style={{ width: "65%" }} />
            </div>
            <div className="about-skill">
              <p>MongoDB</p>
              <hr style={{ width: "70%" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
