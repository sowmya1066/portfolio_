import React, { useEffect, useRef } from "react";
import "../css/about.css";

export default function About() {
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("about-section-visible");
          } else {
            entry.target.classList.remove("about-section-visible");
          }
        });
      },
      {
        threshold: 0.5, // Trigger when 50% of the section is visible
      }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("about-head-visible");
          } else {
            entry.target.classList.remove("about-head-visible");
          }
        });
      },
      {
        threshold: 0.5, // Trigger when 50% of the section is visible
      }
    );

    const aboutHeadRef = document.querySelector(".about_head");
    if (aboutHeadRef) {
      observer.observe(aboutHeadRef);
    }

    return () => {
      if (aboutHeadRef) {
        observer.unobserve(aboutHeadRef);
      }
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("portfolio-content-visible");
          } else {
            entry.target.classList.remove("portfolio-content-visible");
          }
        });
      },
      {
        threshold: 0.5, // Trigger when 50% of the section is visible
      }
    );

    const portfolioContentRef = document.querySelector(".portfolio-content");
    if (portfolioContentRef) {
      observer.observe(portfolioContentRef);
    }

    return () => {
      if (portfolioContentRef) {
        observer.unobserve(portfolioContentRef);
      }
    };
  }, []);

  return (
    <section id="aboutId">
      <div className="about-section" ref={aboutRef}>
        <h2 className="about_head">Who am I?</h2>
        <div className="portfolio-section">
          <div className="container1">
            <div className="portfolio-content">
              <p>
                I am an experienced Web Developer with 2.6 years of dedicated
                practice in the IT sector, specializing in front-end web
                development. My journey includes designing, developing, testing,
                and maintaining responsive web applications. Proficient in
                technologies such as React for dynamic interfaces and Tailwind
                CSS for streamlined styling, I also bring expertise in backend
                systems with PostgreSQL and Docker for efficient data management
                and deployment.
              </p>
              <p className="about-p">
                Passionate about leveraging technology to solve challenges, I am
                committed to continuous learning and staying abreast of industry
                trends. My goal is to create impactful digital solutions that
                not only meet but exceed user expectations, delivering
                excellence in every project. Passionate about leveraging
                technology to solve challenges, I am committed to continuous
                learning and staying abreast of industry trends. My goal is to
                create impactful digital solutions that not only meet but exceed
                user expectations, delivering excellence in every project.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
