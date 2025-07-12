import React from "react";
import { Icon } from "@iconify/react";

const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="relative flex justify-end w-full items-baseline flex-col font-clash p-[24px] border border-[#ffffff1a] mb-[2rem]">
      <Icon
        icon={icon}
        width="4rem"
        height="5rem"
        color="#ffffff80"
        className="bg-black mb-4"
      />
      <h3 className="text-[1.5rem] text-white font-regular mb-4 leading-tight">
        {title}
      </h3>
      <div className="flex flex-col flex-wrap items-center">
        {description.map((desc, index) => (
          <p
            key={index}
            className="text-[#ffffffb3] font-light text-left w-full text-[1rem]"
          >
            {desc}
          </p>
        ))}
      </div>
    </div>
  );
};

export default ServiceCard;
