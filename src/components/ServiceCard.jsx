import React from "react";
import GradientText from "./GradientText/GradientText";

const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="relative flex justify-start w-full items-baseline flex-col font-clash p-5 bg-black border border-[rgba(255,255,255,0.1)]  mb-[0.3rem]">
      {/* <div className="flex justify-start items-center w-full">
        <Icon
          icon={icon}
          width="2rem"
          height="2rem"
          color="#B0FF92"
          className="bg-black mb-4"
        />
      </div> */}
      
        <h3 className="text-[1.6rem] font-medium text-[#b9b9b9] mb-4 leading-8">{title}</h3>
      

      <div className="flex flex-col flex-wrap items-center">
        {description.map((desc, index) => (
          <GradientText
            colors={["#616161", "#ffffff", "#ffffff", "#ffffff", "#ffffff"]}
            animationSpeed={3}
            showBorder={false}
          >
            <p
              key={index}
              className=" font-light text-left w-full text-base"
            >
              {desc}
            </p>
          </GradientText>
        ))}
      </div>
      <div className="absolute w-4 h-1 bg-[#B0FF92] bottom-5 right-5"></div>
    </div>
  );
};

export default ServiceCard;
