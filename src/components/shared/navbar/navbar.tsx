"use client";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/16/solid";
import { useState } from "react";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const navLink = (
    <>
      <li>
        <a href="#" className="">
          Home
        </a>
      </li>
      <li>
        <a href="#" className="">
          About
        </a>
      </li>
      <li>
        <a href="https://rakibs.live/" className="">
          Portfolio
        </a>
      </li>
      <li>
        <a href="#" className="">
          Client
        </a>
      </li>

      <li>
        <a href="https://rakibs.live/blogs" className="">
          Blog
        </a>
      </li>
      <li>
        <a href="https://rakibs.live/blogs" className="">
          Contact
        </a>
      </li>
    </>
  );

  return (
    <div className="sticky  top-0 z-20 ">
      <div className="px-7 py-3  lg:px-40">
        <div className="flex justify-between">
          <div className="flex items-center gap-3 ">
            <h1 className="font-poppins text-2xl font-semibold">Rakib</h1>
            <div className="hidden lg:flex items-center font-raleway list-none gap-5 ml-9">
              {navLink}
            </div>
          </div>

          <div className="hidden lg:flex items-center ml-[220px]">
            <button className="uppercase px-3 py-2 bg-yellow-400 font-roboto text-black text-sm font-semibold">
              book a table{" "}
            </button>
          </div>
          <div className="flex gap-6 ">
            <div className="lg:hidden flex items-center">
              {toggleMenu ? (
                <button onClick={() => setToggleMenu(!toggleMenu)}>
                  <XMarkIcon className="h-6" />
                </button>
              ) : (
                <button onClick={() => setToggleMenu(!toggleMenu)}>
                  <Bars3BottomRightIcon className="h-6" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      <div
        className={`fixed z-40 top-0 left-0 h-full w-3/4 bg-black bg-opacity-80 text-white overflow-hidden flex flex-col gap-12 origin-left duration-700 transform ${
          toggleMenu ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="px-8">
          <div className="flex flex-col list-none mt-10 gap-1 font-raleway  tracking-wider">
            {navLink}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
