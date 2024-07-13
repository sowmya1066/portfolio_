import React from "react";
import "../css/technicalskills.css";

export default function Skills(props) {
  return (
    <li className="skills">
      <img src={props.img} alt="..." />
      <p>{props.title}</p>
    </li>
  );
}
