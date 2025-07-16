import React from "react";
import ProjectCard from "../components/ProjectCard";
import img_multi_cloud from "../assets/multicloudimage.jpg";
import google from "../assets/google.png";

const Projects = () => {
  return (
    <section className="flex flex-col md:flex-row justify-between section-wrapper" id="projects">
      <ProjectCard
        projectTitle="Multi Cloud infrastructure"
        image={
          <img
            src={img_multi_cloud}
            alt="Multi cloud project"
            className="rounded-lg w-[22rem]"
          />
        }
        skills={["file-icons:terraform", "fontisto:aws"]}
        customIcons={[
          <img src={google} alt="gcp icon" className="h-6 md:h-7" />,
        ]}
      />
      <ProjectCard
        projectTitle="Multi Cloud infrastructure"
        image={
          <img
            src={img_multi_cloud}
            alt="Multi cloud project"
            className="rounded-lg w-[22rem]"
          />
        }
        skills={["file-icons:terraform", "fontisto:aws"]}
        customIcons={[
          <img src={google} alt="gcp icon" className="h-6 md:h-7" />,
        ]}
      />
      <ProjectCard
        projectTitle="Multi Cloud infrastructure"
        image={
          <img
            src={img_multi_cloud}
            alt="Multi cloud project"
            className="rounded-lg w-[22rem]"
          />
        }
        skills={["file-icons:terraform", "fontisto:aws"]}
        customIcons={[
          <img src={google} alt="gcp icon" className="h-6 md:h-7" />,
        ]}
      />
    </section>
  );
};

export default Projects;
