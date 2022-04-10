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
import { Link } from "react-scroll";

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
        <li>
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="projects" smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
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
        <li className="py-6 text-4xl">
          <Link to="home" onClick={handleClick} smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link to="about" onClick={handleClick} smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link to="skills" onClick={handleClick} smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            to="projects"
            onClick={handleClick}
            smooth={true}
            duration={500}
          >
            Projects
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link to="contact" onClick={handleClick} smooth={true} duration={500}>
            Contact
          </Link>
        </li>
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
