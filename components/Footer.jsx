import "../css/footer.css";
import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__links">
        <a href="#about">About</a>
        <a href="#education">Experience</a>
        <a href="#resume">Resume</a>
        <a href="#skills">Skills</a>
        <a href="#projects" className="footer--p">
          Projects
        </a>
      </div>
      <p className="footer__text">© {new Date().getFullYear()} Sowmya G S</p>
    </footer>
  );
};

export default Footer;
