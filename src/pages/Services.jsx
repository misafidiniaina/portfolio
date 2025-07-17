import React from "react";
import ServiceCard from "../components/ServiceCard";

const Services = () => {
  return (
    <section
      id="services"
      className="flex section-wrapper gap-5 w-screen flex-col"
    >
      <p className="font-clash font-black text-white text-4xl md:text-5xl w-full text-end">
        SERVICES
      </p>
      <div className="flex flex-col md:flex-col lg:flex-row gap-5 ">
        <ServiceCard
          icon="carbon:workflow-automation"
          title="Automation & Delivery"
          description={[
            "CI/CD Implementation",
            "Security Integration",
            "GitOps Workflows",
          ]}
        />
        <ServiceCard
          icon="hugeicons:configuration-02"
          title="Infrastructure as Code & Configuration"
          description={[
            "Cloud infrastructure design",
            "Configuration Management",
            "Environment Provisioning",
          ]}
        />
        <ServiceCard
          icon="ant-design:product-outlined"
          title="Containerization & Reliability"
          description={[
            "containerization",
            "Monitoring & Logging",
            "Health Checks & Alerting",
          ]}
        />
      </div>
    </section>
  );
};

export default Services;
