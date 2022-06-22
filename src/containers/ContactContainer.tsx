import React from "react";
import ContactCard from "../components/Contact";
import Heading from "../components/Heading";
import { contactInfo, SECTIONS } from "../data/data";

const ContactContainer: React.FC = () => {
  return (
    <div className="flex flex-col w-full my-6">
      <Heading
        heading={SECTIONS[4]}
        id="Contact"
      />
      <div className="grid gap-6 mt-5 lg:grid-cols-3 justify-items-center md:grid-cols-1 auto-rows-fr">
       
          <ContactCard fullName={contactInfo[0].fullName}
                       email={contactInfo[0].email}
                       tel={contactInfo[0].tel}
                       address={contactInfo[0].address}
                       img={contactInfo[0].img} >

          </ContactCard>
      </div>
    </div>
  );
};

export default ContactContainer;
