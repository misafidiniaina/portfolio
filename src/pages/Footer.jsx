import React from "react";
import { Icon } from "@iconify/react";

const Footer = () => {
  return (
    <footer className="font-clash font-regular bg-white text-[black] py-6 text-center">
      <div className="max-w-4xl mx-auto px-4">
        <p className="text-sm mb-3">
          © {new Date().getFullYear()} Liantsoa Tsiory. All rights reserved.
        </p>
        <div className="flex justify-center items-center space-x-2">
          {/* GitHub Icon */}
          <a
            href="https://github.com/misafidiniaina"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition-colors"
            aria-label="GitHub"
          >
            <Icon icon="uil:github" width="32" height="32" />
          </a>

          {/* LinkedIn Icon */}
          <a
            href="mailto:liantsoatsiorinirina@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition-colors"
            aria-label="LinkedIn"
          >
            <Icon
              icon="material-symbols:mail-outline-rounded"
              width="32"
              height="32"
            />
          </a>

          {/* Email Icon */}
          <a
            href="mailto:liantsoatsiorinirina@gmail.com"
            className="hover:text-black transition-colors"
            aria-label="Email"
          >
            <Icon icon="ri:whatsapp-line" width="32" height="32" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
