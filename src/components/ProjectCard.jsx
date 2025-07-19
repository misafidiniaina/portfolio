import React from "react";
import { Icon } from "@iconify/react";

const ProjectCard = ({
  projectTitle,
  image,
  skills = [],
  customIcons = [],
  url,
}) => {
  const handleClick = () => {
    if (url) {
      window.open(url, "_blank");
    }
  };

  return (
    <div
      className="bg-black font-clash flex flex-col gap-5 justify-start items-start w-full cursor-pointer hover:border-[#8bff5d] transition-colors p-5 border border-[rgba(255,255,255,0.1)]"
      onClick={handleClick}
    >
      {image}
      <h4 className="font-medium text-[1.3rem] text-[#c2c2c2] leading-6">
        {projectTitle}
      </h4>

      <div className="flex relative items-center gap-3 w-full mt-2">
        {customIcons.map((iconElement, index) => (
          <div
            key={`custom-${index}`}
            className="text-white text-2xl md:text-3xl"
          >
            {iconElement}
          </div>
        ))}
        {skills.map((iconName, index) => (
          <Icon
            key={`iconify-${index}`}
            icon={iconName}
            color="#A1A1A1"
            className="text-white text-2xl md:text-2xl"
          />
        ))}
        <div className="flex absolute text-[#e7e7e7] bottom-0 right-0">
          <Icon
            icon="icon-park-outline:arrow-up"
            width="20"
            height="20"
            color="#B0FF92"
            className="rotate-45"
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
