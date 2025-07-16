import React from "react";
import { Icon } from "@iconify/react";

const ProjectCard = ({
  projectTitle,
  image,
  skills = [],
  customIcons = [],
}) => {
  return (
    <div className="font-clash flex flex-col gap-3 justify-start items-start w-[20rem] p-5 border border-[#ffffff33] mt-5">
      <h4 className="font-medium text-[1.5rem] text-white leading-8">
        {projectTitle}
      </h4>
      {image}
      {/* Skills Icons */}
      <div className="flex items-center gap-3 flex-wrap mt-2">
        {/* Custom icons (e.g., <img />, <svg />) */}
        {customIcons.map((iconElement, index) => (
          <div
            key={`custom-${index}`}
            className="text-white text-2xl md:text-3xl"
          >
            {iconElement}
          </div>
        ))}

        {/* Iconify icons */}
        {skills.map((iconName, index) => (
          <Icon
            key={`iconify-${index}`}
            icon={iconName}
            color="white"
            className="text-white text-2xl md:text-3xl"
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
