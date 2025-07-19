import React, { useEffect, useState } from "react";

const PermanentButton = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const contactSection = document.getElementById("contact");
      const homeSection = document.getElementById("home");
      if (!contactSection || !homeSection) return;

      const rect = contactSection.getBoundingClientRect();
      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        setVisible(false);
      } else {
        setVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`
        fixed bottom-3 z-50 right-[1.5rem] md:bottom-5 md:right-[2rem] lg:right-[6.7rem]
        flex justify-center items-baseline gap-2 px-3 py-2 aspect-auto
        rounded-md bg-white text-black font-semibold font-clash
        text-[1rem] md:text-[1rem]

        transition-transform duration-1000 ease-in-out

        ${
          visible
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-6 pointer-events-none"
        }
      `}
    >
      Contact me
    </div>
  );
};

export default PermanentButton;
