import React, { useState, useEffect } from "react";
import SkillCard from "../components/SkillCard";
import Jenkins from "../assets/stacks/Jenkins.svg";
import Ansible from "../assets/stacks/Ansible.svg";
import AWS from "../assets/stacks/AWS.svg";
import Docker from "../assets/stacks/Docker.svg";
import Google from "../assets/stacks/Google.svg";
import Grafana from "../assets/stacks/Grafana.svg";
import Kubernetes from "../assets/stacks/Kubernetes.svg";
import Prometheus from "../assets/stacks/Prometheus.svg";
import Python from "../assets/stacks/Python.svg";
import Terraform from "../assets/stacks/Terraform.svg";

const skills = [
  { image: Jenkins, name: "Jenkins", category: "ci/cd pipeline" },
  { image: Ansible, name: "Ansible", category: "automation" },
  { image: AWS, name: "AWS", category: "cloud" },
  { image: Docker, name: "Docker", category: "containers" },
  { image: Google, name: "Google Cloud", category: "cloud" },
  { image: Grafana, name: "Grafana", category: "monitoring" },
  { image: Kubernetes, name: "Kubernetes", category: "orchestration" },
  { image: Prometheus, name: "Prometheus", category: "metrics" },
  { image: Python, name: "Python", category: "language" },
  { image: Terraform, name: "Terraform", category: "infrastructure as code" },
];

const Skills = () => {
  const [lineCount, setLineCount] = useState(getLineCount());
  const [positions, setPositions] = useState([]);

  function getLineCount() {
    if (window.innerWidth < 640) return 5;
    if (window.innerWidth < 1024) return 7;
    return 9;
  }

  // Update lineCount on resize
  useEffect(() => {
    const handleResize = () => setLineCount(getLineCount());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Update positions array whenever lineCount or window size changes
  useEffect(() => {
    if (window.innerWidth < 640) {
      // Mobile: use even lines excluding last line (0, 2, 4)
      const lines = Array.from({ length: lineCount })
        .map((_, i) => i)
        .filter((i) => i % 2 === 0 && i !== lineCount - 1);
      setPositions(lines.map((i) => (i / (lineCount - 1)) * 100));
    } else {
      // Medium+ : use lines 0, 3, 6 if within lineCount
      const lines = [0, 3, 6].filter((i) => i < lineCount);
      setPositions(lines.map((i) => (i / (lineCount - 1)) * 100));
    }
  }, [lineCount]);

  const rowHeight = 210;
  const rows = Math.ceil(skills.length / positions.length);
  const containerHeight = rows * rowHeight;

  return (
    <section className="section-wrapper relative" id="stack">
      <p className="font-clash font-black mt-20 text-4xl md:text-5xl w-full mb-3 text-stroke-2">
        STACK
      </p>

      <div className="relative w-full" style={{ height: `${containerHeight}px` }}>
        {skills.map((skill, index) => {
          const posIndex = index % positions.length;
          const left = positions[posIndex];
          const top = Math.floor(index / positions.length) * rowHeight + 10;

          return (
            <div
              key={index}
              className="absolute"
              style={{
                left: `${left}%`,
                top: `${top}px`,
              }}
            >
              <SkillCard {...skill} />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
