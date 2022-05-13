import React from "react";

const Projects = () => {
  return (
    <section
      name="projects"
      className="w-full h-full text-gray-300 bg-gray-900 py-16 pb-8"
    >
      <div className="max-w-[55rem] mx-auto px-8 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-cyan-500">
            Projects
          </p>
          <p className="py-4">Check out some of my recent projects:</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="project1 h-40 shadow-lg shadow-[#040c16] group container rounded flex justify-center items-center mx-auto content-div hover:scale-105 duration-500">
            <div className="opacity-100 text-center">
              <div className="pt-8 text-center">
                <a href="https://shonancoffee.netlify.app" target="_blank">
                  <button className="text-center rounded px-4 py-1 bg-gray-300 hover:bg-white text-gray-900 font-bold text-lg shadow shadow-gray-500">
                    Demo
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="project2 h-40 shadow-lg shadow-[#040c16] group container rounded flex justify-center items-center mx-auto content-div hover:scale-105 duration-500">
            <div className="opacity-100 text-center">
              <div className="pt-8 text-center">
                <a href="https://dezaincode.netlify.app" target="_blank">
                  <button className="text-center rounded px-4 py-1 bg-gray-300 hover:bg-white text-gray-900 font-bold text-lg shadow shadow-gray-500">
                    Demo
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="project3 h-40 shadow-lg shadow-[#040c16] group container rounded flex justify-center items-center mx-auto content-div hover:scale-105 duration-500">
            <div className="opacity-100 text-center">
              <div className="pt-8 text-center">
                <a href="https://digitalcamp.netlify.app" target="_blank">
                  <button className="text-center rounded px-4 py-1 bg-gray-300 bg:hover-white text-gray-900 font-bold text-lg shadow shadow-gray-500">
                    Demo
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="project4 h-40 shadow-lg shadow-[#040c16] group container rounded flex justify-center items-center mx-auto content-div hover:scale-105 duration-500">
            <div className="opacity-100 text-center">
              <div className="pt-8 text-center">
                <a href="https://sushihouse-site.netlify.app" target="_blank">
                  <button className="text-center rounded px-4 py-1 bg-gray-300 hover:bg-white text-gray-900 font-bold text-lg shadow shadow-gray-500">
                    Demo
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="project5 h-40 shadow-lg shadow-[#040c16] group container rounded flex justify-center items-center mx-auto content-div hover:scale-105 duration-500">
            <div className="opacity-100 text-center">
              <div className="pt-8 text-center">
                <a href="https://jitensayashop.netlify.app/" target="_blank">
                  <button className="text-center rounded px-4 py-1 bg-gray-300 hover:bg-white text-gray-900 font-bold text-lg shadow shadow-gray-500">
                    Demo
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="project6 h-40 shadow-lg shadow-[#040c16] group container rounded flex justify-center items-center mx-auto content-div hover:scale-105 duration-500">
            <div className="opacity-100 text-center">
              <div className="pt-8 text-center">
                <a href="https://headphoneland.netlify.app" target="_blank">
                  <button className="text-center rounded px-4 py-1 bg-gray-300 hover:bg-white text-gray-900 font-bold text-lg shadow shadow-gray-500">
                    Demo
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
