import React from "react";

const projects = [
  {
    title: "Loopstudios Website",
    description:
      "A sleek, responsive landing page for a virtual reality brand. Built from scratch using HTML, CSS, and vanilla JavaScript with interactive navigation and smooth layout transitions.",
    image: "/images/Loopstudios.png",
    link: "https://loopstudios-gamma-sepia.vercel.app/",
  },
  {
    title: "Flowbase Website",
    description:
      "A clean and elegant home decor e-commerce page inspired by Flowbase. Features responsive design, reusable components, and smooth scrolling built with React and Tailwind CSS.",
    image: "/images/Flowbase.png",
    link: "https://flowbase-t79z.vercel.app/",
  },
  {
    title: "WestWing",
    description:
      "A pixel-perfect clone of Westwing, showcasing modern UI components and responsive layouts. Built with React and Tailwind CSS for a fast and scalable frontend experience.",
    image: "/images/WestWing.png",
    link: "#",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative bg-cover bg-center bg-no-repeat text-white py-16 px-6 md:px-10"
      style={{ backgroundImage: "url('/images/image4.png')" }} 
    >
      
      <div className="absolute inset-0 bg-black bg-opacity-70 z-0" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <h3 className="text-3xl sm:text-4xl font-bold mb-12 text-center text-[#00adb5]">
          My Projects
        </h3>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[#393e46] bg-opacity-90 p-4 rounded-lg shadow-lg hover:shadow-cyan-500/20 transition duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h4 className="text-xl font-semibold mb-2">{project.title}</h4>
              <p className="text-sm text-gray-300 mb-4">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#00adb5] text-white px-4 py-2 rounded-full text-sm hover:bg-cyan-600 transition"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
