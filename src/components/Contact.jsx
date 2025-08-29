import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="p-10 bg-gray-600 text-center bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white">
      <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
      <div className="space-y-2 text-sm sm:text-base">
        <p>Email: <a href="mailto:rachuriharish05@gmail.com">rachuriharish05@gmail.com</a></p>
        <p>Phone: +91 9908545726</p>
        <p><a href="https://linkedin.com/in/harish-rachuri-31401228b/" target="_blank" rel="noreferrer">LinkedIn</a></p>
      </div>
    </section>
  );
};

export default Contact;
