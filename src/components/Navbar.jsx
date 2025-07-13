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
    <nav className="w-screen fixed top-0 z-50 bg-black px-[1rem] sm:px-[1rem] md:px-[3rem] lg:px-[5.5rem]">
      <div className="flex px-[0.5rem] md:px-[1rem] justify-between items-center h-[70px] md:h-[80px] lg:h-[92px] border-b border-[#ffffff80]">
        {/* Logo */}
        <svg
          width="40"
          height="40"
          viewBox="0 0 94 94"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M94 94H0V0H94V94ZM22.5 14C18.0817 14 14.5 17.5817 14.5 22V73C14.5002 77.2017 17.8684 80.9998 22.5 81H47.5C51.9183 81 55.5 77.4183 55.5 73C55.5 68.5817 51.9183 65 47.5 65H30.5V22C30.5 17.5817 26.9183 14 22.5 14ZM51 15C46.5817 15 43 18.5817 43 23C43 27.4183 46.5817 31 51 31H58V73C58 77.4183 61.5817 81 66 81C70.4183 81 74 77.4183 74 73V31H81C85.4183 31 89 27.4183 89 23C89 18.5817 85.4183 15 81 15H51Z"
            fill="white"
          />
        </svg>

        {/* Desktop Menu */}
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
                    className={`absolute left-0 -bottom-1 h-[2px] w-full bg-[linear-gradient(to_right,_#AA1DAF,_#B51780,_#BB7411,_#00CC78)] transform transition-all duration-300 origin-left ${
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
