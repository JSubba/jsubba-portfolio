import React from "react";

import HTML from "../assets/img/html.png";
import CSS from "../assets/img/css.png";
import JavaScript from "../assets/img/javascript.png";
import ReactImg from "../assets/img/react.png";
import FireBase from "../assets/img/firebase.png";
import GitHub from "../assets/img/github.png";
import Tailwind from "../assets/img/tailwind.png";
import MySql from "../assets/img/mysql.png";

const Skills = () => {
  return (
    <section
      name="skills"
      className="w-full h-full bg-gray-900 text-gray-300 py-16"
    >
      <div className="max-w-[55rem] mx-auto px-8 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-cyan-500 h-full">
            Skills
          </p>
          <p className="pt-4 pb-10">Some Technologies I work with:</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={HTML} alt="HTML icon" />
            <p className="my-4">HTML</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={CSS} alt="HTML icon" />
            <p className="my-4">CSS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={JavaScript} alt="HTML icon" />
            <p className="my-4">JAVASCRIPT</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={ReactImg} alt="HTML icon" />
            <p className="my-4">REACT</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={GitHub} alt="HTML icon" />
            <p className="my-4">GITHUB</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Tailwind} alt="HTML icon" />
            <p className="my-4">TAILWIND</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={FireBase} alt="HTML icon" />
            <p className="my-4">FIREBASE</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={MySql} alt="HTML icon" />
            <p className="my-4">MySQL</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
