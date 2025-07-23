import React from "react";
import { Icon } from "@iconify/react";

const Hero = () => {
  return (
    <section
      className="w-full h-screen flex section-wrapper flex-col justify-center items-start mt-[30px]"
      role="banner"
      id="home"
    >
      <div className="w-full flex justify-between align-baseline">
        {/* Intro text */}
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
              className="inline-block w-4 md:w-5 aspect-square rounded-sm bg-[#B0FF92] ml-2 align-baseline"
              aria-hidden="true"
            ></span>
          </h1>
        </div>

        {/* Social Icons */}
        <div className="flex flex-col items-center justify-end gap-2 ml-[2rem]">
          {/* GitHub */}
          <a
            href="https://github.com/misafidiniaina"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/60 transition-all duration-100 ease-in-out transform"
          >
            <Icon icon="uil:github" width="32" height="32" />
          </a>

          {/* Email */}
          <a
            href="mailto:liantsoatsiorinirina@gmail.com"
            className="text-white/60 transition-all duration-300 ease-in-out transform"
          >
            <Icon
              icon="material-symbols:mail-outline-rounded"
              width="32"
              height="32"
            />
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/261343209413" // Replace with your full phone number (with country code)
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/60 transition-all duration-300 ease-in-out transform"
          >
            <Icon icon="ri:whatsapp-line" width="32" height="32" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
