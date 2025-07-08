import React from "react";
import RotatingText from "./RotatingText/RotatingText";

const CallToAction = () => {
  return (
    <div className="w-screen py-3 bg-[linear-gradient(to_right,_#AA1DAF,_#B51780,_#BB7411,_#00CC78)] mt-5">
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between section-wrapper w-full">
        <RotatingText
          texts={[
            "Need deployment help?",
            "Cloud confusing you?",
            "Downtime too frequent?",
            "Secure your pipeline?",
            "Ready to scale?",
          ]}
          mainClassName="px-2 sm:px-2 md:px-3 bg-[transparent] text-white font-clash text-2xl sm:text-2xl lg:text-4xl font-medium overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
          staggerFrom={"last"}
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-102%" }}
          staggerDuration={0.010}
          splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
          transition={{ type: "spring", damping: 30, stiffness: 400 }}
          rotationInterval={2000}
        />
        <button className="flex justify-center items-center font-clash text-white font-regular border border-white px-4 py-2 rounded-[20px]">
          Contact me
        </button>
      </div>
    </div>
  );
};

export default CallToAction;
