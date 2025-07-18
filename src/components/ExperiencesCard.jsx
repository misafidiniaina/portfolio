import React from "react";
import PropTypes from "prop-types";
import { Icon } from "@iconify/react";


const ExperiencesCard = ({
  date,
  position,
  company,
  description,
  left = true,
  skills = [],
  customIcons = [],
}) => {
  return (
    <div
      className={`w-full md:w-[45%] font-clash flex flex-col bg-black ${
        left
          ? "items-start text-left mb-20"
          : "items-start sm:item-start md:items-end text-left md:text-right mt-0 md:mt-20"
      } justify-between gap-3`}

    >
      <div className="text-[#ffffffcc] font-light text-[1rem] md:text-[1.3rem]">
        {date}
      </div>
      <div className="text-white flex flex-col">
        <div className="font-regular text-[1.7rem] md:text-[2rem] leading-8">
          {position}
        </div>
        <div className="font-light text-[1.2rem] text-[#ffffff80]">
          {company}
        </div>
      </div>
      <p className="text-[#868686]">{description}</p>

      {/* Skills Icons */}
      <div className="flex items-center gap-4 md:gap-5 flex-wrap mt-2">

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

ExperiencesCard.propTypes = {
  date: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  left: PropTypes.bool,
  skills: PropTypes.arrayOf(PropTypes.string),
  customIcons: PropTypes.arrayOf(PropTypes.node), // New PropType
};

export default ExperiencesCard;
