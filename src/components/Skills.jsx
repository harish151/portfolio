import React from "react";
import { 
  FaPython, FaJava, FaHtml5, FaCss3Alt, FaJs, FaReact, 
  FaNodeJs, FaDatabase, FaGitAlt, FaProjectDiagram 
} from "react-icons/fa";
import { 
  SiCplusplus, SiSpringboot, SiMongodb, SiFlask 
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

const skills = [
  { name: "Python", icon: <FaPython /> },
  { name: "Java", icon: <FaJava /> },
  { name: "C++", icon: <SiCplusplus /> },
  { name: "HTML5", icon: <FaHtml5 /> },
  { name: "CSS3", icon: <FaCss3Alt /> },
  { name: "JavaScript", icon: <FaJs /> },
  { name: "React JS", icon: <FaReact /> },
  { name: "React Native", icon: <TbBrandReactNative /> },
  { name: "MERN Stack", icon: <FaProjectDiagram /> }, // generic icon for MERN
  { name: "Spring Boot", icon: <SiSpringboot /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "Flask", icon: <SiFlask /> },
  { name: "MySQL", icon: <FaDatabase /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "Git & GitHub", icon: <FaGitAlt /> },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-16 px-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white"
    >
      <h2 className="text-3xl font-bold mb-12 text-center">My Skills</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-6 rounded-xl 
                       bg-gray-800 border border-gray-700 shadow-lg 
                       transform transition-transform duration-300 
                       hover:scale-110"
          >
            <div className="text-4xl mb-3 text-blue-400">{skill.icon}</div>
            <p className="font-medium text-center">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
