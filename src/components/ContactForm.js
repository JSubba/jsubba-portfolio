import React from "react";

const ContactForm = ({ formRef, handleSubmit, result, Result }) => {
  return (
    <form ref={formRef} onSubmit={handleSubmit} className="pt-4 md:pt-0">
      <input
        className="bg-gray-900 p-1 border-b-2 border-gray-500 w-full"
        type="text"
        placeholder="name"
        name="user_name"
        required
      />
      <input
        className="bg-gray-900 p-1 my-1 border-b-2 border-gray-500 w-full"
        type="email"
        placeholder="email"
        name="user_email"
        required
      />
      <input
        className="bg-gray-900 p-1 my-1 border-b-2 border-gray-500 w-full"
        type="text"
        placeholder="subject"
        name="user_subject"
        required
      />
      <textarea
        className="bg-gray-900 p-1 my-1 border-b-2 border-gray-500 w-full"
        placeholder="message"
        name="message"
        rows="3"
      ></textarea>
      <button
        className="shadow-md shadow-cyan-500 hover:text-cyan-500 hover:scale-105 ease-in duration-500 px-4 py-2 mt-4 mb-4 mx-auto flex items-center tracking-widest"
        onSubmit={handleSubmit}
      >
        SUBMIT
      </button>
      <span className="alert">{result ? <Result /> : null}</span>
    </form>
  );
};

export default ContactForm;
