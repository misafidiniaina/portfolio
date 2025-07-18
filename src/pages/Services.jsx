import React from "react";
import ServiceCard from "../components/ServiceCard";

const Services = () => {
  return (
    <section
      id="services"
      className="flex section-wrapper gap-5 w-screen flex-col"
    >
      <p className="font-clash font-bold text-4xl md:text-5xl w-full text-end text-stroke-2">
        SERVICES
      </p>
      <div className="flex flex-col md:flex-col lg:flex-row gap-5 ">
        <ServiceCard
          icon="carbon:workflow-automation"
          title="Automation & Deployment"
          description={[
            "I streamline how software is built and delivered.",
            "I automate the process of turning code into applications, making delivery fast and reliable.",
          ]}
        />
        <ServiceCard
          icon="hugeicons:configuration-02"
          title=" Infrastructure & Cloud Management"
          description={[
            "I set up and maintain the environment where software lives.",
            "I manage cloud servers to keep applications running smoothly, securely, and ready to grow",
          ]}
        />
        <ServiceCard
          icon="ant-design:product-outlined"
          title="Monitoring & Reliability"
          description={[
            "I keep watch to catch and fix problems before they affect users.",
            "I monitor systems to prevent downtime, improve stability, and fix issues quickly.",
          ]}
        />
      </div>
    </section>
  );
};

export default Services;
