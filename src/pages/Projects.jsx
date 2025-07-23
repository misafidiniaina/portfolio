import React from "react";
import ProjectCard from "../components/ProjectCard";
import img_multi_cloud from "../assets/multicloudimage.jpg";
import img_multi_cluster from "../assets/multicluster.jpg";
import img_GCP_infra from "../assets/gcp.jpg";
import img_firewall from "../assets/firewall.jpg";
import google from "../assets/google.png";

const Projects = () => {
  return (
    <section className="flex flex-col w-full section-wrapper" id="projects">
      <p className="font-clash font-black text-4xl md:text-5xl w-full text-end mb-3 text-stroke-2">
        PROJECTS
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full gap-5">
        <ProjectCard
          projectTitle="Kubernetes multi cluster"
          image={
            <img
              src={img_multi_cluster}
              alt="Kubernetes multi cluster"
              className="w-full object-cover"
            />
          }
          skills={["fontisto:aws", "file-icons:kubernetes"]}
          customIcons={[
            <img src={google} alt="gcp icon" className="h-5 md:h-6" />,
          ]}
          url="https://github.com/misafidiniaina/multi-cluster"
        />
        <ProjectCard
          projectTitle="Multi Cloud infrastructure"
          image={
            <img
              src={img_multi_cloud}
              alt="Multi cloud project"
              className="w-full object-cover"
            />
          }
          skills={["file-icons:terraform", "fontisto:aws"]}
          customIcons={[
            <img src={google} alt="gcp icon" className="h-5 md:h-6" />,
          ]}
          url="https://github.com/misafidiniaina/multi-cloud"
        />
        <ProjectCard
          projectTitle="GCP infrastructure with terraform"
          image={
            <img
              src={img_GCP_infra}
              alt="Multi cloud project"
              className="w-full object-cover"
            />
          }
          skills={["file-icons:terraform"]}
          customIcons={[
            <img src={google} alt="gcp icon" className="h-5 md:h-6" />,
          ]}
          url="https://github.com/misafidiniaina/gcp_iac"
        />
        <ProjectCard
          projectTitle="Graphical interface Linux firewall"
          image={
            <img
              src={img_firewall}
              alt="Multi cloud project"
              className="w-full object-cover"
            />
          }
          skills={["akar-icons:python-fill", "uil:linux"]}
          url="https://github.com/misafidiniaina/firewall"
        />
      </div>
    </section>
  );
};

export default Projects;
