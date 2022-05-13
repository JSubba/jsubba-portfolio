import React from "react";
import {
  FaRegEnvelope,
  FaRegAddressCard,
  FaHome,
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaGithub,
} from "react-icons/fa";
import { BsShareFill } from "react-icons/bs";

const ContactDetails = () => {
  return (
    <div className="leading-10">
      <div className="py-2 flex">
        <FaRegEnvelope className="text-cyan-600 text-xl mt-3 mr-4" />
        subbacodes@gmail.com
      </div>
      <div className="py-2 flex">
        <FaRegAddressCard className="text-cyan-600 text-xl mt-3 mr-4" />
        Kanagawa, JAPAN
      </div>
      <div className="py-2 flex">
        <FaHome className="text-xl text-cyan-600 mt-3 mr-4" />
        subbacodes.com
      </div>
      <div className="py-2 flex">
        <BsShareFill className="text-xl text-cyan-600 mt-1 mr-4" />
        <div className="social flex mt-1 text-xl cursor-pointer">
          <div className="pr-2">
            <a href="https://www.linkedin.com/in/jsubba/">
              <FaLinkedinIn className="hover:text-cyan-600 hover:scale-110 ease-in duration-500" />
            </a>
          </div>
          <div className="pr-2">
            <a href="https://www.facebook.com/profile.php?id=100081027348654">
              <FaFacebookF className="hover:text-cyan-600 hover:scale-110 ease-in duration-500" />
            </a>
          </div>
          <div className="pr-4">
            <a href="https://twitter.com/SubbaCodes">
              <FaTwitter className="hover:text-cyan-600 hover:scale-110 ease-in duration-500" />
            </a>
          </div>
          <div className="pr-4">
            <a href="https://www.instagram.com/scodecodes/">
              <FaInstagram className="hover:text-cyan-600 hover:scale-110 ease-in duration-500" />
            </a>
          </div>
          <div>
            <a href="https://github.com/">
              <FaGithub className="hover:text-cyan-600 hover:scale-110 ease-in duration-500" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
