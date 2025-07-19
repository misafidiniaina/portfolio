import React from "react";
import SkillCard from "../components/SkillCard";

const Skills = () => {
  return (
    <section className="section-wrapper" id="stack">
      <p className="font-clash font-black mt-20 text-4xl md:text-5xl w-full mb-3 text-stroke-2">
        STACK
      </p>
      <SkillCard />
    </section>
  );
};

export default Skills;
