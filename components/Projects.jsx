import React, { useEffect, useRef, useState } from "react";
import "../css/project.css";

const Card = ({ projectName, details, bgImage, link }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target); // Stop observing once visible
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <a
      href={link}
      className="card-link"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className={`card ${isVisible ? "visible" : ""}`} ref={cardRef}>
        <div className="card-bg">
          <img className="card-img" src={bgImage} alt="Project Background" />
        </div>
        <div className="card-content">
          <h2 className="card-title">{projectName}</h2>
          <p className="card-description">{details}</p>
        </div>
      </div>
    </a>
  );
};

export default Card;
