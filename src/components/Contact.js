import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  FaPhoneAlt,
  FaRegEnvelope,
  FaRegAddressCard,
  FaHome,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaWhatsapp,
  FaGithub,
} from "react-icons/fa";

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
      className="w-full h-full bg-gray-900 text-gray-300 pt-16"
    >
      <div className="max-w-[55rem] mx-auto pl-8 pb-6">
        <p className="text-4xl font-bold inline border-b-4 border-cyan-500 h-full">
          Contact
        </p>
      </div>

      <div className="max-w-[55rem] mx-auto px-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <div className="py-2 flex">
            <FaPhoneAlt className="text-xl text-cyan-500 mt-1 mr-4" />
            +81 90 1234 5555
          </div>
          <div className="py-2 flex">
            <FaRegEnvelope className="text-xl text-cyan-500 mt-1 mr-4" />
            subbacodes@gmail.com
          </div>
          <div className="py-2 flex">
            <FaRegAddressCard className="text-xl text-cyan-500 mt-1 mr-4" />
            Kanagawa Ken, JAPAN
          </div>
          <div className="py-2 flex">
            <FaHome className="text-xl text-cyan-500 mt-1 mr-4" />
            subbacodes.com
          </div>
          <div className="social flex py-4 text-2xl">
            <span className="pr-4">
              <FaFacebookF className="hover:text-cyan-500" />
            </span>
            <span className="pr-4">
              <FaTwitter className="hover:text-cyan-500" />
            </span>
            <span className="pr-4">
              <FaInstagram className="hover:text-cyan-500" />
            </span>
            <span className="pr-4">
              <FaWhatsapp className="hover:text-cyan-500" />
            </span>
            <span>
              <FaGithub className="hover:text-cyan-500" />
            </span>
          </div>
        </div>

        <form ref={formRef} onSubmit={handleSubmit}>
          <input
            className="bg-gray-900 p-1 border-b-2 border-cyan-500 w-full"
            type="text"
            placeholder="Name"
            name="user_name"
          />
          <input
            className="bg-gray-900 p-1 my-1 border-b-2 border-cyan-500 w-full"
            type="email"
            placeholder="Email"
            name="user_email"
          />
          <input
            className="bg-gray-900 p-1 my-1 border-b-2 border-cyan-500 w-full"
            type="text"
            placeholder="Subject"
            name="user_subject"
          />
          <textarea
            className="bg-gray-900 p-1 my-1 border-b-2 border-cyan-500 w-full"
            name="message"
            rows="2"
            placeholder="Message"
          ></textarea>
          <button
            className="text-white border-2 border-cyan-600 hover:bg-cyan-600 px-4 py-3 my-4 mx-auto flex items-center"
            onSubmit={handleSubmit}
          >
            Let's Connect
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
