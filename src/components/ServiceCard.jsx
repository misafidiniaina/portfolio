import React from "react";
import { Icon } from "@iconify/react";
import Noise from "./Noise/Noise";

const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="relative flex justify-start w-full items-baseline flex-col font-clash p-5 bg-black border border-[#ffffff33]  mb-[0.3rem]">
      <Icon
        icon={icon}
        width="2rem"
        height="2rem"
        color="#8bff5d"
        className="bg-black mb-4"
      />
      <h3 className="text-[1.5rem] text-[#c2c2c2] font-semibold mb-4 leading-8">
        {title}
      </h3>
      <div className="flex flex-col flex-wrap items-center">
        {description.map((desc, index) => (
          <p
            key={index}
            className="text-[#868686] font-regular text-left w-full text-[1rem]"
          >
            {desc}
          </p>
        ))}
      </div>
    </div>
  );
};

export default ServiceCard;
