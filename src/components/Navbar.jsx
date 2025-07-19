import React, { useEffect, useState } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

const sections = [
  "home",
  "services",
  "stack",
  "experience",
  "projects",
  "contact",
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav className="shadow-[0px_15px_40px_black] w-screen fixed top-0 z-50 bg-black px-[1rem] sm:px-[1rem] md:px-[3rem] lg:px-[5.5rem]">
      <div className="flex px-[0.5rem] md:px-[1rem] justify-between items-center h-[70px] md:h-[80px] lg:h-[92px] border-b border-[#ffffff80]">
        {/* Logo */}
        <svg
          width="40"
          height="44"
          viewBox="0 0 50 46"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_681_165)">
            <rect
              width="50"
              height="45.1368"
              fill="url(#paint0_linear_681_165)"
            />
            <path
              d="M19.9062 11.5503H43.6164"
              stroke="black"
              stroke-width="7"
            />
            <path
              d="M32.0664 45.1376V11.4736"
              stroke="black"
              stroke-width="7"
            />
            <path d="M13 0V36H26" stroke="black" stroke-width="7" />
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_681_165"
              x1="50"
              y1="-1.03154e-06"
              x2="1.75381e-06"
              y2="45"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#E3E3E3" />
              <stop offset="1" stop-color="#DEDEDE" />
            </linearGradient>
            <clipPath id="clip0_681_165">
              <rect width="50" height="45.1368" fill="white" />
            </clipPath>
          </defs>
        </svg>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-base font-medium">
          {sections.map((section) => (
            <li key={section}>
              <a
                href={`#${section}`}
                className={`font-clash text-lg font-normal transition-colors duration-300 ${
                  activeSection === section
                    ? "text-[#B0FF92]"
                    : "text-[#ffffffa0] hover:text-[#B0FF92]"
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <div
          className="md:hidden text-white text-3xl cursor-pointer"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? <HiOutlineX /> : <HiOutlineMenu />}
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <ul className="md:hidden flex flex-col gap-4 bg-black px-6 pb-6 pt-4 border-b border-[#ffffff80]">
          {sections.map((section) => (
            <li key={section} onClick={closeMobileMenu}>
              <a
                href={`#${section}`}
                className={`block font-clash text-lg font-normal transition-colors duration-300 ${
                  activeSection === section
                    ? "text-[#B0FF92]"
                    : "text-white hover:text-[#B0FF92]"
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
