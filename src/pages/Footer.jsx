import React from "react";

const Footer = () => {
  return (
    <footer className="font-clash font-regular bg-white text-[black] py-6 text-center">
      <div className="max-w-4xl mx-auto px-4">
        <p className="text-sm mb-3">
          © {new Date().getFullYear()} Your Name. All rights reserved.
        </p>
        <div className="flex justify-center items-center space-x-6">
          {/* GitHub Icon */}
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition-colors"
            aria-label="GitHub"
          >
            <svg
              className="w-7 h-7"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.603-3.369-1.343-3.369-1.343-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.031 1.532 1.031.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.111-4.555-4.943 0-1.091.39-1.983 1.03-2.681-.103-.253-.447-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844a9.54 9.54 0 012.5.337c1.909-1.294 2.748-1.025 2.748-1.025.546 1.377.202 2.394.1 2.647.64.698 1.028 1.59 1.028 2.68 0 3.841-2.337 4.687-4.566 4.935.359.31.678.92.678 1.855 0 1.338-.012 2.419-.012 2.75 0 .269.18.58.688.481A10.004 10.004 0 0022 12c0-5.52-4.48-10-10-10z"
              />
            </svg>
          </a>

          {/* LinkedIn Icon */}
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition-colors"
            aria-label="LinkedIn"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11.75 19h-3v-9h3v9zm-1.5-10.25c-.966 0-1.75-.787-1.75-1.75s.784-1.75 1.75-1.75c.967 0 1.75.787 1.75 1.75s-.783 1.75-1.75 1.75zm13.25 10.25h-3v-4.5c0-1.07-.02-2.45-1.5-2.45-1.5 0-1.73 1.17-1.73 2.38v4.57h-3v-9h2.88v1.23h.04c.4-.75 1.37-1.54 2.82-1.54 3.02 0 3.58 1.99 3.58 4.58v4.73z" />
            </svg>
          </a>

          {/* Email Icon */}
          <a
            href="mailto:youremail@example.com"
            className="hover:text-black transition-colors"
            aria-label="Email"
          >
            <svg
              className="w-8 h-8"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
