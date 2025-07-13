import React from "react";
import ExperiencesCard from "../components/ExperiencesCard";

const Experiences = () => {
  return (
    <section
      className="section-wrapper my-28 flex flex-col md:flex-row justify-between"
      id="experience"
    >
      <ExperiencesCard
        date="Octobre 2024 - Now"
        position="DevOps Engineer"
        company="Hoag Target"
        description="Leading infrastructure automation and CI/CD implementation. Managed Kubernetes clusters and implemented monitoring solutions."
      />
      <ExperiencesCard
        date="September 2023 - January 2024"
        position="System Administrator Intern"
        company="Hoag Target"
        description="Maintained Linux servers and implemented new server solution for the internal network usage"
        left={false}
      />
    </section>
  );
};

export default Experiences;
