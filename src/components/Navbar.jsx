import React, { useState } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", to: "home" },
    { name: "About", to: "about" },
    { name: "My Skills", to: "skills" },
    { name: "Projects", to: "projects" },
    { name: "Services", to: "services" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <nav className="w-full fixed top-0 left-0 z-50 backdrop-blur-lg bg-black/50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-[#00adb5]">Ladé^Codes</h1>

      
        <ul className="hidden md:flex space-x-6 text-[#00adb5] font-medium">
          {navItems.map((item, index) => (
            <li key={index}>
              <Link
                to={item.to}
                smooth={true}
                duration={500}
                offset={-70} 
                className="cursor-pointer hover:text-cyan-400"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        
        <div
          className="md:hidden text-[#00adb5] text-3xl cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <HiOutlineX /> : <HiOutlineMenu />}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-black/90 text-[#00adb5] px-8 py-6 space-y-4 font-medium">
          {navItems.map((item, index) => (
            <li key={index}>
              <Link
                to={item.to}
                smooth={true}
                duration={500}
                offset={-70}
                className="cursor-pointer hover:text-cyan-400"
                onClick={() => setIsOpen(false)} 
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
