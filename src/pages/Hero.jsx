import React from "react";
import { Icon } from "@iconify/react";

const Hero = () => {
  return (
    <section
      className="w-screen h-screen flex section-wrapper flex-col justify-center items-start mt-[30px]"
      role="banner"
      id="home"
    >
      <div className="w-full flex justify-between align-baseline">
        <div className="relative">
          <p className="text-base font-clash text-white/70 mb-4">Hello Guys</p>
          <h1 className="text-4xl sm:text-4xl md:text-6xl lg:text-[4rem] font-clash text-[#a1a1a1] max-w-5xl font-medium lg:leading-tight">
            I’m{" "}
            <span className="font-clash text-[white] font-medium">
              Liantsoa Tsiory
            </span>
            ,<span className="font-clash"> Devops & Cloud engineer</span>, I
            specialize in scalable infrastructure and automation
            <span
              className="inline-block w-5 aspect-square rounded-md bg-[#8bff5d] ml-2 align-baseline"
              aria-hidden="true"
            ></span>
          </h1>
        </div>
        <div className="flex flex-col items-center justify-end gap-1 ml-[2rem]">
          <Icon icon="uil:github" width="32" height="32" color="#ffffffa0" />
          <Icon
            icon="material-symbols:mail-outline-rounded"
            width="32"
            height="32"
            color="#ffffffa0"
          />
          <Icon
            icon="ri:whatsapp-line"
            width="32"
            height="32"
            color="#ffffffa0"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
