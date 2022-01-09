import React, { useState } from "react";
import { useRouter } from "next/router";
import Sidebar from "./Sidebar";
import Link from "next/link";
import { MenuIcon, GlobeIcon } from "@heroicons/react/solid";

const Header = () => {
  const router = useRouter();

  const [toggle, setToggle] = useState(false);
  const openNav = () => {
    setToggle(true);
  };

  return (
    <div className="bg-red-100 z-50">
      <div className="container flex justify-between py-2 items-center">
        <span className="text-xl text-blue-500">
          <Link href="/">Testing</Link>
        </span>
        <div
          className=" lg:hidden "
          onClick={() => {
            openNav();
          }}
        >
          <MenuIcon
            // style={{ zIndex: "999" }}
            className="text-black w-8 z-50 h-8 lg:hidden "
          />
        </div>
        {/* <Sidebar toggle={toggle} isOpen={isOpen} /> */}
        <div className="hidden lg:block">
          <ul className="lg:flex items-center space-x-[32px] hidden">
            <li
              className={`font-medium text-base text-black font-secondary hover:text-gray-500 transition-all ease-in-out duration-300 `}
            >
              <Link href="/">Home</Link>
            </li>
            <li
              className={`font-medium text-base text-black font-secondary hover:text-gray-500 transition-all ease-in-out duration-300 ${
                router.pathname.includes("/about") && "text-yellow-500"
              }`}
            >
              <Link href="/about">About</Link>
            </li>
            <li
              className={`font-medium text-base text-black font-secondary hover:text-gray-500 transition-all ease-in-out duration-300 ${
                router.pathname.includes("/test") && "text-yellow-500"
              }`}
            >
              <Link href="/test">Test</Link>
            </li>
            <li
              className={`font-medium text-base text-black font-secondary hover:text-gray-500 transition-all ease-in-out duration-300 ${
                router.pathname.includes("/post") && "text-yellow-500"
              }`}
            >
              <Link href="/post">post</Link>
            </li>
            <li
              className={`font-medium text-base text-black font-secondary hover:text-gray-500 transition-all ease-in-out duration-300 ${
                router.pathname.includes("/contact") && "text-yellow-500"
              }`}
            >
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
      <Sidebar toggle={toggle} setToggle={setToggle} />
    </div>
  );
};

export default Header;
