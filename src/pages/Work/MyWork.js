import React from "react";
import "./MyWork.css";
import mywork_Data from "../../assets/mywork_data";
// import arrow_icon from "../../assets/arrow_icon.svg";
const MyWork = () => {
  return (
    <div className="mywork" id="work">
      <div className="mywork-title">
        <h1>My latest work</h1>
      </div>
      <div className="mywork-container">
        {mywork_Data.map((work, index) => {
          return (
            <div key={index} className="work-project">
              <h2>{work.w_name}</h2>
              <a target="_blank" rel="noopener noreferrer" href={work.w_link}>
                <img src={work.w_img} alt="" className="work-img" />
              </a>
            </div>
          );
        })}
      </div>
      {/* <div className="mywork-showmore">
        <p>Show More</p>
        <img src={arrow_icon} alt="" />
      </div> */}
    </div>
  );
};

export default MyWork;
