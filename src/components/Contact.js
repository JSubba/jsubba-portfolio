import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_vab8u7m",
        "template_flpozjq",
        formRef.current,
        "V76xfe1WZnKViSMVp"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section
      name="contact"
      className="w-full h-screen bg-gray-900 flex justify-center items-center px-4 pt-8 md:pt-20"
    >
      <form
        ref={formRef}
        onSubmit={handleSubmit}
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
          name="user_name"
        />
        <input
          className="my-2 p-2 bg-slate-200 rounded"
          type="email"
          placeholder="Email"
          name="user_email"
        />
        <input
          className="mb-2 p-2 bg-slate-200 rounded"
          type="text"
          placeholder="Subject"
          name="user_subject"
        />

        <textarea
          className="bg-slate-200 p-2 rounded"
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button
          className="text-white border-2 hover:bg-cyan-500 px-4 py-3 my-8 mx-auto flex items-center"
          onSubmit={handleSubmit}
        >
          Let's Collaborate
        </button>
      </form>
    </section>
  );
};

export default Contact;
