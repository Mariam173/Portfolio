import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaHome, FaUser, FaProjectDiagram, FaPhone } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#222831] text-white py-12 px-6 text-center">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-6">

        
        <h1 className="text-2xl font-bold text-[#00adb5]">CodeByJolade</h1>

        
        <ul className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-sm text-gray-300 items-center">
          <li className="flex items-center gap-2 hover:text-[#00adb5] cursor-pointer transition">
            <FaHome /> Home
          </li>
          <li className="flex items-center gap-2 hover:text-[#00adb5] cursor-pointer transition">
            <FaUser /> About
          </li>
          <li className="flex items-center gap-2 hover:text-[#00adb5] cursor-pointer transition">
            <FaProjectDiagram /> Projects
          </li>
          <li className="flex items-center gap-2 hover:text-[#00adb5] cursor-pointer transition">
            <FaPhone /> Contact
          </li>
        </ul>

        
        <div className="flex gap-6 text-2xl text-gray-300 mt-4">
          <a
            href="https://www.linkedin.com/in/jolade-balogun-8093a7235"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#00adb5] transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/Mariam173"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#00adb5] transition"
          >
            <FaGithub />
          </a>
          <a
            href="mailto:mariambalogun1999@gmail.com"
            className="hover:text-[#00adb5] transition"
          >
            <FaEnvelope />
          </a>
        </div>

      
        <p className="text-xs text-gray-400 mt-6">
          &copy; {new Date().getFullYear()} CodeByJolade. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

