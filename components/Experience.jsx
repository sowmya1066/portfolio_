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
    <div className="exp--container" id="exp">
      <div className="company-section">
        <div ref={(el) => companyRefs.current.push(el)} className="company">
          <img src={indegeneLogo} alt="Indegene" />
          <div className="verticle--line"></div>
          <div className="company-details">
            <h3>Indegene</h3>
            <p className="company-details-p">Junior Software Engineer</p>
            <p className="tab-dates">July 2022 - Present</p>
            <p className="tab-paragraph">
              Developed dynamic web pages for BI.com, ensuring a optimal user
              experience. Contributed to the Career Website Development project,
              collaborating on the Page-As-A-Service (PaaS) feature for
              efficient page creation. Enhanced functionality by integrating
              Taleo API with SuccessFactors and supporting job posting and
              candidate synchronization.
            </p>
          </div>
        </div>
        <div ref={(el) => companyRefs.current.push(el)} className="company">
          <img src={cognizantLogo} alt="Cognizant" />
          <div className="verticle--line"></div>
          <div className="company-details">
            <h3>Cognizant</h3>
            <p className="company-details-p">Program Analyst Trainee</p>
            <p className="tab-dates">January 2022 - June 2022</p>
            <p className="tab-paragraph">
              Utilized advanced state management techniques to efficiently
              manage and update application state, enhancing overall
              performance. Streamlined data handling within React components to
              ensure smoother interactions and responsiveness. Applied best
              practices for managing complex application states, ensuring
              scalability and maintainability in React applications.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
