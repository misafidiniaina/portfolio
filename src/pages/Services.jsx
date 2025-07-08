import React from "react";
import ServiceCard from "../components/ServiceCard";

const Services = () => {
  return (
    <section
      id="services"
      className="flex section-wrapper gap-5 w-screen flex-col md:flex-col lg:flex-row"
    >
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
    </section>
  );
};

export default Services;
