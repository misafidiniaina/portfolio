import React from "react";
import { Icon } from "@iconify/react";
import Noise from "./Noise/Noise";

const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="relative flex justify-start w-full items-baseline flex-col font-clash p-5 bg-black border border-[#ffffff33]  mb-[0.3rem]">
      {/* <div className="w-10 h-20">
        <Noise
          patternSize={250}
          patternScaleX={1}
          patternScaleY={1}
          patternRefreshInterval={2}
          patternAlpha={25}
        />
      </div> */}
      <div className="flex justify-start items-center w-full">
        <Icon
          icon={icon}
          width="2rem"
          height="2rem"
          color="#B0FF92"
          className="bg-black mb-4"
        />
      </div>
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
