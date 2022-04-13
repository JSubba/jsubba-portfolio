import React from "react";
import AboutImage from "../assets/img/about-image.png";

const About = () => {
  return (
    <section name="about" className="bg-gray-900 text-gray-300 pt-32 pb-6">
      {/* <div className="max-w-[55rem] mx-auto pb-16 sm:pb-0"> */}
      <div className="max-w-[55rem] mx-auto flex flex-col justify-center w-full h-full">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="about-image">
            <img
              class="mx-auto h-80 object-cover  border-1 border-gray-600 rounded shadow-md shadow-gray-500"
              src={AboutImage}
              alt="about"
            />
          </div>

          <div className="sm:max-w-xl">
            <div className="h-full p-6 sm:pt-0 flex flex-col justify-start">
              <p class="text-4xl text-gray-300 font-bold mb-4">
                <span className="border-b-4 border-cyan-500">About Me</span>
              </p>
              <p className="mb-4">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer card with supporting text below as a natural lead-in to
                additional content.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                nulla at et libero. Aut temporibus deleniti ex saepe minima
                tenetur dicta itaque aspernatur? Asperiores nihil repudiandae
                perspiciatis veritatis? Facere, consequuntur.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
