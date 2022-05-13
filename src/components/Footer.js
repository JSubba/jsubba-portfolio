import React from "react";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import { Link } from "react-scroll";

const Footer = () => {
  const d = new Date();
  const year = d.getFullYear();
  return (
    <footer className="bg-gray-900 text-gray-500 pt-20 pb-2 relative">
      <div className="max-w-[55rem] mx-auto px-8 flex flex-col justify-center">
        <Link
          to="navbar"
          smooth={true}
          duration={1000}
          className="top-return-btn"
        >
          <HiOutlineChevronDoubleUp className="mx-auto mb-4 h-8 w-4 shadow shadow-cyan-500 hover:text-cyan-500 cursor-pointer" />
        </Link>
        <p className="text-xs opacity-75 text-center pt-2 pb-0 pl-3 md:pl-0 border-t-4 border-cyan-500">
          &copy;SUBBACODES | <span className="text-sm">{year}</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
