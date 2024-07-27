import "../css/Navigation.css";
import React, { useState } from "react";
import Logo from "../assets/logo.jpg";
import LogSowmya from "../assets/sowmya.png";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <div className="container">
          {/* Logo */}
          <h1 id="logo">
            <a href="">
              <img src={Logo} alt="Your Logo" />
            </a>
          </h1>
          {/* Hamburger */}
          <div className="hamburger" onClick={toggleMenu}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
          {/* Navbar links */}
          <ul className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
            <li>
              <a className="nav-link" href="#aboutId" onClick={closeMenu}>
                About
              </a>
            </li>
            <li>
              <a className="nav-link" href="#cardId" onClick={closeMenu}>
                Projects
              </a>
            </li>
            <li>
              <a className="nav-link" href="#contactId" onClick={closeMenu}>
                Contact
              </a>
            </li>
            <li>
              <a
                className="nav-link btn btn-primary"
                href="https://github.com/sowmya1066/portfoliov2/blob/master/Sowmya_resume.pdf"
                onClick={closeMenu}
                rel="noopener noreferrer"
                target="_blank"
              >
                RESUME <i className="fas fa-arrow-right"></i>
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Header Section */}
      <header id="hero">
        <section className="header-container">
          <img className="profile-image" src={LogSowmya} alt="" />

          <div className="content-text">
            <h1>Hey, I'm Sowmya</h1>

            <h2>A passionate Frontend Developer</h2>
            <p>
              A strong background in web design, visual identity, and product
              design. Passionate about creating engaging user experiences and
              innovative digital solutions.
            </p>
          </div>
          <a
            href="https://www.linkedin.com/in/sowmya-g-s-060b95210"
            className="btn btn-secondary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Let's Connect
          </a>
        </section>
      </header>
    </div>
  );
};

export default Navigation;
