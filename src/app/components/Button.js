import Link from "next/link";
import { GoArrowRight } from "react-icons/go";

function Button({ children, href, icon = false }) {
  return (
    <Link
      className={`btn-theme  text-sm font-semibold md:py-3 py-3 px-10 rounded-full hover:bg-opacity-85 uppercase text-white dark:text-black dark:bg-[#ffbd5d] ${
        icon ? "pl-8 pr-6" : "px-8"
      }`}
      href={href}
    >
      <span className="flex items-center justify-center">
        {children}
        {icon && <GoArrowRight className="ml-1" size={20} />}
      </span>
    </Link>
  );
}

export default Button;
