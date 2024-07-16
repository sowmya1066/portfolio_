import React from "react";
import "../css/project.css";

const Card = ({ projectName, details, bgImage }) => {
  return (
    <div className="card">
      <div className="card-bg">
        <img className="card-img" src={bgImage} alt="Project Background" />
      </div>
      <div className="card-content">
        <h2 className="card-title">{projectName}</h2>
        <p className="card-description">{details}</p>
      </div>
    </div>
  );
};

export default Card;
