import React from "react";
import { Icon } from "@iconify/react";

const Hero = () => {
  return (
    <section
      className="w-screen h-screen flex section-wrapper flex-col justify-center items-start mt-[30px]"
      role="banner"
    >
      <div className=" w-full flex justify-between align-baseline">
        <div>
          <p className="text-base font-clash text-white/70 mb-4">Hello Guys</p>
          <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-[4rem] font-clash text-white max-w-5xl font-light lg:leading-tight ">
            I’m <span className="font-clash">Liantsoa Tsiory</span>,
            <span className="font-clash"> Devops & Cloud engineer</span>, I
            specialize in scalable infrastructure and automation.
          </h1>
        </div>
        <div className="right-50 flex flex-col items-center justify-end gap-1">
          <svg
            width="3"
            height="153"
            viewBox="0 0 2 153"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.00001 153L1 0"
              stroke="url(#paint0_linear_609_120)"
              stroke-width="1"
            />
            <defs>
              <linearGradient
                id="paint0_linear_609_120"
                x1="0.500007"
                y1="153"
                x2="0.5"
                y2="2.18557e-08"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="gray" />
                <stop offset="1" stop-color="white" stop-opacity="0" />
              </linearGradient>
            </defs>
          </svg>

          <Icon icon="uil:github" width="32" height="32" color="#ffffff80" />
          <Icon
            icon="material-symbols:mail-outline-rounded"
            width="32"
            height="32"
            color="#ffffff80"
          />
          <Icon
            icon="ri:whatsapp-line"
            width="32"
            height="32"
            color="#ffffff80"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
