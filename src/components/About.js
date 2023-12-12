import React, { useEffect } from "react";
import particlesConfig from "../particles-config.json";

export default function About() {
  useEffect(() => {
    window.particlesJS("particles-js", {

      ...particlesConfig,
      particles: {

        ...particlesConfig.particles,
        size: {
          value: 5,
        },
      },
    });
  }, []);
  return (
    <section id="about" className="relative">
      <div id="particles-js"></div>
      <div className="content-wrapper relative z-1">
        <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-black">
              Hi, I'm Anastasiya!
              <br className="hidden lg:inline-block" />
            </h1>
            <p className="mb-8 leading-relaxed">
              I am a third-year Computer Science student at the Georgia Institute
              of Technology concentrating in Intelligence and Information
              Networks. I am passionate about technology and innovation and look
              for ways to explore Machine Learning and Artificial Intelligence.
            </p>
            <div className="flex justify-center">
              <a
                href="#contact"
                className="inline-flex text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded text-lg"
              >
                Connect With Me
              </a>
              <a
                href="#projects"
                className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
              >
                See My Experience
              </a>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <div
              className="rounded-full overflow-hidden border-4 border-purple-500"
              style={{ width: "80%", height: "80%" }}
            >
              <img
                className="object-cover object-center w-full h-full"
                alt="hero"
                src="./anastasiya.png"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}