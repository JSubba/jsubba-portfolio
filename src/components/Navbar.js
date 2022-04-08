import React, { useState } from "react";
import {
  FaTimes,
  FaBars,
  FaGithub,
  FaFacebook,
  FaLinkedinIn,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Logo from "../assets/img/logo.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <section
      name="navbar"
      className="fixed w-full h-20 flex justify-between items-center px-4 bg-gray-900 text-gray-300"
    >
      <img src={Logo} alt="logo" style={{ width: "3rem" }} />
      <ul className="hidden md:flex">
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
      <div
        className="md:hidden z-10 text-3xl"
        onClick={handleClick}
        style={{ width: "3rem" }}
      >
        {nav ? <FaTimes /> : <FaBars />}
      </div>
      {/* toggle-menu */}
      <ul
        className={
          nav
            ? "absolute top-0 left-0 w-full h-screen bg-stone-900 flex flex-col justify-center items-center"
            : "hidden"
        }
      >
        <li className="py-6 text-4xl">Home</li>
        <li className="py-6 text-4xl">About</li>
        <li className="py-6 text-4xl">Skills</li>
        <li className="py-6 text-4xl">Projects</li>
        <li className="py-6 text-4xl">Contact</li>
      </ul>
      {/* social icons  */}
      <ul className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-sky-700">
          <a
            href="/"
            className="flex justify-between items-center w-full text-gray-300"
          >
            Github
            <FaLinkedinIn size={30} />
          </a>
        </li>
        <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
          <a
            href="/"
            className="flex justify-between items-center w-full text-gray-300"
          >
            Github
            <FaGithub size={30} />
          </a>
        </li>
        <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
          <a
            href="/"
            className="flex justify-between items-center w-full text-gray-300"
          >
            Facebook
            <FaFacebook size={30} />
          </a>
        </li>
        <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
          <a
            href="/"
            className="flex justify-between items-center w-full text-gray-300"
          >
            Email
            <HiOutlineMail size={30} />
          </a>
        </li>
        <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
          <a
            href="/"
            className="flex justify-between items-center w-full text-gray-300"
          >
            Resume
            <BsFillPersonLinesFill size={30} />
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Navbar;
