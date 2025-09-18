import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";
import { SiTailwindcss, SiMui, SiMongodb, SiMysql, SiExpress } from "react-icons/si";

const skills = [
  // Frontend
  { name: "HTML", icon: <FaHtml5 className="text-orange-500 text-5xl" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500 text-5xl" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400 text-5xl" /> },
  { name: "React", icon: <FaReact className="text-cyan-400 text-5xl" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="text-sky-400 text-5xl" /> },
  { name: "Material UI", icon: <SiMui className="text-blue-600 text-5xl" /> },

  // Backend
  { name: "Node.js", icon: <FaNodeJs className="text-green-600 text-5xl" /> },
  { name: "Express.js", icon: <SiExpress className="text-gray-300 text-5xl" /> },
  { name: "MySQL", icon: <SiMysql className="text-blue-500 text-5xl" /> },
  { name: "Databases", icon: <FaDatabase className="text-purple-500 text-5xl" /> },
];

const MySkills = () => {
  return (
    <section
      id="skills"
      className="bg-[#222831] text-white py-16 px-6 md:px-10 pt-0"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h3 className="text-3xl sm:text-4xl font-bold mb-12 text-[#00adb5]">
          My Skills
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10 justify-items-center">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-2 p-4 rounded-xl hover:bg-[#393E46] hover:shadow-lg hover:scale-110 transition-all duration-300"
            >
              {skill.icon}
              <p className="text-sm font-medium text-gray-300">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MySkills;
