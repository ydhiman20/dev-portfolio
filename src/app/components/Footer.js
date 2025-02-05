import { contactDetails, socialLinks } from "@/app/constant/data";
import Link from "next/link";
import Image from "next/image";

function Footer() {
  return (
    <footer
      className="py-20 mt-20 bg-primary dark:border-t dark:border-[#282828] flex flex-col items-center justify-center text-white min-h-[200px] text-center"
      id="footer"
    >
      <div className="container">
        {/* Social Links */}
        <div className="social my-6">
          <ul className="flex items-center justify-center">
            {socialLinks.map((item, index) => (
              <li className="px-1" key={index}>
                <Link
                  aria-label={item.alt}
                  className="md:w-12 md:h-12 w-10 h-10 border flex items-center justify-center rounded-full"
                  href={item.href}
                  target={item.target}
                >
                  <Image
                    alt={item.alt}
                    height={14}
                    priority
                    src={`/assets/${item.src}`}
                    width={14}
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Copyright */}
        <p className="text-sm">{contactDetails.copyright}</p>
      </div>
    </footer>
  );
}

export default Footer;
