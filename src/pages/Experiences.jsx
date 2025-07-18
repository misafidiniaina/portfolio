import React from "react";
import ExperiencesCard from "../components/ExperiencesCard";
import google from "../assets/google.png";

const Experiences = () => {
  return (
    <section
      className="section-wrapper my-28 flex flex-col gap-2"
      id="experience"
    >
      <p className="font-clash font-black text-4xl md:text-5xl w-full mb-3 text-stroke-2">
        EXPERIENCES
      </p>
      <div className="flex flex-col md:flex-row justify-between">
        <ExperiencesCard
          date="Octobre 2024 - Now"
          position="DevOps Engineer"
          company="Hoag Target"
          description="Leading infrastructure automation and CI/CD implementation. Managed Kubernetes clusters and implemented monitoring solutions."
          customIcons={[
            <img src={google} alt="gcp icon" className="h-6 md:h-7" />,
          ]}
          skills={[
            "file-icons:terraform",
            "file-icons:ansible",
            "fluent-mdl2:jenkins-logo",
            "file-icons:kubernetes",
            "cib:grafana",
            "simple-icons:prometheus",
          ]}
        />
        <ExperiencesCard
          date="September 2023 - January 2024"
          position="System Administrator Intern"
          company="Hoag Target"
          description="Maintained Linux servers and implemented new server solution for the internal network usage"
          left={false}
          skills={[
            "cbi:pfsense-logo",
            "ant-design:docker-outlined",
            "qlementine-icons:file-script-16",
            "uil:linux",
            "lineicons:python",
          ]}
        />
      </div>
    </section>
  );
};

export default Experiences;
