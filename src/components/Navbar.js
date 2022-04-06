import React, { useState } from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import Logo from "../assets/img/logo.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <navbar
      name="navbar"
      className="fixed w-full h-20 flex justify-between items-center px-4 bg-stone-900 text-gray-300"
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
            ? "toggle-menu absolute top-0 left-0 w-full h-screen bg-stone-900 flex flex-col justify-center items-center"
            : "hidden"
        }
      >
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
    </navbar>
  );
};

export default Navbar;
