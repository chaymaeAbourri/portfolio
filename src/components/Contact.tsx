import React from "react";
import { ContactProps } from "../types/types";

const ContactCard: React.FC<ContactProps> = ({
  fullName,
  email,
  tel,
  address,
  img,
}) => {
  return (
    <div className="card-body">

      <img className="h-10 w-10 rounded-full" src={img} alt="" />
          
      <p className="text-sm font-medium text-gray-900">{fullName}</p>
      <p className="text-sm text-gray-500">{email}</p>
      <p className="text-sm text-gray-500">{tel}</p>
      <p className="text-sm text-gray-500">{address}</p>
          
    </div>
  );
};

export default ContactCard;
