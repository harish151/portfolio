import React, { useState, useEffect } from "react";

const Hero = () => {
  const mainText = "Hey, I'm Harish Rachuri";
  const subText = "Computer Science Engineer | Web Developer";

  const [displayedMain, setDisplayedMain] = useState("");
  const [displayedSub, setDisplayedSub] = useState("");
  const [showButton, setShowButton] = useState(false);

  // Typing for main text
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < mainText.length) {
        setDisplayedMain(mainText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 150);
    return () => clearInterval(interval);
  }, []);

  // Typing for sub text after main text completes
  useEffect(() => {
    if (displayedMain === mainText) {
      let index = 0;
      const interval = setInterval(() => {
        if (index < subText.length) {
          setDisplayedSub(subText.slice(0, index + 1));
          index++;
        } else {
          clearInterval(interval);
          // Show button after subText finishes typing
          setTimeout(() => setShowButton(true), 300); // small delay before showing
        }
      }, 100);
      return () => clearInterval(interval);
    }
  }, [displayedMain]);

  return (
    <section
      className="relative h-screen flex flex-col items-center justify-center text-center text-white bg-cover bg-center"
      style={{ backgroundImage: "url('/bg.jpg')" }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 px-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">
          {displayedMain}
        </h1>
        <p className="text-base sm:text-lg md:text-2xl mb-6 drop-shadow-md">
          {displayedSub}
        </p>

        {/* Smooth fade-in button */}
        <a
          href="/harishrachuri_resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className={`mt-6 inline-block px-8 py-4 rounded-full text-white font-semibold
                      bg-gradient-to-r from-purple-500 via-pink-500 to-red-500
                      shadow-lg hover:scale-105 transform transition-all duration-500
                      hover:shadow-2xl
                      ${showButton ? "opacity-100" : "opacity-0"}`}
        >
          View Resume
        </a>
      </div>
    </section>
  );
};

export default Hero;

//resume view link :-  https://www.overleaf.com/read/jvjjznvvkhdd#70e404
//resume edit link :- https://www.overleaf.com/8758864482mpxsmcvqrrss#45e7ec