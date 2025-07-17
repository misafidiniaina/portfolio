import React from "react";
import ProjectCard from "../components/ProjectCard";
import img_multi_cloud from "../assets/multicloudimage.jpg";
import img_multi_cluster from "../assets/multicluster.jpg";
import img_GCP_infra from "../assets/gcp.jpg";
import img_firewall from "../assets/firewall.jpg";
import google from "../assets/google.png";

const Projects = () => {
  return (
    <section
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full section-wrapper"
      id="projects"
    >
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
        url="https://github.com/misafidiniaina/multi-cloud"
      />
      <ProjectCard
        projectTitle="Kubernetes multi cluster"
        image={
          <img
            src={img_multi_cluster}
            alt="Kubernetes multi cluster"
            className="rounded-lg w-[22rem]"
          />
        }
        skills={["fontisto:aws", "file-icons:kubernetes"]}
        customIcons={[
          <img src={google} alt="gcp icon" className="h-6 md:h-7" />,
        ]}
        url="https://github.com/misafidiniaina/multi-cluster"
      />
      <ProjectCard
        projectTitle="GCP infrastructure with terraform"
        image={
          <img
            src={img_GCP_infra}
            alt="Multi cloud project"
            className="w-[22rem]"
          />
        }
        skills={["file-icons:terraform"]}
        customIcons={[
          <img src={google} alt="gcp icon" className="h-6 md:h-7" />,
        ]}
        url="https://github.com/misafidiniaina/gcp_iac"
      />
      <ProjectCard
        projectTitle="Graphical interface Linux firewall"
        image={
          <img
            src={img_firewall}
            alt="Multi cloud project"
            className="w-[22rem]"
          />
        }
        skills={["akar-icons:python-fill", "uil:linux"]}
        url="https://github.com/misafidiniaina/firewall"
      />
    </section>
  );
};

export default Projects;
