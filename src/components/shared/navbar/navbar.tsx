"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
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
        <a href="#" className="">
          Service
        </a>
      </li>
      <li>
        <a href="https://rakibs.live/" className="">
          Portfolio
        </a>
      </li>
      <li>
        <a href="#" className="">
          Contact
        </a>
      </li>

      <li>
        <a href="https://rakibs.live/blogs" className="">
          Blog
        </a>
      </li>
    </>
  );

  return (
    <div className="sticky  top-0 z-10 bg-white ">
      <div className="px-5 lg:px-20 pt-4">
        <div className="flex items-center justify-between ">
          <div className="flex items-center gap-2">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <h1>Rakib</h1>
          </div>
          <div className="hidden lg:flex list-none gap-3">{navLink}</div>
          <Button className="hidden lg:flex">Resume</Button>
          <div className=" lg:hidden">
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
