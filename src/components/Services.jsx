import React from "react";
import { FaLaptopCode, FaShoppingCart, FaHome, FaFileAlt } from "react-icons/fa";

const services = [
  {
    name: "Portfolio Websites",
    icon: <FaLaptopCode className="text-[#00adb5] text-5xl" />,
    description:
      "Beautiful, responsive portfolios that showcase your skills and work.",
  },
  {
    name: "E-Commerce Websites",
    icon: <FaShoppingCart className="text-[#00adb5] text-5xl" />,
    description:
      "Online stores with secure payments and smooth shopping experiences.",
  },
  {
    name: "Real Estate Websites",
    icon: <FaHome className="text-[#00adb5] text-5xl" />,
    description:
      "Property listings with search filters and location integration.",
  },
  {
    name: "Landing Pages",
    icon: <FaFileAlt className="text-[#00adb5] text-5xl" />,
    description:
      "High-converting landing pages for marketing campaigns and products.",
  },
];

const MyServices = () => {
  return (
    <section
      id="services"
      className="bg-[#1b1f24] text-white py-16 px-6 md:px-10"
    >
      <div className="max-w-6xl mx-auto text-center">
    
        <h3 className="text-3xl sm:text-4xl font-bold mb-12 text-[#00adb5]">
          Services I Offer
        </h3>

        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#222831] p-6 rounded-lg shadow-lg 
                         hover:scale-105 hover:shadow-cyan-500/20
                         transition duration-300 ease-in-out"
            >
          
              <div className="flex justify-center mb-4">{service.icon}</div>

        
              <h4 className="text-lg font-semibold mb-2">{service.name}</h4>

              
              <p className="text-sm text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyServices;
