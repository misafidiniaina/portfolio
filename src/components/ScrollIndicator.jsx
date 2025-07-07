// ScrollIndicator.js
import React, { useEffect, useState } from "react";

const ScrollIndicator = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const docHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    setScrollPosition(scrollPercent);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        height: "2px",
        width: "100%",
        backgroundColor: "transparent",
        zIndex: 9999,
      }}
    >
      <div
        style={{
          height: "100%",
          width: `${scrollPosition}%`,
          backgroundImage: 'linear-gradient(to right, #AA1DAF, #B51780, #BB7411, #00CC78)',
          transition: "width 0.2s ease-out",
        }}
      />
    </div>
  );
};

export default ScrollIndicator;
