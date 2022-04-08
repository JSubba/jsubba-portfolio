import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <section name="home" className="bg-gray-900 text-gray-300 w-full h-screen">
      <div className="max-w-[62rem] mx-auto px-8 flex flex-col justify-center h-full">
        <h1 className="text-3xl text-cyan-500 sm:text-5xl font-bold">
          J.Subba
        </h1>
        <h2 className="text-4xl sm:text-6xl text-gray-500 font-bold py-4">
          I'm a Web Developer
        </h2>
        <p className="text-gray-500 py-4 max-w-md">
          I’m a front-end web developer specializing in building (and
          occasionally designing) exceptional digital experiences. Currently,
          I’m focused on building responsive full-stack web applications.
        </p>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-cyan-500 hover:border-cyan-500">
            View Work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3 " />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
