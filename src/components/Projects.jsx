import React from "react";
import { FaMobileAlt, FaDumbbell, FaChalkboardTeacher } from "react-icons/fa";

const projects = [
  {
    title: "Smartphone Comparison and Recommendation System",
    description:
      "Developed a web application that compares mobiles using Flask + ML, Html, CSS, JavaScript, MySQL. Implemented providing mobile suggestion, showing differnces, and displaying user reviews.",
    icon: <FaMobileAlt className="text-blue-500 text-3xl" />,
    tech: ["Python", "Flask","Machine Learning", "HTML", "CSS", "JavaScript", "MySQL"],
    link: "#",
  },
  {
    title: "Gym Membership System",
    description:
      "Spring Boot + MySQL system for managing gym members, subscriptions, payments, and tasks in an efficient manner.",
    icon: <FaDumbbell className="text-green-600 text-3xl" />,
    tech: ["Spring Boot", "MySQL"],
    link: "#",
  },
  {
    title: "Online Quiz Examination Portal-SVEC",
    description:
      "Developed a quiz exam platform using React.Js, Bootstrap, Springboot, Atlas MongoDB, Apache Kafka, Judge0. Implemented display present exams, viewing exam progress, show exam schedule, provide compilers, conduct exams, update exam questions and exam schedule, and result viewing.",
    icon: <FaChalkboardTeacher className="text-yellow-500 text-3xl" />,
    tech: ["React JS", "Bootstrap", "Spring Boot", "MongoDB", "Apache Kafka", "Judge0"],
    link: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 px-6 bg-white">
      <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">
        My Projects
      </h2>

      <div className="space-y-8 max-w-4xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex items-start gap-6 p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300"
          >
            {/* Icon */}
            <div>{project.icon}</div>

            {/* Content */}
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600 mb-3">{project.description}</p>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2 mb-3">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs bg-blue-100 text-blue-700 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Link Button */}
              <a
                href={project.link}
                className="text-blue-500 hover:text-blue-700 font-medium"
              >
                🔗 View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
