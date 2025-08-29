import React from "react";

const About = () => {
  return (
    <section id="about" className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        
        {/* Profile Image */}
        <div className="flex justify-center">
          <img
            src="/profile.jpg"   // <-- place your image in public/profile.jpg
            alt="Harish Rachuri"
            className="w-64 h-64 object-cover rounded-full shadow-xl border-4 border-blue-500"
          />
        </div>

        {/* About Content */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">
            About Me
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-4">
            Hi 👋 I'm <span className="font-semibold text-blue-600">Harish Rachuri</span>, 
            a student of <strong>Computer Science Engineering undergraduate</strong> at 
            <span className="font-semibold"> Sri Vasavi Engineering College (2022–2026)</span>.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            I enjoy building modern web applications using 
            <strong> React.js, Spring Boot, Flask, MERN, MySQL and MongoDB</strong>. 
            Apart from coding, I love exploring new tech, video editing, 
            and digital design. I thrive in teamwork, problem-solving, 
            and continuously improving my skills. 🚀
          </p>
          <a
            href="#contact"
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg transition duration-300"
          >
            Let’s Connect
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
