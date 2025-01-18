import Link from "next/link";
import { GoArrowRight } from "react-icons/go";

function Button({ children, icon = false, href }) {
  return (
    <Link
      className={`bg-gradient-to-tr from-amber-200 to-yellow-300 text-sm font-semibold py-5 rounded-full hover:bg-opacity-85 uppercase text-gray-700 dark:bg-primary dark:text-black ${
        icon ? "pl-8 pr-6" : "px-8"
      }`}
      href={href}
    >
      <span className="flex items-center justify-center">
        {children}
        {icon && (
          <GoArrowRight className="text-gray-700 font-semibold text-xl -mt-1 ml-2 dark:text-black" />
        )}
      </span>
    </Link>
  );
}

export default Button;
