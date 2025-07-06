import React from "react";

const Hero = () => {
  return (
    <section
      className="w-screen flex section-wrapper flex-col justify-center items-start"
      role="banner"
    >
      <div className="w-full flex justify-between align-baseline">
        <div>
          <p className="text-base font-clash text-white/70 mb-4">Hello Guys</p>
          <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-clash text-white max-w-4xl font-light leading-tight">
            I’m <span className="font-clash">Liantsoa Tsiory</span>,
            <span className="font-clash">DevOps & Cloud Engineer</span>, I
            specialize in scalable infrastructure and automation.
          </h1>
        </div>
        <div className="bg-red-600 right-50">hello</div>
      </div>
    </section>
  );
};

export default Hero;
