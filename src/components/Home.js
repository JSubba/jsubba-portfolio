import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <header
      name="home"
      className="bg-gray-900 bg-right sm:bg-center bg-cover bg-no-repeat text-gray-300 w-full h-screen"
    >
      <div className="max-w-[55rem] mx-auto px-8 -m-8 flex flex-col justify-center h-full">
        <h1 className="text-4xl text-cyan-500 sm:text-5xl font-bold">
          J.Subba
        </h1>
        <h2 className="text-5xl sm:text-6xl font-bold py-4">
          I'm a Web Developer
        </h2>
        <p className="py-4 max-w-md">
          I’m a front-end web developer specializing in building and designing
          exceptional digital experiences. At present, I’m focused on building
          responsive front-end web applications.
        </p>
        <div>
          <Link to="projects" smooth={true} duration={500}>
            <button className="px-6 py-3 my-2 flex items-center shadow-md shadow-cyan-500 hover:text-cyan-500 hover:scale-105 ease-in duration-500 font-semibold">
              View Projects
              <span>
                <HiArrowNarrowRight className="ml-3 " />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Home;
