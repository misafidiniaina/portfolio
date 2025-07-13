import React from "react";
import PropTypes from "prop-types";

const ExperiencesCard = ({
  date,
  position,
  company,
  description,
  left = true,
}) => {
  return (
    <div
      className={`w-full md:w-[45%] font-clash flex flex-col ${
        left ? "items-start text-left mb-20" : "items-start sm:item-start md:items-end text-left md:text-right mt-20"
      } justify-between gap-4`}
    >
      <div className="text-[#ffffffcc] font-light text-[1.3rem]">{date}</div>
      <div className="text-white flex flex-col">
        <div className="font-regular text-[2rem] md:text-[2.2rem] leading-8">
          {position}
        </div>
        <div className="font-light text-[1.2rem] text-[#ffffff80]">
          {company}
        </div>
      </div>
      <p className="text-[#ffffffcc]">{description}</p>
    </div>
  );
};

ExperiencesCard.propTypes = {
  date: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  left: PropTypes.bool,
};

export default ExperiencesCard;
