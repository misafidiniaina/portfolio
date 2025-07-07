import React from "react";

const Navbar = () => {
  return (
    <nav className="w-screen section-wrapper fixed bg-black top-0">
      <div className="flex justify-between items-center h-[70px] sm:h-[70px] md:h-[80px] lg:h-[92px] w-full  border-b border-[#ffffff80]">
        <p
          className="text-3xl text-white font-bold font-clash leading-[20px]"
          aria-label="Home"
        >
          Liantsoa
          <br />
          Tsiory
        </p>
        {/* Navigation links */}
        <ul className="hidden md:flex space-x-6 text-base font-medium">
          <li>
            <a
              href="#hero"
              className="font-clash text-white text-lg font-normal hover:text-blue-600 transition-colors"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#services"
              className="font-clash text-white text-lg font-normal hover:text-blue-600 transition-colors"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="font-clash text-white text-lg font-normal hover:text-blue-600 transition-colors"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#experience"
              className="font-clash text-white text-lg font-normal hover:text-blue-600 transition-colors"
            >
              Experience
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="font-clash text-white text-lg font-normal hover:text-blue-600 transition-colors"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="font-clash text-white text-lg font-normal hover:text-blue-600 transition-colors"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Optional: Mobile menu toggle */}
        <div className="md:hidden">
          {/* Add hamburger menu toggle here if you want */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
