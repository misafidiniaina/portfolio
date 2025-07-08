import React from "react";
import { Icon } from "@iconify/react";

const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="relative flex justify-end w-full items-baseline flex-col font-clash p-[24px] border border-[#ffffff1a] mb-[2rem]">
      <Icon
        icon={icon}
        width="6rem"
        height="6rem"
        color="#ffffff80"
        className="bg-black p-2 absolute left-[50%] translate-x-[-50%] top-[0%] translate-y-[-50%]"
      />
      <div className="h-[3rem]"></div>
      <h3 className="text-[1.7rem] md:text-[1.8rem] lg:text-[1.8rem] text-white font-regular mb-4 leading-tight">
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
