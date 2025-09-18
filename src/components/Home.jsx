import React from "react";
import { HiOutlineChevronDown } from "react-icons/hi";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center bg-[#222831] px-6 md:px-10 text-white relative overflow-hidden"
    >
      <div className="relative z-10 flex flex-col-reverse md:flex-row items-center justify-between w-full max-w-6xl mx-auto gap-10">
        
      
        <div className="w-full md:w-1/2 text-left">
          <h1 className="text-4xl">Hi, I'm Jolade</h1>
          <h4 className="text-2xl sm:text-5xl font-bold mb-4 leading-tight text-[#00adb5]">
            FULL STACK <span className="text-[#00adb5]">DEVELOPER</span>
          </h4>
          <p className="text-lg max-w-lg">
            I'm passionate about building responsive, user-friendly websites.
            I turn ideas into functional digital solutions that help brands and
            businesses grow.
          </p>

          
          <div className="flex mt-6">
            <a
              href="https://wa.me/2349025092106" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#00adb5] text-white px-10 py-3 rounded-full text-lg font-semibold hover:bg-cyan-600 transition w-[200px] text-center"
            >
              Hire Me
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="relative w-[250px] md:w-[400px]">
          <img
            src="/images/image2.png"
            alt="Floating icons background"
            className="absolute top-0 left-0 w-full h-full object-contain opacity-80 pointer-events-none"
          />
          <img
            src="/images/image1.png"
            alt="Jolade Illustration"
            className="relative w-full h-auto object-contain z-10"
          />
        </div>
      </div>

      {/* Scroll Down Icon */}
      <div className="absolute bottom-6 text-[#00adb5] text-4xl animate-bounce z-10">
        <a href="#about">
          <HiOutlineChevronDown />
        </a>
      </div>
    </section>
  );
};

export default Home;

