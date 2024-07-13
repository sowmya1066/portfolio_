import React from "react";
import "../css/project.css";
import projects from "../src/Card.jsx";

const Card = ({ projectName, details, bgImage }) => {
  return (
    <div className="card">
      <div className="card-bg" style={{ backgroundImage: `url(${bgImage})` }}>
        <div className="card-content">
          <h2 className="card-title">{projectName}</h2>
          <p className="card-description">{details}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
