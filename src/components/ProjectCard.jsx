import React from "react";
import { Icon } from "@iconify/react";

const ProjectCard = ({
  projectTitle,
  image,
  skills = [],
  customIcons = [],
  url, // 👈 Add url as a prop
}) => {
  const handleClick = () => {
    if (url) {
      window.open(url, "_blank"); // open in new tab
    }
  };

  return (
    <div
      className="font-clash relative flex flex-col gap-3 justify-start items-start w-[20rem] p-5 border border-[#ffffff33] mt-7 cursor-pointer hover:border-white transition-colors"
      onClick={handleClick} // 👈 Attach the handler
    >
      {image}
      <h4 className="font-medium text-[1.5rem] text-white leading-6">
        {projectTitle}
      </h4>

      <div className="flex items-center gap-3 flex-wrap mt-2">
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
            className="text-white text-2xl md:text-3xl"
          />
        ))}
      </div>

      <div className="flex absolute text-white bottom-5 right-5">
        <Icon
          icon="icon-park-outline:arrow-up"
          width="20"
          height="20"
          color="gray"
          className="rotate-45"
        />
      </div>
    </div>
  );
};

export default ProjectCard;
