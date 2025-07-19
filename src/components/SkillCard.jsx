import React from "react";
import Noise from "./Noise/Noise";
import { Icon } from "@iconify/react";

const SkillCard = () => {
  return (
    <div className="flex flex-col gap-3 font-clash text-[#bdbdbd] justify-center  w-[130px] h-full">
      <div className="bg-black flex justify-center items-center relative overflow-hidden w-[90px] aspect-square">
        <Icon
          icon="fluent-mdl2:jenkins-logo"
          width="40"
          height="40"
          color="[#bdbdbd]"
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
        <p className="font-medium text-[1.5rem]">Jenkins</p>
        <p className="font-light text-[#7e7e7e]">ci/cd pipeline</p>
      </div>
    </div>
  );
};

export default SkillCard;
