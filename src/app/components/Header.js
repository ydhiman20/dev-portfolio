import { GoArrowRight } from "react-icons/go";
import { headerLinks } from "@/app/constant/data";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../../public/assets/logo.svg";
import DarkModeToggle from "./Toggle";
require("dotenv").config();
const cvLink = process.env.CV_LINK;

function Header() {
  return (
    <header className="py-6 backdrop-blur-xl sticky top-0 z-10 md:block border-b border-gray-100 hidden dark:border-b-trueGray-800">
      {/* Navbar */}
      <nav className="navbar">
        <div className="m-auto container flex justify-between align-middle items-center text-2xl">
          {/* Logo */}
          <h1 id="logo">
            <Link href="/">
              <Image
                alt=""
                className="hover:-rotate-45 transition-transform duration-500 drop-shadow-2xl"
                height={90}
                src={Logo}
                width={90}
              />
            </Link>
          </h1>
          {/* Navbar links */}
          <ul className="flex items-center justify-center">
            {headerLinks.map((item, index) => (
              <li key={index} className="font-semibold">
                <Link
                  aria-label={item.alt}
                  className={`text-sm block mx-3 uppercase dark:text-white ${
                    index === headerLinks.length - 1
                      ? "btn-theme-cta text-accent pr-8 pl-8 py-6 rounded-full block hover:bg-opacity-85"
                      : ""
                  }`}
                  href={item.href}
                  target={item.target}
                >
                  {item.title}
                  {index === headerLinks.length - 1 && (
                    <>
                      <GoArrowRight className="ml-2 inline-block" size={20} />
                    </>
                  )}
                </Link>
              </li>
            ))}
            <li>
              {" "}
              <DarkModeToggle />
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
