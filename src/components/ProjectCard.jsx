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
      className="font-clash flex flex-col gap-5 justify-start items-start w-full  mt-7 cursor-pointer hover:border-white transition-colors"
      onClick={handleClick}
    >
      {image}
      <h4 className="font-regular text-[1.3rem] text-[gray] leading-6">
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
            color="white"
            className="text-white text-2xl md:text-2xl"
          />
        ))}
        <div className="flex absolute -z-40 text-white bottom-0 right-0">
          <Icon
            icon="icon-park-outline:arrow-up"
            width="20"
            height="20"
            color="gray"
            className="rotate-45"
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
