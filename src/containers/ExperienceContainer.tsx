import React from "react";
import { ReactComponent as Illustration } from "../assets/experience.svg";
import Heading from "../components/Heading";
import TimelineCard from "../components/TimelineCard";
import { EXPERIENCE, SECTIONS } from "../data/data";
import AnimateVisible from "../utils/AnimateVisible";

const ExperienceContainer: React.FC = () => {
  return (
    <div className="mx-3 lg:mx-12">
      <Heading
        heading={SECTIONS[1]}
        id="Expériences"
        illustration={<Illustration className=" max-h-48" />}
      />
      <div className="relative h-full p-10 overflow-hidden wrap">
        <div className="absolute h-full border border-accent border-2-2 border-opacity-20 left-1/2 "></div>

        {EXPERIENCE.map(
          ({ key, company, position, description, end, start, logo }) => (
            <AnimateVisible key={key}>
              {key % 2 === 0 ? (
                <>
                  <TimelineCard
                    styling="right-timeline"
                    key={key}
                    num={key}
                    logo={logo}
                    start={start}
                    end={end}
                    position={position}
                    description={description}
                    company={company}
                  />
                </>
              ) : (
                <TimelineCard
                  styling="flex-row-reverse  left-timeline"
                  key={key}
                  logo={logo}
                  num={key}
                  start={start}
                  end={end}
                  position={position}
                  description={description}
                  company={company}
                />
              )}
            </AnimateVisible>
          )
        )}
      </div>
    </div>
  );
};

export default ExperienceContainer;
