import React from "react";
import AboutImage from "../assets/img/about.png";
import { Link } from "react-scroll";

const About = () => {
  return (
    <section name="about" className="bg-gray-900 text-gray-300 pb-12">
      <div className="max-w-[55rem] mx-auto px-8 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-cyan-500 h-full">
            About Me
          </p>
        </div>

        <div className="features">
          <ul class="features-list pt-8">
            <li>Front-end Development</li>
            <li>3+ years Freelancer</li>
            <li>15+ years Client-side Expereience</li>
            <li>Real Time Collaboration</li>
            <li>Client 1st Service</li>
            <Link to="contact" smooth={true} duration={1000}>
              <button className="shadow-md shadow-cyan-500 hover:text-cyan-500 hover:scale-105 ease-in duration-500 mx-auto sm:ml-12 px-4 py-3 mt-6 font-semibold">
                Let's Connect
              </button>
            </Link>
          </ul>
          <img src={AboutImage} className="pt-2" alt="My portrait" />
        </div>
      </div>
    </section>
  );
};

export default About;
