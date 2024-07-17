import React from "react";
import Navigation from "../components/Navigation";
import About from "../components/About.jsx";
import Skills from "../components/Skills.jsx";
import { SKILLS_CORE } from "./data.js";
import Headline from "../components/Headline.jsx";
import TabsExample from "../components/Experience.jsx";
import Card from "../components/Projects.jsx";
import projects from "../src/Card.jsx";
import Contact from "../components/Contact.jsx";
import Footer from "../components/Footer.jsx";
import "../css/index.css";

function App() {
  return (
    <>
      <Navigation />
      <About />
      <div>
        <Headline title="My Skills" />
        <div className="skills-container" id="d--none">
          <Skills img={SKILLS_CORE[0].image} title={SKILLS_CORE[0].title} />
          <Skills img={SKILLS_CORE[1].image} title={SKILLS_CORE[1].title} />
          <Skills img={SKILLS_CORE[2].image} title={SKILLS_CORE[2].title} />
          <Skills img={SKILLS_CORE[3].image} title={SKILLS_CORE[3].title} />
          <Skills img={SKILLS_CORE[4].image} title={SKILLS_CORE[4].title} />
        </div>
        <div className="skills-container" id="di-none">
          <Skills img={SKILLS_CORE[0].image} title={SKILLS_CORE[0].title} />
          <Skills img={SKILLS_CORE[1].image} title={SKILLS_CORE[1].title} />
          <Skills img={SKILLS_CORE[2].image} title={SKILLS_CORE[2].title} />
        </div>
        <div className="skills-container" id="di-none">
          <Skills img={SKILLS_CORE[3].image} title={SKILLS_CORE[3].title} />
          <Skills img={SKILLS_CORE[4].image} title={SKILLS_CORE[4].title} />
          <Skills img={SKILLS_CORE[5].image} title={SKILLS_CORE[5].title} />
        </div>
        <div className="skills-container" id="di-none">
          <Skills img={SKILLS_CORE[6].image} title={SKILLS_CORE[6].title} />
          <Skills img={SKILLS_CORE[7].image} title={SKILLS_CORE[7].title} />
          <Skills img={SKILLS_CORE[8].image} title={SKILLS_CORE[8].title} />
        </div>
        <div className="skills-container" id="d--none">
          <Skills img={SKILLS_CORE[5].image} title={SKILLS_CORE[5].title} />
          <Skills img={SKILLS_CORE[6].image} title={SKILLS_CORE[6].title} />
          <Skills img={SKILLS_CORE[7].image} title={SKILLS_CORE[7].title} />
          <Skills img={SKILLS_CORE[8].image} title={SKILLS_CORE[8].title} />
        </div>
        <div className="skills-container">
          <Skills img={SKILLS_CORE[9].image} title={SKILLS_CORE[9].title} />
          <Skills img={SKILLS_CORE[10].image} title={SKILLS_CORE[10].title} />
          <Skills img={SKILLS_CORE[11].image} title={SKILLS_CORE[11].title} />
        </div>
      </div>
      <Headline title="Experience" />
      <TabsExample />

      <h2 className="card--head">I've built..</h2>
      <div className="card-container">
        {projects.map((project, index) => (
          <Card
            key={index} // Use a unique key for each card
            projectName={project.projectName}
            details={project.details}
            bgImage={project.bgImage}
          />
        ))}
      </div>
      <Contact />
      <Footer />
    </>
  );
}

export default App;
