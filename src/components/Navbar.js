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
    <nav
      name="navbar"
      className="bg-gray-900 w-full h-16 flex justify-between items-center px-4 text-gray-300"
    >
      <img src={Logo} alt="logo" style={{ width: "7rem" }} />
      <ul className="hidden md:flex">
        <li className="shadow shadow-[#040c16] mr-1">
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="shadow shadow-[#040c16] mr-1">
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="shadow shadow-[#040c16] mr-1">
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="shadow shadow-[#040c16] mr-1">
          <Link to="projects" smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li className="shadow shadow-[#040c16]">
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
      <div
        className="md:hidden z-10 text-3xl"
        onClick={handleClick}
        style={{ width: "2.5rem", fontSize: "1.5rem" }}
      >
        {nav ? <FaTimes /> : <FaBars />}
      </div>

      {/* toggle-menu */}
      <ul
        className={
          nav
            ? "absolute top-0 left-0 w-full h-screen bg-gray-900 flex flex-col justify-center items-center"
            : "hidden"
        }
      >
        <li className="py-6 text-4xl hover:underline">
          <Link to="home" onClick={handleClick} smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl hover:underline">
          <Link to="about" onClick={handleClick} smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-6 text-4xl hover:underline">
          <Link to="skills" onClick={handleClick} smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl hover:underline">
          <Link
            to="projects"
            onClick={handleClick}
            smooth={true}
            duration={500}
          >
            Projects
          </Link>
        </li>
        <li className="py-6 text-4xl hover:underline">
          <Link to="contact" onClick={handleClick} smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* social icons  */}
      <ul className="hidden lg:flex fixed flex-col top-[32%] left-0">
        <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-sky-700">
          <a
            href="https://www.linkedin.com/in/jsubba/"
            className="flex justify-between items-center w-full text-gray-300"
          >
            LinkedIn
            <FaLinkedinIn size={30} />
          </a>
        </li>
        <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
          <a
            href="https://github.com/"
            className="flex justify-between items-center w-full text-gray-300"
          >
            Github
            <FaGithub size={30} />
          </a>
        </li>
        <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
          <a
            href="https://www.facebook.com/profile.php?id=100081027348654"
            className="flex justify-between items-center w-full text-gray-300"
          >
            Facebook
            <FaFacebook size={30} />
          </a>
        </li>
        <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="flex justify-between items-center w-full text-gray-300"
          >
            Email
            <HiOutlineMail size={30} />
          </Link>
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
    </nav>
  );
};

export default Navbar;
