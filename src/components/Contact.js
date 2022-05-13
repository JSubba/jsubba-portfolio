import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import ContactDetails from "./ContactDetails";
import ContactForm from "./ContactForm";

const Result = () => {
  return (
    <div
      id="alert-1"
      class="w-[300px] mx-auto flex p-3 bg-blue-100 rounded"
      role="alert"
    >
      <div class="ml-3 text-sm font-medium text-blue-600 dark:text-blue-800">
        <strong>Submitted!</strong> Thank you for your contact.
      </div>
    </div>
  );
};

const Contact = () => {
  const [result, showResult] = useState(false);
  const formRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_vab8u7m",
        "template_flpozjq",
        e.target,
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
    e.target.reset();
    showResult(true);
  };

  return (
    <section
      name="contact"
      className="w-full h-full bg-gray-900 text-gray-300 pt-20"
    >
      <div className="max-w-[55rem] mx-auto pl-8 pb-6">
        <p className="text-4xl font-bold inline border-b-4 border-cyan-500 h-full">
          Contact
        </p>
        <p className="pt-4 pb-2">Hire Me | Freelance | Remote</p>
      </div>

      <div className="max-w-[55rem] mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        <ContactDetails />
        <ContactForm
          formRef={formRef}
          handleSubmit={handleSubmit}
          result={result}
          Result={Result}
        />
      </div>
    </section>
  );
};

export default Contact;
