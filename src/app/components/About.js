"use client";

import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import Button from "./Button";
import avatar from "../../../public/assets/profile-image.svg";
import { ABOUT_CONTENT } from "../constant/data";

function HomeAbout() {
  return (
    <section className="flex flex-col items-center text-center pt-16 justify-center">
      {/* Avatar */}
      <div className="animate-bounce">
        <Image
          alt={ABOUT_CONTENT.avatarAlt}
          height={150}
          src={avatar}
          width={150}
        />
      </div>

      {/* Greeting */}
      <h1 className="font-bold knewave-regular md:text-2xl -tracking-[0.1rem] mt-4">
        {ABOUT_CONTENT.greeting}
      </h1>

      {/* Title with Animation */}
      <h2 className="text-theme md:text-7xl -tracking-[0.5rem] text-3xl mt-3 font-bold max-w-[1000px]">
        {ABOUT_CONTENT.title} {""}
        <TypeAnimation
          cursor
          repeat={Infinity}
          sequence={[ABOUT_CONTENT.typeAnimation, 100]}
          speed={10}
          wrapper="span"
        />
      </h2>

      {/* Description */}
      <p className="text-base p-2 mt-3 mb-4 max-w-[700px] dark:text-white normal-case">
        {ABOUT_CONTENT.description}
      </p>

      {/* Call-to-Action Button */}
      <Button href={ABOUT_CONTENT.buttonLink}>
        {ABOUT_CONTENT.buttonText}
      </Button>

      {/* Divider */}
      <hr className="mt-20 mb-20 border-solid border-gray-800" />
    </section>
  );
}

export default HomeAbout;
