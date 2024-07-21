import React, { useEffect, useRef } from "react";
import indegeneLogo from "../assets/indegene.jpeg";
import cognizantLogo from "../assets/cognizant.jpeg";
import "../css/experience.css";

const Experience = () => {
  const companyRefs = useRef([]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      threshold: 0.5, // Trigger when 50% of the section is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("company-details-visible");
          entry.target
            .querySelector(".verticle--line")
            .classList.add("verticle--line-visible");
          entry.target
            .querySelector(".company-details")
            .classList.add("company-details-visible");
        } else {
          entry.target.classList.remove("company-details-visible");
          entry.target
            .querySelector(".verticle--line")
            .classList.remove("verticle--line-visible");
          entry.target
            .querySelector(".company-details")
            .classList.remove("company-details-visible");
        }
      });
    }, observerOptions);

    companyRefs.current.forEach((ref) => {
      observer.observe(ref);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="exp--container">
      <div className="company-section">
        <div ref={(el) => companyRefs.current.push(el)} className="company">
          <img src={indegeneLogo} alt="Indegene" />
          <div className="verticle--line"></div>
          <div className="company-details">
            <h3>Indegene</h3>
            <p className="company-details-p">Junior Software Engineer</p>
            <p className="tab-dates">AUG 16, 2022 - JUL 28, 2023</p>
            <p className="tab-paragraph">
              At Winrealty, I was tasked to manage and develop a responsive and
              performant frontend application that reshapes the way countless
              users purchase property in Nigeria. At Winrealty, I was tasked to
              manage and develop a responsive and performant frontend
              application that reshapes the way countless users purchase
              property in Nigeria.
            </p>
          </div>
        </div>
        <div ref={(el) => companyRefs.current.push(el)} className="company">
          <img src={cognizantLogo} alt="Cognizant" />
          <div className="verticle--line"></div>
          <div className="company-details">
            <h3>Cognizant</h3>
            <p className="company-details-p">Program Analyst Trainee</p>
            <p className="tab-dates">OCT 11, 2022 - JAN 16, 2023</p>
            <p className="tab-paragraph">
              At Agpro Inc, I worked closely with a team to rebrand and build
              the frontend infrastructure of Agpro's Angular-based service web
              app that allows thousands of clients across the USA monitor their
              barn activity. At Winrealty, I was tasked to manage and develop a
              responsive and performant frontend application that reshapes the
              way countless users purchase property in Nigeria.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
