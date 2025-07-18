import React, { useState, useEffect } from "react";

const Background = () => {
  const [count, setCount] = useState(getCount());

  function getCount() {
    if (window.innerWidth < 640) return 5; // small
    if (window.innerWidth < 1024) return 7; // medium
    return 9; // large
  }

  useEffect(() => {
    const handleResize = () => setCount(getCount());
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const lines = Array.from({ length: count });

  return (
    <div className="flex w-full z-[-200] justify-between items-center section-wrapper fixed">
      {lines.map((_, index) => (
        <svg
          key={index}
          width="2"
          height="976"
          viewBox="0 0 2 976"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1 -16V975.5" stroke="#ffffff" strokeWidth="0.1" />
        </svg>
      ))}
    </div>
  );
};

export default Background;
