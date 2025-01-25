"use client";

import { headerLinks } from "@/app/constant/data";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { GoArrowRight } from "react-icons/go";
import { RxCross1, RxHamburgerMenu } from "react-icons/rx";

import darkLogo from "../../../public/assets/logo-white.svg";
import lightLogo from "../../../public/assets/logo.svg";
import DarkModeToggle from "./Toggle";

function Header() {
  const [toggle, setToggle] = useState(false); // Boolean for menu toggle
  const { setTheme, theme } = useTheme(); // Use next-themes for managing themes

  const toggleMenu = () => {
    setToggle((prevState) => !prevState); // Toggle menu visibility
  };

  const handleLinkClick = () => {
    setToggle(false); // Hide menu after a link is clicked
  };

  return (
    <header className="py-4 px-4 md:px-0 backdrop-blur-xl sticky top-0 z-10 border-b border-gray-100 dark:border-[#282828]">
      {/* Navbar */}
      <nav className="navbar">
        <div className="container m-auto flex justify-between items-center text-2xl w-full">
          {/* Logo */}
          <h1 className="w-16 md:w-24" id="logo">
            <Link href="/">
              <Image
                alt="Logo"
                className="hover:-rotate-45 transition-transform duration-500 drop-shadow-2xl"
                height="auto"
                src={theme === "dark" ? darkLogo : lightLogo}
                width="auto"
              />
            </Link>
          </h1>

          {/* Navbar Links */}
          <ul
            className={`md:flex items-center justify-center fixed md:static top-0 left-0 bottom-0 bg-white right-0 w-full flex flex-col md:flex-row md:w-auto md:h-auto h-screen dark:bg-black md:bg-transparent md:dark:bg-transparent py-6 md:py-0 transition-transform duration-300 ${
              toggle ? "translate-x-0" : "-translate-x-full md:translate-x-0"
            }`}
          >
            {headerLinks.map((item, index) => (
              <li key={index} className="font-semibold py-4 md:py-0">
                <Link
                  aria-label={item.alt}
                  className={`text-sm block mx-3 uppercase dark:text-white ${
                    index === headerLinks.length - 1
                      ? "btn-theme-cta text-accent pr-8 pl-8 py-6 rounded-full block hover:bg-opacity-85"
                      : ""
                  }`}
                  href={item.href}
                  onClick={handleLinkClick} // Close menu on link click
                  target={item.target}
                >
                  {item.title}
                  {index === headerLinks.length - 1 && (
                    <GoArrowRight className="ml-2 inline-block" size={20} />
                  )}
                </Link>
              </li>
            ))}
            <li>
              {/* Theme Toggle */}
              <DarkModeToggle setTheme={setTheme} theme={theme} />
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden z-10 text-black dark:text-white"
            onClick={toggleMenu}
          >
            {toggle ? <RxCross1 /> : <RxHamburgerMenu />}
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
