import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
// import { PrimaryButton, SecondaryButton } from "../../Buttons";
// import styled from "styled-components";
import { ArrowNarrowLeftIcon, MenuIcon, XIcon } from "@heroicons/react/solid";
import Head from "next/head";

const Navbar = () => {
  const router = useRouter();
  console.log(router.pathname);
  //   const [navActive, setNavActive] = useState(null);

  //   const navBackground = () => {
  //     window.scrollY >= 75 ? setNavActive(true) : setNavActive(false);
  //   };

  //   useEffect(function mount() {
  //     window.addEventListener("scroll", navBackground);
  //   });

  const OpenNav = () => {
    document.getElementById("my_Sidebar").style.width = "100%";
  };

  const CloseNav = () => {
    document.getElementById("my_Sidebar").style.width = "0%";
  };

  return (
    <div className="bg-red-100">
      <div className="">
        <div className="container flex justify-between h-20 ">
          <div className="flex items-center">
            <Link href="/">LOGO</Link>
          </div>
          <div className="flex items-center">
            <MenuIcon
              style={{ zIndex: "999" }}
              onClick={() => {
                OpenNav();
              }}
              className="text-black w-8 z-50 h-8 lg:hidden "
            />
          </div>
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
                router.pathname.includes("/contact") && "text-yellow-500"
              }`}
            >
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
      {/* -------------------sidebar------------------------- */}
      {/* <div id="my_Sidebar" className="Sidebar relative"> */}
      <div id="my_Sidebar" className="Sidebar relative">
        <span
          className=""
          onClick={() => {
            CloseNav();
          }}
        >
          {/* <XIcon className="text-white w-10 float-right mr-2 mt-2" /> */}
          <XIcon className="text-white w-10 absolute top-3 right-3 cursor-pointer " />
        </span>
        <ul className="mt-14 pl-4 space-y-3 md:space-y-0">
          <li
            onClick={() => {
              CloseNav();
            }}
            className={`font-medium text-2xl text-white hover:text-gray-500 translate-all  ease-in-out duration-300 ${
              router.pathname === "/" && "text-yellow-500"
            }`}
          >
            <Link href="/">Home</Link>
          </li>
          <li
            onClick={() => {
              CloseNav();
            }}
            className={`font-medium text-2xl text-white hover:text-gray-500 translate-all ease-in-out duration-300 ${
              router.pathname === "/about" && "text-yellow-500"
            }`}
          >
            <Link href="/about">About</Link>
          </li>
          <li
            onClick={() => {
              CloseNav();
            }}
            className={`font-medium text-2xl text-white hover:text-gray-500 translate-all ease-in-out duration-300 ${
              router.pathname === "/test" && "text-yellow-500"
            }`}
          >
            <Link href="/test">Test</Link>
          </li>
          <li
            onClick={() => {
              CloseNav();
            }}
            className={`font-medium text-2xl text-white hover:text-gray-500 translate-all ease-in-out duration-300 ${
              router.pathname === "/contact" && "text-yellow-500"
            }`}
          >
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
