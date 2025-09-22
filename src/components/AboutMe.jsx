import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center bg-[#222831] px-6 md:px-10 py-16 text-white relative overflow-hidden"
    > 
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full max-w-6xl mx-auto gap-10">
        
        <div className="text-center md:text-left md:w-1/2">
          <h3 className="text-3xl sm:text-4xl font-bold mb-4 text-[#00adb5]">
            About Me
          </h3>
          <p className="text-gray-300 leading-relaxed">
            Hi, I’m <span className="font-semibold text-[#00adb5]">Balogun Jolade Mariam</span>, 
            a Full Stack Developer passionate about building responsive, user-friendly websites. 
            I specialize in creating clean, functional designs paired with efficient backend systems 
            to deliver seamless digital experiences.
          </p>
          <p className="text-gray-300 leading-relaxed mt-4">
            I work with modern technologies like 
            <span className="text-[#00adb5] font-medium"> HTML, CSS, JavaScript, React, Tailwind CSS</span>, 
            and backend frameworks to bring ideas to life. Whether it’s a portfolio website, 
            e-commerce store, real estate platform, or landing page, my goal is to craft solutions 
            that look great, perform well, and help brands grow.
          </p>
        </div>

        
        <div className="md:w-1/2 relative">
      
          <img
            src="/images/image4.png" 
            alt="Behind Illustration"
            className="absolute top-0 left-0 w-full h-full object-contain opacity-50 pointer-events-none"
          />
          
          <img
            src="/images/image8.png"
            alt="About Me Illustration"
            className="relative w-full h-auto object-contain z-10 mt-12"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
