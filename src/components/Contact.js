import React from "react";

const Contact = () => {
  return (
    <section
      name="contact"
      className="w-full h-screen bg-gray-900 flex justify-center items-center p-4 pt-32"
    >
      <form
        method="POST"
        action="https://getform.io/f/a699a1b2-f225-434e-b317-1fbbde8e006c"
        className="flex flex-col max-w-[600px] w-full h-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-cyan-500 text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-4">
            Submit the form below or contact me directly at - myemail@gmail.com
          </p>
        </div>
        <input
          className="bg-slate-200 p-2 rounded"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-slate-200 rounded"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-slate-200 p-2 rounded"
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className="text-white border-2 hover:bg-cyan-500 px-4 py-3 my-8 mx-auto flex items-center">
          Let's Collaborate
        </button>
      </form>
    </section>
  );
};

export default Contact;
