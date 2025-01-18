import { GoArrowRight } from "react-icons/go";
import { headerLinks } from "@/app/constant/data";
import Link from "next/link";
function Header() {
  return (
    <header className="py-6 backdrop-blur sticky top-0 z-10 bg-gradient-to-r from-[#f6f3ff1f] to-[#aaaaaa1f] md:block hidden">
      {/* Navbar */}
      <nav className="navbar">
        <div className="m-auto container flex justify-between align-middle items-center text-2xl">
          {/* Logo */}
          <h1 id="logo">
            <Link
              className="font-bold uppercase bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent"
              href="/"
            >
              GO
            </Link>
          </h1>
          {/* Navbar links */}
          <ul className="flex items-center justify-center">
            {headerLinks.map((item, index) => (
              <li key={index} className="font-semibold">
                <Link
                  aria-label={item.alt}
                  className={`text-sm block mx-3 uppercase ${
                    index === headerLinks.length - 1
                      ? "bg-gradient-to-r from-amber-200 to-yellow-300 text-gray-700 dark:text-black pr-5 pl-6 py-3 rounded-full block hover:bg-opacity-85"
                      : ""
                  }`}
                  href={item.href}
                >
                  {item.title}
                  {index === headerLinks.length - 1 && (
                    <>
                      <GoArrowRight className="text-black inline text-xl -mt-1 ml-2" />
                    </>
                  )}
                </Link>
              </li>
            ))}
            <li></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
