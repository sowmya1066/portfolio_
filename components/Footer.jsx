import "../css/footer.css";
import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__links">
        <a href="#aboutId">About</a>
        <a href="#exp">Experience</a>
        <a
          href="https://github.com/sowmya1066/portfoliov2/blob/master/Sowmya_resume.pdf"
          rel="noopener noreferrer"
          target="_blank"
        >
          Resume
        </a>
        <a href="#skillsId">Skills</a>
        <a href="#cardId" className="footer--p">
          Projects
        </a>
      </div>
      <p className="footer__text">© {new Date().getFullYear()} Sowmya G S</p>
    </footer>
  );
};

export default Footer;
