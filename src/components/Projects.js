import React from "react";
import WorkImg from "../assets/img/workImg.png";
import realEstate from "../assets/img/realestate.png";

const Projects = () => {
  return (
    <section
      name="projects"
      className="w-full h-full text-gray-300 bg-gray-900 py-12"
    >
      <div className="max-w-[55rem] mx-auto px-8 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-cyan-500">
            Projects
          </p>
          <p className="py-4">Check out some of my recent projects:</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div
            style={{ backgroundImage: `url(${WorkImg})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100 text-center">
              <span className="text-2xl font-bold text-white tracking-wider">
                React JS Application
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-2 m-2 bg-white text-gray-700 font-bold text-lg shadow-md shadow-cyan-100">
                    Demo
                  </button>
                </a>
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-2 m-2 bg-white text-gray-700 font-bold text-lg shadow-md shadow-cyan-100">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${realEstate})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100 text-center">
              <span className="text-2xl font-bold text-white tracking-wider">
                React JS Application
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-2 m-2 bg-white text-gray-700 font-bold text-lg shadow-md shadow-cyan-100">
                    Demo
                  </button>
                </a>
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-2 m-2 bg-white text-gray-700 font-bold text-lg shadow-md shadow-cyan-100">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${WorkImg})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100 text-center">
              <span className="text-2xl font-bold text-white tracking-wider">
                React JS Application
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-2 m-2 bg-white text-gray-700 font-bold text-lg shadow-md shadow-cyan-100">
                    Demo
                  </button>
                </a>
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-2 m-2 bg-white text-gray-700 font-bold text-lg shadow-md shadow-cyan-100">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${realEstate})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100 text-center">
              <span className="text-2xl font-bold text-white tracking-wider">
                React JS Application
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-2 m-2 bg-white text-gray-700 font-bold text-lg shadow-md shadow-cyan-100">
                    Demo
                  </button>
                </a>
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-2 m-2 bg-white text-gray-700 font-bold text-lg shadow-md shadow-cyan-100">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${WorkImg})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100 text-center">
              <span className="text-2xl font-bold text-white tracking-wider">
                React JS Application
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-2 m-2 bg-white text-gray-700 font-bold text-lg shadow-md shadow-cyan-100">
                    Demo
                  </button>
                </a>
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-2 m-2 bg-white text-gray-700 font-bold text-lg shadow-md shadow-cyan-100">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${realEstate})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100 text-center">
              <span className="text-2xl font-bold text-white tracking-wider">
                React JS Application
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-2 m-2 bg-white text-gray-700 font-bold text-lg shadow-md shadow-cyan-100">
                    Demo
                  </button>
                </a>
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-2 m-2 bg-white text-gray-700 font-bold text-lg shadow-md shadow-cyan-100">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
