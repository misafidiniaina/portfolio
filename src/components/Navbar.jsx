import React, { useEffect, useState } from "react";

const sections = [
  "home",
  "services",
  "experience",
  "projects",
  "skills",
  "contact",
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionId = sections[i];
        const section = document.getElementById(sectionId);
        if (section && scrollY + 350 >= section.offsetTop) {
          setActiveSection(sectionId);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="w-screen px-[1rem] sm:px-[1rem] md:px-[3rem] lg:px-[5.5rem] fixed bg-black top-0 z-50">
      <div className="flex justify-between items-center h-[70px] sm:h-[70px] md:h-[80px] lg:h-[92px] w-full border-b border-[#ffffff80] px-4">
        <p
          className="text-3xl text-white font-bold font-clash leading-[20px]"
          aria-label="Home"
        >
          Liantsoa
          <br />
          Tsiory
        </p>

        <ul className="hidden md:flex space-x-6 text-base font-medium">
          {sections.map((section) => (
            <li key={section} className="relative group">
              <a
                href={`#${section}`}
                className={`font-clash text-lg font-normal transition-colors duration-300 ${
                  activeSection === section
                    ? "text-white"
                    : "text-white hover:text-blue-500"
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>

              {/* Underline animation */}
              <span
                className={`absolute left-0 -bottom-1 h-[2px] w-full bg-[linear-gradient(to_right,_#AA1DAF,_#B51780,_#BB7411,_#00CC78)] transform transition-all duration-300 origin-left ${
                  activeSection === section
                    ? "scale-x-100 opacity-100"
                    : "scale-x-0 opacity-0"
                }`}
              ></span>
            </li>
          ))}
        </ul>

        <div className="md:hidden">{/* Mobile menu button if needed */}</div>
      </div>
    </nav>
  );
};

export default Navbar;
