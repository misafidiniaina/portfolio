import React, { useEffect, useState } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi"; // For hamburger icons

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
    handleScroll(); // initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav className="shadow-[0px_15px_40px_black] w-screen fixed top-0 z-50 bg-black px-[1rem] sm:px-[1rem] md:px-[3rem] lg:px-[5.5rem]">
      <div className="flex px-[0.5rem] md:px-[1rem] justify-between items-center h-[70px] md:h-[80px] lg:h-[92px] border-b border-[#ffffff80]">
        {/* Logo */}
        <svg
          width="46"
          height="40"
          viewBox="0 0 50 46"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_681_165)">
            <rect width="50" height="45.1368" fill="white" />
            <path
              d="M19.9062 11.5503H43.6164"
              stroke="black"
              stroke-width="7"
            />
            <rect
              x="39"
              y="32"
              width="7.32"
              height="7.32"
              rx="3.66"
              fill="#00A42C"
            />
            <path
              d="M32.0664 45.1376V11.4736"
              stroke="black"
              stroke-width="7"
            />
            <path d="M13 0V36H26" stroke="black" stroke-width="7" />
          </g>
          <defs>
            <clipPath id="clip0_681_165">
              <rect width="50" height="45.1368" fill="white" />
            </clipPath>
          </defs>
        </svg>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-base font-medium">
          {sections.map((section) => (
            <li key={section} className="relative group">
              <a
                href={`#${section}`}
                className={`font-clash text-lg font-normal transition-colors duration-300 ${
                  activeSection === section
                    ? "text-[#ffffffa0]"
                    : "text-[#ffffffa0] hover:text-[#00A42C]"
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
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
                    ? "text-white"
                    : "text-white hover:text-blue-500"
                }`}
              >
                <div className="relative w-fit">
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                  <span
                    className={`absolute left-0 -bottom-1 h-[2px] w-full bg-[linear-gradient(to_right,_#00A42C,_#00A42C,_#00A42C,_#00CC78)] transform transition-all duration-300 origin-left ${
                      activeSection === section
                        ? "scale-x-100 opacity-100"
                        : "scale-x-0 opacity-0"
                    }`}
                  ></span>
                </div>
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
