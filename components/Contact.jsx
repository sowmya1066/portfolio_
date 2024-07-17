import React from "react";
import "../css/contact.css";
import GitIcon from "../assets/github.png";
import EMailIcon from "../assets/email.png";
import LinkedIcon from "../assets/linkedin.png";
import LocateIcon from "../assets/location.png";

const Contact = () => {
  return (
    <div className="contact--me">
      <h1 className="contact--me--head">Let's connect</h1>
      <ul>
        <li>
          <a href="#">
            <img src={EMailIcon} alt="GitHub Icon" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={LinkedIcon} alt="GitHub Icon" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={GitIcon} alt="GitHub Icon" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={LocateIcon} alt="GitHub Icon" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Contact;
