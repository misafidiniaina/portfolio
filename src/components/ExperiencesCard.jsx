import React from "react";

const ExperiencesCard = ({ date, position, company, description }) => {
  return (
    <div className="w-full md:w-[45%]  font-clash flex flex-col items-start justify-between gap-4">
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
      <div></div>
    </div>
  );
};

export default ExperiencesCard;
