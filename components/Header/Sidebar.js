import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import { XIcon } from "@heroicons/react/solid";

const Sidebar = ({ setToggle, toggle }) => {
  const router = useRouter();

  const CloseNav = () => {
    setToggle(false);
  };

  return (
    <div
      className="fixed top-0 h-[100vh] w-[90vw] bg-green-100  z-50 transition-all ease-in-out duration-1000 lg:hidden"
      style={{
        opacity: toggle ? "100%" : "0%",
        // left: toggle ? "0%" : "-100%",
        right: toggle ? "0%" : "-100%",
      }}
    >
      <div className="container flex flex-col z-50">
        <span
          onClick={() => {
            CloseNav();
          }}
          className="text-3xl absolute right-4 top-2 text-gray-800"
        >
          <XIcon className="text-white w-10 ' cursor-pointer " />
        </span>
        <p className="text-4xl m-20">LOGO</p>

        <ul className=" mt-10 items-center space-x-[32px]">
          <li
            onClick={() => {
              CloseNav();
            }}
            className={`font-medium text-base text-black font-secondary hover:text-gray-500 transition-all ease-in-out duration-300 `}
          >
            <Link href="/">Home</Link>
          </li>
          <li
            onClick={() => {
              CloseNav();
            }}
            className={`font-medium text-base text-black font-secondary hover:text-gray-500 transition-all ease-in-out duration-300 ${
              router.pathname.includes("/about") && "text-yellow-500"
            }`}
          >
            <Link href="/about">About</Link>
          </li>
          <li
            onClick={() => {
              CloseNav();
            }}
            className={`font-medium text-base text-black font-secondary hover:text-gray-500 transition-all ease-in-out duration-300 ${
              router.pathname.includes("/test") && "text-yellow-500"
            }`}
          >
            <Link href="/test">Test</Link>
          </li>
          <li
            onClick={() => {
              CloseNav();
            }}
            className={`font-medium text-base text-black font-secondary hover:text-gray-500 transition-all ease-in-out duration-300 ${
              router.pathname.includes("/post") && "text-yellow-500"
            }`}
          >
            <Link href="/post">Contact</Link>
          </li>
          <li
            onClick={() => {
              CloseNav();
            }}
            className={`font-medium text-base text-black font-secondary hover:text-gray-500 transition-all ease-in-out duration-300 ${
              router.pathname.includes("/contact") && "text-yellow-500"
            }`}
          >
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
        {/* <ul
          className="mt-14 pl-4 space-y-5 md:space-y-0 z-10"
          // style={styles.navbar}
        >
          <li
            onClick={() => {
              CloseNav();
            }}
            className={
              router.pathname == "/"
                ? "text-red-400 font-bold text-base font-secondary hover:text-gray-500 transition-all ease-in-out duration-300"
                : "text-yellow-300 font-medium text-base font-secondary hover:text-gray-500 transition-all ease-in-out duration-300"
            }
          >
            <Link className="z-10" href="/">
              Home
            </Link>
          </li>
          <li
            onClick={() => {
              CloseNav();
            }}
            className={
              router.pathname == "/about"
                ? "text-red-400 font-bold text-base font-secondary hover:text-gray-500 transition-all ease-in-out duration-300"
                : "text-yellow-300 font-medium text-base font-secondary hover:text-gray-500 transition-all ease-in-out duration-300"
            }
          >
            <Link href="/about">About</Link>
          </li>
          <li
            onClick={() => {
              CloseNav();
            }}
            className={
              router.pathname == "/contact"
                ? "text-red-400 font-bold text-base font-secondary hover:text-gray-500 transition-all ease-in-out duration-300"
                : "text-yellow-300 font-medium text-base font-secondary hover:text-gray-500 transition-all ease-in-out duration-300"
            }
          >
            <Link href="/contact">Contact</Link>
          </li>
        </ul> */}
      </div>
    </div>
  );
};

export default Sidebar;
