import React from "react";
import Noise from "./Noise/Noise";

const SkillCard = ({ image, name, category }) => {
  return (
    <div className="flex flex-col gap-3 font-clash text-[#8bff5d] justify-center w-[130px] h-full filter grayscale hover:grayscale-0 transition-all duration-10">
      <div className="bg-[#020202] flex justify-center items-center relative overflow-hidden w-[75px] aspect-square">
        <img
          src={image}
          alt={name}
          className="w-[40px] h-[40px] object-contain"
        />
        <Noise
          patternSize={250}
          patternScaleX={1}
          patternScaleY={1}
          patternRefreshInterval={2}
          patternAlpha={25}
        />
      </div>
      <div className="flex flex-col gap-[0px]">
        <p className="font-medium text-[1.2rem]">{name}</p>
        <p className="font-light text-[#7e7e7e]">{category}</p>
      </div>
    </div>
  );
};

export default SkillCard;
