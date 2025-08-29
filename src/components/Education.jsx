import React from "react";

const education = [
  {
    degree: "B.Tech",
    course:"Computer Science and Engineering",
    school: "Sri Vasavi Engineering College",
    duration: "2022 – 2026",
    score: "74.13% (8.16 CGPA)",
  },
  {
    degree: "Board Of Intermediate",
    course:"MPC",
    school: "Elite Junior College",
    duration: "2020 – 2022",
    score: "77.50%",
  },
  {
    degree: "Board Of Secondary",
    course:"SSC",
    school: "Elite Public School",
    duration: "2019 – 2020",
    score: "95.17%",
  },
];

const Education = () => {
  return (
    <section
      id="education"
      className="py-20 px-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white"
    >
      <h2 className="text-4xl font-extrabold mb-16 text-center tracking-wide">
        🎓 Education
      </h2>

      <div className="relative max-w-3xl mx-auto">
        {/* Vertical line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 via-cyan-400 to-blue-500 rounded-full"></div>

        <div className="space-y-16">
          {education.map((edu, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center text-center"
            >
              {/* Timeline dot */}
              <div className="w-8 h-8 flex items-center justify-center bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-bold rounded-full border-4 border-gray-900 shadow-lg">
                {index + 1}
              </div>

              {/* Content card */}
              <div className="mt-6 bg-gray-800/90 p-8 rounded-xl shadow-xl border border-gray-700 hover:border-blue-400 hover:shadow-blue-400/30 transition-all duration-300 w-full sm:w-3/4">
                <h3 className="text-xl font-semibold text-blue-400 mb-2">
                  {edu.degree}
                </h3>
                <p className="text-gray-300 font-medium">{edu.course}</p>
                <p className="text-gray-300 font-medium">{edu.school}</p>
                <p className="text-sm text-gray-400 italic mt-1">
                  {edu.duration}
                </p>
                <p className="text-sm mt-3">
                  📊 <span className="font-semibold">{edu.score}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
