import React from "react";
import FormationCard from "../components/FormationCard";
import Heading from "../components/Heading";
import { FORMATIONS, SECTIONS } from "../data/data";
import AnimateVisible from "../utils/AnimateVisible";

const FormationContainer: React.FC = () => {
  return (
    <div className="mx-3 lg:mx-12">
      <Heading
        heading={SECTIONS[3]}
        id="Formations"
     
      />
      <div className="relative h-full p-10 overflow-hidden wrap">
        <div className="absolute h-full border border-accent border-2-2 border-opacity-20 left-1/2 "></div>

        {FORMATIONS.map(
          ({ key, school, title, address, end, start }) => (
            <AnimateVisible key={key}>
              {key % 2 === 0 ? (
                <>
                  <FormationCard
                    styling="right-timeline"
                    key={key}
                    num= {key}
                    start={start}
                    end={end}
                    title={title}
                    address={address}
                    school={school}
                  />
                </>
              ) : (
                <FormationCard
                  styling="flex-row-reverse  left-timeline"
                  key={key}
                  num= {key}
                  start={start}
                  end={end}
                  title={title}
                  address={address}
                  school={school}
                />
              )}
            </AnimateVisible>
          )
        )}
      </div>
    </div>
  );
};

export default FormationContainer;
