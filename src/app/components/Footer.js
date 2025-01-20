import { contactDetails, socialLinks } from "@/app/constant/data";

import Image from "next/image";
import Link from "next/link";
function Footer() {
  return (
    <footer
      className="py-20 mt-20 bg-primary dark:bg-primary flex flex-col items-center justify-center text-white min-h-[200px] text-center"
      id="footer"
    >
      <div className="container">
        {/* Email Link */}
        <Link
          className="text-sm hover:underline"
          href={`mailto:${contactDetails.email}`}
        >
          {contactDetails.email}
        </Link>

        {/* Social Links */}
        <div className="social my-6">
          <ul className="flex items-center justify-center">
            {socialLinks.map((item, index) => (
              <li key={index} className="px-1">
                <Link
                  aria-label={item.alt}
                  className="w-16  h-16 border flex items-center justify-center rounded-full"
                  href={item.href}
                  target={item.target}
                >
                  <Image
                    priority
                    alt={item.alt}
                    height={20}
                    src={`/assets/${item.src}`}
                    width={20}
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
