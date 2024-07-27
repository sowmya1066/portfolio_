import React, { useRef, useEffect } from "react";
import "../css/contact.css";
import GitIcon from "../assets/github.png";
import EMailIcon from "../assets/email.png";
import LinkedIcon from "../assets/linkedin.png";
import LeetIcon from "../assets/leetCode.png";

const Contact = () => {
  const contactRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
        } else {
          entry.target.classList.remove("animate");
        }
      });
    });

    observer.observe(contactRef.current);

    return () => {
      observer.unobserve(contactRef.current);
    };
  }, []);

  return (
    <div className="contact--me" ref={contactRef} id="contactId">
      <h1 className="contact--me--head">Let's connect</h1>
      <ul className="contact-icons">
        <li>
          <a href="mailto:sowmyaa2406@gmail.com">
            <img src={EMailIcon} alt="Email Icon" />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/sowmya-g-s-060b95210"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img src={LinkedIcon} alt="LinkedIn Icon" />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/sowmya1066"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img src={GitIcon} alt="GitHub Icon" />
          </a>
        </li>
        <li>
          <a
            href="https://leetcode.com/u/sowmyags/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img src={LeetIcon} alt="LeetcodeIcon" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Contact;
