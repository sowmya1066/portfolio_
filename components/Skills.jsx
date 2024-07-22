import React, { useRef, useEffect } from "react";
import "../css/technicalskills.css";

export default function Skills(props) {
  const skillsRef = useRef(null);

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

    observer.observe(skillsRef.current);

    return () => {
      observer.unobserve(skillsRef.current);
    };
  }, []);

  return (
    <li className="skills" ref={skillsRef}>
      <div className="skills-content">
        <div className="skills-image">
          <img src={props.img} alt="Skill" />
        </div>
        <p className="skills-title">{props.title}</p>
      </div>
    </li>
  );
}
