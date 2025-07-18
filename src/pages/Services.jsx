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
            "I create automated systems that take developers' work and safely turn it into working applications — quickly, reliably, and with minimal manual effort. Think of it as building a fast, efficient software assembly line.",
          ]}
        />
        <ServiceCard
          icon="hugeicons:configuration-02"
          title=" Infrastructure & Cloud Management"
          description={[
            "I set up and maintain the environment where software lives.",
            "I manage cloud servers and tools to ensure applications run smoothly, securely, and can handle growth. Whether it’s setting up new systems or maintaining existing ones, I make sure the kitchen is always ready.",
          ]}
        />
        <ServiceCard
          icon="ant-design:product-outlined"
          title="Monitoring & Reliability"
          description={[
            "I keep watch to catch and fix problems before they affect users.",
            "I monitor performance, detect issues early, and ensure systems stay online. My job is to prevent downtime, improve stability, and quickly respond to anything that goes wrong.",
          ]}
        />
      </div>
    </section>
  );
};

export default Services;
