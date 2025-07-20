import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";

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

  const handleClick = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      onClick={handleClick}
      className={`
        fixed bottom-3 z-50 right-[1.5rem] md:bottom-5 md:right-[2rem] lg:right-[6.7rem]
        flex justify-center items-center gap-1 px-3 py-2 md:py-3 aspect-auto
        rounded-md bg-white text-black font-semibold font-clash
        text-[1rem] md:text-[1rem] cursor-pointer
        hover:scale-[1.1]
        transition-all duration-1000 ease-in-out

        ${
          visible
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-6 pointer-events-none"
        }
      `}
    >
      Contact me
      <Icon
        icon="fluent:call-20-filled"
        width="20"
        height="20"
        color="#5cbb36"
      />
    </div>
  );
};

export default PermanentButton;
