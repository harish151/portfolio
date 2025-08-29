import React from "react";
import { FaCertificate } from "react-icons/fa";

const certifications = [
  {
    title: "React Native",
    provider: "GeeksforGeeks",
    date: "Jun 2025",
    link: "https://media.geeksforgeeks.org/courses/certificates/9fe695158c928a5ceb2b7fbd04495ed0.pdf",
  },
  {
    title: "MongoDB Java Developer",
    provider: "MongoDB University",
    date: "Jan 2024",
    link: "https://university.mongodb.com/",
  },
  {
    title: "Azure AI Fundamentals",
    provider: "Microsoft",
    date: "Jun 2024",
    link: "https://learn.microsoft.com/api/credentials/share/en-us/HarishRachuri-5326/3794B33BC8DF2A15?sharingId=AB60C1C77B20D470",
  },
  {
    title: "Amazon Web Services",
    provider: "Brainovision",
    date: "Sep 2023",
    link: "https://aws.amazon.com/certification/",
  },
  {
    title: "GitHub Workshop",
    provider: "Brainovision",
    date: "Nov 2023",
    link: "https://github.com/",
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 px-6 bg-white text-gray-900">
      <h2 className="text-4xl font-extrabold mb-14 text-center tracking-wide text-gray-800">
        Certifications
      </h2>

      <div className="max-w-5xl mx-auto grid gap-8 sm:grid-cols-1 md:grid-cols-2">
        {certifications.map((cert, index) => (
          <a
            key={index}
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <div
              className="flex items-center gap-5 p-6 rounded-xl border border-gray-200 
                         bg-gradient-to-r from-gray-50 to-gray-100 shadow-sm
                         hover:shadow-lg hover:border-blue-400 hover:-translate-y-1 
                         transition-all duration-300"
            >
              <FaCertificate className="text-gray-400 text-3xl flex-shrink-0 transform transition duration-300" />
              <div className="text-left">
                <h3 className="text-lg font-semibold text-gray-900">
                  {cert.title}
                </h3>
                <p className="text-gray-700">{cert.provider}</p>
                <p className="text-sm text-gray-500 mt-1">📅 {cert.date}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
