import React from "react";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import {
  CTA_TEXT,
  GREETING_DESCRIPTION,
  GREETING_TEXT,
  HERO_IMAGE,
} from "../data/data";
import ContactContainer from "./ContactContainer";
import ExperienceContainer from "./ExperienceContainer";
import ProjectsContainer from "./ProjectsContainer";
import SkillsContainer from "./SkillsContainer";

const HomeContainer: React.FC = () => {
  return (
    <div className="antialiased bg-primary-content text-primary">
      <Hero
        image={HERO_IMAGE}
        greetingText={GREETING_TEXT}
        greetingDescription={GREETING_DESCRIPTION}
        buttonText={CTA_TEXT}
      />
      <ExperienceContainer />
      <div className="px-12 divider" />
      <ProjectsContainer />
      <div className="px-12 divider" />
      <SkillsContainer />
      <div className="px-12 divider" />
      <ContactContainer/>
      <Footer />
    </div>
  );
};

export default HomeContainer;
